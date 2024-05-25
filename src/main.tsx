import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// cremos una nueva instancia de Route
const router = createRouter({ routeTree });

// Registramos la instancia del router para tener disponibles los tipos
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </div>
);
