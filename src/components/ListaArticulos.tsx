/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import type { Result, TypeOfTop } from '../services/api';
import { useItems } from '../hooks/useItems';
import { SkeletonArticulo } from './skeletons/SkeletonArticulo';
import { Item } from '../types';
import { Articulo } from './Articulo';

interface ListArticulosProp {
  typoDeTop: TypeOfTop;
  pageSize: number;
}

export const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export function ListArticulos({ typoDeTop, pageSize }: ListArticulosProp) {
  const {
    statusIDs,

    itemsCurrentPage,

    statusPage,
    fetchNextPage,
  } = useItems(typoDeTop, pageSize);

  const SkeletonList = Array.from({ length: pageSize }, (_, index) => `sklt-${index}`);

  const handleClick = () => {
    fetchNextPage();
  };

  const isViewSkeletons = () => {
    if (statusIDs === 'pending' && statusPage === 'pending') {
      return true;
    }
    if (statusIDs === 'success' && statusPage === 'pending') {
      return true;
    }
    return false;
  };

  const isSkeletonView = isViewSkeletons();

  return (
    <>
      {isSkeletonView ? (
        <UL>
          {SkeletonList.map((skeletonID, index) => (
            <li key={skeletonID + index}>
              <SkeletonArticulo key={skeletonID} />
            </li>
          ))}
        </UL>
      ) : (
        <UL className="lista-articulos">
          {itemsCurrentPage
            .filter((result: Result<Item>): result is { type: 'success'; value: Item } => result.type === 'success')
            .map(({ value }) => (
              <li key={value.id}>
                <Articulo article={value} />
              </li>
            ))}
        </UL>
      )}
      <button type="button" onClick={handleClick}>
        Cargar mas
      </button>
    </>
  );
}
