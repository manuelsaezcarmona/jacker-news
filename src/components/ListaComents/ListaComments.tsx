interface ListaComentsProps {
  articuloID: number | string;
}

export function ListaComments({ articuloID }: ListaComentsProps) {
  return (
    <ul>
      <li>Lista Comments con ID {articuloID}</li>
    </ul>
  );
}
