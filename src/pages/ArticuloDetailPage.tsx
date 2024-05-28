/* eslint-disable import/no-cycle */
import { useQuery } from '@tanstack/react-query';
import { Route as ArticuloIDRoute } from '../routes/articulo/$articuloID';
import { getInfoItem } from '../services/api';
import { ListaComentarios } from '../components/ListaComentarios';

export const COMMENTS_LIMIT = 10;

export function ArticuloDetailPage() {
  const { articuloID } = ArticuloIDRoute.useParams();

  // Como necesito hacer que la url se puede compartir , no puedo fiarme del state .
  // Tengo que llamar al endpoint y hacer otro hook para comenets con el id sacas el detalle
  //  podrim

  const { data, status, error } = useQuery({
    queryKey: [`article`],
    queryFn: () => getInfoItem(parseInt(articuloID, 10)),
  });
  const commentIds = data?.kids?.slice(0, COMMENTS_LIMIT) ?? [];
  console.log(status);
  return (
    <main>
      <h1>PAgina de detalle del articulo</h1>
      <p> articulo numero :{articuloID}</p>
      {status === 'success' ? <ListaComentarios comentariosIDs={commentIds} /> : <p>cargandos</p>}
    </main>
  );
}
