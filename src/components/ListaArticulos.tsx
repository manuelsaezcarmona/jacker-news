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
`;

export function ListArticulos({ typoDeTop, pageSize }: ListArticulosProp) {
  const { isLoadingIDs, isLoadingPage, statusPage, statusIDs, itemsCurrentPage, dataPage } = useItems(
    typoDeTop,
    pageSize
  );

  // Cuando este cargando los IDS debe aparecer un spiner
  // Cuando este cargando los articulos debe aparece el esqueleto

  const SkeletonList = Array.from({ length: pageSize }, () => <SkeletonArticulo />);

  // Si quieres que apareza un loader mientras carga el estado asincrono hay que realizar
  // un estado local . (mejor en app) Habria que hacerlo de manera lazy. Que cargue primero
  // el chunk sincrono y luego otro asincrono.

  return isLoadingIDs && isLoadingPage ? (
    <UL>
      {SkeletonList.map((index) => (
        <li key={`skeArt-${index}`}>
          <SkeletonArticulo />
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
  );
}
