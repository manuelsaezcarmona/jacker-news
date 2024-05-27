/* eslint-disable import/no-cycle */
import { Route as ArticuloIDRoute } from '../routes/articulo/$articuloID';

export function ArticuloDetailPage() {
  const params = ArticuloIDRoute.useParams();

  return (
    <div>
      <h1>PAgina de detalle del articulo</h1>
      <p> articulo numero :{params.articuloID}</p>
    </div>
  );
}
