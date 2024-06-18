import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Nuestro Client Provider de TanStack

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      // ✅ turns retries off
      retry: false,
    },
  },
});

export function QueryWrapper({ children }: { children: React.ReactNode }) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
