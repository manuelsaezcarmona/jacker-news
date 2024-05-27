import styled from 'styled-components';
import { formatTimestamp } from '../utils';
import type { Item } from '../types';

export const ALTURA_MINIMA_ARTICULO = '200px';

export const ContenedorArticulo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.15);
  padding: 0.4em;
  min-height: ${ALTURA_MINIMA_ARTICULO};
`;

interface ArticuloProps {
  article: Item;
}

export function Articulo({ article }: ArticuloProps) {
  const { time, title, score, url, by, kids } = article;

  return (
    <ContenedorArticulo className="">
      <header className="Header">
        <h2 className="">{title}</h2>
        <div className="author">
          <p className="by">{by}</p>
          <p className="time">{typeof time === 'number' ? formatTimestamp(time) : 'sin fecha'}</p>
        </div>
      </header>
      <div className="puntuaciones">
        <p>score:</p>
        <p>{score}</p>
      </div>
      <div className="comentarios">
        <p>Comentarios:</p>
        <p>{kids?.length || 0}</p>
      </div>

      <footer className="Footer">
        {url && (
          <a href={url} target="_blank" rel="noreferrer">
            {url}
          </a>
        )}
      </footer>
    </ContenedorArticulo>
  );
}
