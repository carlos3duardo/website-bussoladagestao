'use client';
import { ReactNode } from 'react';

import { SiteProvider } from '@/providers/SiteProvider';

interface ProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: ProvidersProps) {
  return <SiteProvider>{children}</SiteProvider>;
}
