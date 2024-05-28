import { type Item, Comment } from '../types';

const url = 'https://hacker-news.firebaseio.com/';
const version = `v0`;

const resource = 'item';

export enum TypeOfTop {
  New = 'newstories.json',
  Top = 'topstories.json',
  Best = 'beststories.json',
}

export type Result<T> = { type: 'success'; value: T } | { type: 'error'; error: Error };

export const getTopIds = async (typeoftop: TypeOfTop): Promise<number[]> => {
  const response = await fetch(`${url}/${version}/${typeoftop}`);
  const ids = await response.json();
  return ids;
};

export const getInfoItem = async (ID: number): Promise<Item> => {
  const response = await fetch(`${url}/${version}/${resource}/${ID}.json`);
  const info = await response.json();

  if (info === null) {
    throw new Error('Item no existe');
  }

  return info;
};

export const getDataItems = async (ids: number[], limit?: number): Promise<Result<Item>[]> => {
  try {
    const idsToSend = limit && limit > 0 ? ids.slice(0, limit) : [...ids];

    const itemsPromises = idsToSend.map(async (id) => {
      const response = await getInfoItem(id);

      return response;
    });

    const resultsResponses = await Promise.allSettled(itemsPromises);

    const dataItems: Result<Item>[] = resultsResponses.map((result) => {
      if (result.status === 'fulfilled') {
        return { type: 'success', value: result.value };
      }
      return { type: 'error', error: new Error('Sin datos') };
    });

    return dataItems;
  } catch (error) {
    return [{ type: 'error', error: new Error('Error al realizar la peticion de los datos') }];
  }
};

// Para Mañana. puedo realizar un fetch paginado que
// le pase un array paginado (paginated Id : number[][] y un
// indice de pagina que sera el pageParam que me pide TanStackQuery
export const getDataItemsWithPageParam = async (
  paginationArray: number[][],
  pageParam: number
): Promise<Result<Item>[]> => {
  try {
    const pageParamArray = paginationArray[pageParam];
    const itemsPromises = pageParamArray.map(async (id) => {
      const response = await getInfoItem(id);

      return response;
    });

    const resultsResponses = await Promise.allSettled(itemsPromises);

    const dataItems: Result<Item>[] = resultsResponses.map((result) => {
      if (result.status === 'fulfilled') {
        return { type: 'success', value: result.value };
      }
      return { type: 'error', error: new Error('Sin datos') };
    });

    return dataItems;
  } catch (error) {
    return [{ type: 'error', error: new Error('Error al realizar la peticion de los datos') }];
  }
};

export const getAllItems = async (typeoftop: TypeOfTop): Promise<Item[]> => {
  const topIds = await getTopIds(typeoftop);
  // Aqui podemos poner la implementacion de la paginacion pasando en vez de top IDs pasar
  // un array paginado.
  const topItems = await getDataItems(topIds);
  return topItems
    .filter((item: Result<Item>): item is { type: 'success'; value: Item } => item.type === 'success')
    .map((result) => result.value); // Aquí TypeScript ya sabe que result es de tipo { type: 'success', value: Item }
};

// Función principal para iniciar la recopilación de información
export const getAllCommentsByID = async (id: number) => {
  const result: any[] = [];

  // Función recursiva para procesar cada ID y sus 'kids' si existen
  const processId = async (currentId: number) => {
    const data = await getInfoItem(currentId); // Obtiene los datos del ID actual
    result.push(data); // Almacena los datos obtenidos

    // Si los datos tienen una propiedad 'kids' y contiene elementos, procesa cada ID en esa lista
    if (data.kids && data.kids.length > 0) {
      // Usar Promise.all para manejar todas las promesas de los 'kids' en paralelo
      await Promise.all(data.kids.map((kidId) => processId(kidId)));
    }
  };

  await processId(id); // Inicia el proceso con el ID inicial
  return result; // Devuelve todos los datos recogidos
};

export const fetchComments = async (commentID: number): Promise<Comment> => {
  const processComment = async (currentID: number): Promise<Comment> => {
    const item = await getInfoItem(currentID);
    const comment = item as Comment;

    if (comment.kids && comment.kids.length > 0) {
      comment.children = await Promise.all(comment.kids.map((kidID) => processComment(kidID)));
    }
    return comment;
  };

  return processComment(commentID);
};
