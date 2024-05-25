import styled, { keyframes } from 'styled-components';
import { ContenedorArticulo } from '../Articulo';

const Resplandor = keyframes`
    to {
        background-position: right -40px 0;
    }
`;

/* NOTA: En styles Components con TS para evitar errores de atributos desconocidos 
por react debemos nombrar las propiedades con el prefijo $ y usarlas de manera parecida
a PHP */

interface ContenedorSkeletonProps {
  $minHeight?: number;
  $Width?: number;
}

const ContenedorSkeleton = styled.div<ContenedorSkeletonProps>`
  background-color: #e2e5e7;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
  background-size: 100px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  -webkit-animation: ${Resplandor} 1s ease infinite;
  animation: shine 1s ease infinite;
  min-height: ${(props) => props.$minHeight ?? 16}px;
  min-width: 50px;
  width: ${(props) => props.$Width ?? 100}%;
`;

export function SkeletonArticulo() {
  return (
    <ContenedorArticulo>
      <header className="Header">
        <ContenedorSkeleton $minHeight={36} />

        <div className="author">
          <ContenedorSkeleton $minHeight={24} $Width={40} />
        </div>
      </header>
      <div className="puntuaciones">
        <ContenedorSkeleton $minHeight={24} $Width={40} />
      </div>
      <div className="comentarios">
        <ContenedorSkeleton $minHeight={24} $Width={40} />
      </div>

      <footer className="Footer">
        <ContenedorSkeleton $minHeight={24} />
      </footer>
    </ContenedorArticulo>
  );
}
