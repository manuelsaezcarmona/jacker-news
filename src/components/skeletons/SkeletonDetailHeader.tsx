import { ContenedorSkeleton } from './ContenedorSkeleton';

export function SkeletonDetailHeader() {
  return (
    <header className="detail-header skeleton-header">
      <ContenedorSkeleton $minHeight={32} />

      <div className="detail-info skeleton-info">
        <ContenedorSkeleton $Width={20} $minHeight={10} />
        <div className="skeleton-link">
          <ContenedorSkeleton $minHeight={10} $Width={70} />
          <ContenedorSkeleton $minHeight={10} />
        </div>
      </div>
    </header>
  );
}
