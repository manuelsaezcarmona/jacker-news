import { ContenedorArticulo } from '../Articulo';
import { ContenedorSkeleton } from './ContenedorSkeleton';

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
