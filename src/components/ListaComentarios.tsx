import { useQuery } from '@tanstack/react-query';
import { fetchComments } from '../services/api';
import { Comentario } from './Comentario';
import { SkeletonListaComentarios } from './skeletons/SkeleletonListaComentarios';

interface ListaComentariosProps {
  articuloID: number;
}

export function ListaComentarios({ articuloID }: ListaComentariosProps) {
  const {
    data: commentsList,
    status,
    error,
  } = useQuery({
    queryKey: ['allComments', articuloID], // Asegúrate de usar una clave única por artículo
    queryFn: () => fetchComments(articuloID),
  });

  if (status === 'pending') return <SkeletonListaComentarios />;
  if (status === 'error') return <p>Error al cargar los comentarios: {error?.message}</p>;

  return (
    <section className="comments-section">
      {status === 'success' && <Comentario key={commentsList.id} comentario={commentsList} />}
    </section>
  );
}
