import type { TypeOfTop } from '../services/api';

interface ListArticulosProp {
  typoDeTop: TypeOfTop;
}

export function ListArticulos({ typoDeTop }: ListArticulosProp) {
  return (
    <>
      <h1>Lista de Articulos</h1>
      <p>tipo de top: {typoDeTop}</p>
    </>
  );
}
