"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
import { Toaster } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      refetchOnReconnect: true,
    },
  },
});

function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" expand richColors gap={32} />
      <ChakraProvider>
        {children}
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default GlobalProvider;
