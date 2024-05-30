import { ContenedorSkeleton } from './ContenedorSkeleton';

export function SkeletonListaComentarios() {
  const renderSkeletonKids = (cantidad: number) => {
    return Array.from({ length: cantidad }, (_, index) => (
      <li
        className="skeleton-kid"
        key={`
        skeleton-kid-${index}
      `}
      >
        <div className="skeleton-kid-wrapper">
          <span>▶︎</span>
          <ContenedorSkeleton />
        </div>
      </li>
    ));
  };

  return (
    <section className="skeleton-comments">
      <ul className="skeleton-kids">
        ▶︎
        <ul className="skeleton-kids">
          {renderSkeletonKids(3)}
          <ul className="skeleton-kids">
            ▶︎
            {renderSkeletonKids(5)}
          </ul>
        </ul>
      </ul>
    </section>
  );
}
