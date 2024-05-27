/* eslint-disable import/no-cycle */
import { createFileRoute } from '@tanstack/react-router';
import { ArticuloDetailPage } from '../../pages/ArticuloDetailPage';

export const Route = createFileRoute('/articulo/$articuloID')({
  component: () => <ArticuloDetailPage />,
});
