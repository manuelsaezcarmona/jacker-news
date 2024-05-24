import styled from 'styled-components';
import { formatTimestamp } from '../utils';

export const ALTURA_MINIMA_ARTICULO = '200px';

const kids = [
  9224, 8917, 8884, 8887, 8952, 8869, 8873, 8958, 8940, 8908, 9005, 9671, 9067, 9055, 8865, 8881, 8872, 8955, 10403,
  8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8870, 8878, 8980, 8934, 8943, 8876,
];

export const ContenedorArticulo = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0 5px 20px 10px rgba(0, 0, 0, 0.15);
  padding: 0.4em;
  min-height: ${ALTURA_MINIMA_ARTICULO};
`;

export function Articulo() {
  return (
    <ContenedorArticulo className="">
      <header className="Header">
        <h2 className="">Smallest wildcat of the Atlantic Forest faces enormous threats</h2>
        <div className="author">
          <p className="by">PaulHoule</p>
          <p className="time">{formatTimestamp(1175714200)}</p>
        </div>
      </header>
      <div className="puntuaciones">
        <p>score:</p>
        <p>1</p>
      </div>
      <div className="comentarios">
        <p>Comentarios:</p>
        <p>{kids.length}</p>
      </div>

      <footer className="Footer">
        <a
          href="https://news.mongabay.com/2024/02/smallest-wildcat-of-the-atlantic-forest-faces-enormous-threats/"
          target="_blank"
          rel="noreferrer"
        >
          https://news.mongabay.com/2024/02/smallest-wildcat-of-the-atlantic-forest-faces-enormous-threats/
        </a>
      </footer>
    </ContenedorArticulo>
  );
}
