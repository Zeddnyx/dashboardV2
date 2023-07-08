import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Master({ children }) {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
