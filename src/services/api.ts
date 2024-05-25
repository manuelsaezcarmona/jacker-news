import { type Item } from '../types';

const url = 'https://hacker-news.firebaseio.com/';
const version = `v0`;

const resource = 'item';

export enum TypeOfTop {
  new = 'newstories.json',
  top = 'topstories.json',
  best = 'beststories.json',
}

type Result<T> = { type: 'success'; value: T } | { type: 'error'; error: Error };

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

export const getAllItems = async (typeoftop: TypeOfTop): Promise<Item[]> => {
  const topIds = await getTopIds(typeoftop);
  // Aqui podemos poner la implementacion de la paginacion pasando en vez de top IDs pasar
  // un array paginado.
  const topItems = await getDataItems(topIds);
  return topItems
    .filter((item: Result<Item>): item is { type: 'success'; value: Item } => item.type === 'success')
    .map((result) => result.value); // Aquí TypeScript ya sabe que result es de tipo { type: 'success', value: Item }
};
