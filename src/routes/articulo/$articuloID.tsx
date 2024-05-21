import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/articulo/$articuloID')({
  component: () => <div>Hello /articulo/$articuloID! ira con comentarios</div>,
});
