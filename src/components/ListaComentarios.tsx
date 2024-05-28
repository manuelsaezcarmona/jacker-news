import { Comentario } from './Comentario';

interface ListaComentariosProps {
  comentariosIDs: number[];
}

export function ListaComentarios({ comentariosIDs }: ListaComentariosProps) {
  console.log('los comentarios en la lista de comentarios', comentariosIDs);
  return (
    <ul style={{ listStyle: 'none' }}>
      {comentariosIDs.map((comentarioID) => (
        <li key={comentarioID}>
          <Comentario comentarioID={comentarioID} key={comentarioID} />
        </li>
      ))}
    </ul>
  );
}
