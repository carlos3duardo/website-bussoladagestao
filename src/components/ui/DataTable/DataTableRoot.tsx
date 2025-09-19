'use client';

import { Card } from '../Card';
import { DataTableProvider } from './DataTableProvider';

interface ComponentProps {
  children: React.ReactNode;
  defaultPageSize?: number;
}

export function DataTableRoot({
  children,
  defaultPageSize = 10,
}: ComponentProps) {
  return (
    <DataTableProvider defaultPageSize={defaultPageSize}>
      <Card.Root>{children}</Card.Root>
    </DataTableProvider>
  );
}
