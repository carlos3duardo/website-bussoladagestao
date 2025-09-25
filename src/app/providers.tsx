'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

import { SiteProvider } from '@/providers/SiteProvider';

const queryClient = new QueryClient();

interface ProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SiteProvider>{children}</SiteProvider>
    </QueryClientProvider>
  );
}
