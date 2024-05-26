import { type Item } from '../types';

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

// Para Mañana. puedo realizar un fetch paginado que
// le pase un array paginado (paginated Id : number[][] y un
// indice de pagina que sera el pageParam que me pide TanStackQuery
export const getDataItems = async (ids: number[]): Promise<Result<Item>[]> => {
  try {
    const itemsPromises = ids.map(async (id) => {
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
