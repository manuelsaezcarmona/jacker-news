import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getDataItems, getDataItemsWithPageParam, getTopIds, type TypeOfTop } from '../services/api';
import { createPagination } from '../utils';

export const useItems = (typeTop: TypeOfTop, pageSize: number) => {
  const queryIDs = useQuery({
    queryKey: ['itemIds', typeTop],
    queryFn: () => getTopIds(typeTop),
  });

  const {
    data: itemIDs,
    isError: isErrorIDs,
    status: statusIDs,
    isLoading: isLoadingIDs,
    isFetching: isFetchingIDs,
    isFetched: isFetchedIDs,
    isRefetching: isRefetchingIDs,
  } = queryIDs;

  const paginatedIds =
    !isErrorIDs && !isLoadingIDs && statusIDs === 'success' ? createPagination(itemIDs, pageSize) : [];

  const queryDataItems = useInfiniteQuery({
    queryKey: ['dataItems', itemIDs], // Incluye itemIDs para regenerar la consulta cuando cambien
    queryFn: ({ pageParam }) => getDataItems(paginatedIds[pageParam]),
    initialPageParam: 0,
    enabled: !!itemIDs && itemIDs.length > 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length : undefined;
    },
  });

  const {
    data: dataPage,
    isError: isErrorPage,
    status: statusPage,
    isLoading: isLoadingPage,
    fetchNextPage,
    isFetching: isFetchingPage,
    isFetchingNextPage,
    isFetched: isFetchedPage,
    isRefetching: isRefetchingPage,
  } = queryDataItems;

  const itemsCurrentPage =
    queryDataItems.status === 'success' && dataPage?.pages?.length && dataPage?.pages?.length > 0
      ? dataPage?.pages?.flat()
      : [];

  return {
    itemIDs,
    isErrorIDs,
    statusIDs,
    isLoadingIDs,
    paginatedIds,
    isFetchingIDs,
    isFetchedIDs,
    isRefetchingIDs,
    queryDataItems,
    itemsCurrentPage,
    dataPage,
    isErrorPage,
    statusPage,
    isLoadingPage,
    fetchNextPage,
    isFetchingPage,
    isFetchingNextPage,
    isFetchedPage,
    isRefetchingPage,
  };
};
