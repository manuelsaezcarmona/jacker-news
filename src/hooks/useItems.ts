import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getDataItems, getTopIds, type TypeOfTop } from '../services/api';
import { createPagination } from '../utils';

export const useItems = (typeTop: TypeOfTop, pageSize: number) => {
  const queryIDs = useQuery({
    queryKey: ['itemIds', typeTop],
    queryFn: () => getTopIds(typeTop),
  });

  const { data: itemIDs, isError: isErrorIDs, status: statusIDs, isLoading: isLoadingIDs } = queryIDs;

  const paginatedIds =
    !isErrorIDs && !isLoadingIDs && statusIDs === 'success' ? createPagination(itemIDs, pageSize) : [];

  const queryDataItems = useInfiniteQuery({
    queryKey: ['dataItems', itemIDs], // Incluye itemIDs para regenerar la consulta cuando cambien
    queryFn: ({ pageParam }) => getDataItems(paginatedIds[pageParam]),
    initialPageParam: 0,
    enabled: !!itemIDs && itemIDs.length > 0,
    getNextPageParam: (lastPage, allPages) => {
      // Esta función debe retornar el parámetro para la próxima página.
      // Dependiendo de la estructura de tu respuesta de 'getDataItems', esto puede variar.
      // Por ejemplo, si tu API devuelve un campo indicando la próxima página:
      return lastPage.length;
    },
  });

  const { data: dataPage, isError: isErrorPage, status: statusPage, isLoading: isLoadingPage } = queryDataItems;

  const itemsCurrentPage =
    queryDataItems.status === 'success' && dataPage?.pages.length === 1 ? dataPage?.pages[0] : [];

  return {
    itemIDs,
    isErrorIDs,
    statusIDs,
    isLoadingIDs,
    paginatedIds,
    queryDataItems,
    itemsCurrentPage,
    dataPage,
    isErrorPage,
    statusPage,
    isLoadingPage,
  };
};
