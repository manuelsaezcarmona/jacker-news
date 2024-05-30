import type { Comment } from '../types';
import { formatTimestamp } from '../utils';

interface ComentarioProps {
  comentario: Comment;
}

export function Comentario({ comentario }: ComentarioProps) {
  // const subcomentarios = kids?.slice(0, 10) ?? [];

  const isParent: boolean = !!comentario.descendants;
  const isChildren: boolean = !!comentario.parent;
  const isDeleted: boolean = comentario.deleted === true;
  const isLast: boolean = !comentario.kids;

  return (
    <details className={`comment-details ${isParent && 'parent'}  ${isLast && 'last'}`} open={isParent}>
      <summary className="comment-summary">
        <span className="comment-author">{comentario.by}</span>
        <span className="comment-date"> - {comentario.time && formatTimestamp(comentario.time)}</span>
      </summary>

      {isChildren && <p className="comment-text">{comentario?.text} </p>}
      {isDeleted && <p className="comment-deleted">{comentario.deleted}</p>}

      {comentario.children && (
        <ul>
          {comentario.children
            .filter((child) => !child?.deleted)
            .map((child) => (
              <Comentario key={child.id} comentario={child} />
            ))}
        </ul>
      )}
    </details>
  );
}
