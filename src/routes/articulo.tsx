import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/articulo')({
  component: () => <div>Hello /articulo!</div>,
});
