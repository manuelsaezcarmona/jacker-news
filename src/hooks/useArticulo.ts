import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getAllItems, getTopIds, type TypeOfTop } from '../services/api';

export const useArticulos = (typeTop: TypeOfTop) => {
  const query = useQuery({
    queryKey: ['itemIds'],
    queryFn: async () => getTopIds(typeTop),
  });

  const { data, isError, status, isLoading } = query;

  return {
    data,
    isError,
    status,
    isLoading,
  };
};
