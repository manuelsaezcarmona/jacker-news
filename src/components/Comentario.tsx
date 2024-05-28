import { useQuery } from '@tanstack/react-query';
import { getInfoItem } from '../services/api';

import { ListaComentarios } from './ListaComentarios';

interface ComentarioProps {
  comentarioID: number;
}

export function Comentario({ comentarioID }: ComentarioProps) {
  const { data, error, status } = useQuery({
    queryKey: ['comentario'],
    queryFn: () => getInfoItem(comentarioID),
  });

  if (status === 'pending') return <p>cargando</p>;

  const { kids, by, text, time } = data ?? {};

  const subcomentarios = kids?.slice(0, 10) ?? [];

  console.log(`subComentarios de ${comentarioID}`, subcomentarios);

  return (
    <>
      <details open>
        <summary>Comentarios</summary>
        <li>Componente Comentarios{text}</li>
      </details>
      {/* {subcomentarios.length > 0 && <ListaComentarios comentariosIDs={subcomentarios} />} */}
    </>
  );
}
