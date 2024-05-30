/* eslint-disable import/no-cycle */
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Route as ArticuloIDRoute } from '../routes/articulo/$articuloID';
import { getInfoItem } from '../services/api';
import { ListaComentarios } from '../components/ListaComentarios';
import { formatTimestamp } from '../utils';
import { SkeletonDetailHeader } from '../components/skeletons/SkeletonDetailHeader';

export function ArticuloDetailPage() {
  const { articuloID } = ArticuloIDRoute.useParams();
  const ID: number = parseInt(articuloID, 10);

  const { data, status } = useQuery({
    queryKey: [`article`],
    queryFn: () => getInfoItem(ID),
  });

  useEffect(() => {
    document.title = `📰 ${data?.title}`;
  }, [data?.title]);

  if (status === 'error') {
    return <p>Ha ocurrido un error</p>;
  }
  if (status === 'pending') {
    return <SkeletonDetailHeader />;
  }

  return (
    <main className="detail-page">
      <header className="detail-header">
        <h2 className="detail-title">{data.title}</h2>
        <div className="detail-info">
          <p className="detail-score">{data?.score || 0} points</p>
          <a className="detail-link" href={data?.url || '#'}>
            <p className="detail-author">Por: ${data?.by || 'Anonimo'}</p>
            <p className="detail-time">el dia {data.time && formatTimestamp(data.time)} </p>
          </a>
        </div>
      </header>
      <ListaComentarios articuloID={ID} />
    </main>
  );
}
