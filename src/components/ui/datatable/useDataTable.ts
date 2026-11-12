'use client';

import {
  type ColumnDef,
  getCoreRowModel,
  type OnChangeFn,
  type PaginationState,
  type SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { useQueryParams } from '@/hooks';

import { useDataTableContextValue } from './DataTableContext';

interface ApiListResponse<TData> {
  offset: number;
  limit: number;
  total: number;
  pages: number;
  order: string | null;
  search: string | null;
  data: TData[];
}

interface UseDataTableOptions<TData> {
  apiUrl: string;
  columns: ColumnDef<TData>[];
  initialSorting?: SortingState;
  initialPageSize?: number;
  searchDebounceMs?: number;
  filters?: Record<
    string,
    string | number | (string | number)[] | null | undefined
  >;
}

export function useDataTable<TData>({
  apiUrl,
  columns,
  initialSorting = [],
  initialPageSize = 10,
  searchDebounceMs = 400,
  filters,
}: UseDataTableOptions<TData>) {
  const { searchParams, setParams } = useQueryParams();

  // paginação
  const offset = Number(searchParams.get('offset') ?? '0');
  const limit = Number(searchParams.get('limit') ?? initialPageSize);
  const pagination = useMemo<PaginationState>(
    () => ({ pageIndex: Math.floor(offset / limit), pageSize: limit }),
    [offset, limit],
  );

  // ordenação
  const orderby = searchParams.get('orderby');
  const sorting = useMemo<SortingState>(() => {
    if (!orderby) return initialSorting;
    const [id, dir] = orderby.split('.');
    return [{ id, desc: dir === 'desc' }];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderby]);

  const onPaginationChange: OnChangeFn<PaginationState> = (updater) => {
    const next = typeof updater === 'function' ? updater(pagination) : updater;
    setParams({
      offset: next.pageIndex * next.pageSize,
      limit: next.pageSize,
    });
  };

  const onSortingChange: OnChangeFn<SortingState> = (updater) => {
    const next = typeof updater === 'function' ? updater(sorting) : updater;
    const first = next[0];
    setParams({
      orderby: first ? `${first.id}.${first.desc ? 'desc' : 'asc'}` : null,
      offset: 0, // reseta pro início ao reordenar
    });
  };

  const [rows, setRows] = useState<TData[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchInput, setSearchInput] = useState(
    searchParams.get('search') ?? '',
  );
  const [debouncedSearch] = useDebounce(searchInput, searchDebounceMs);

  const filtersKey = filters ? JSON.stringify(filters) : '';

  const view = (searchParams.get('view') as 'table' | 'grid') ?? 'table';

  function onViewChange(next: 'table' | 'grid') {
    setParams({ view: next === 'table' ? null : next });
  }

  useEffect(() => {
    // Só mexe na URL se a busca realmente mudou. Sem isso, a montagem do
    // componente dispara um router.replace (e um novo render do servidor)
    // à toa.
    const current = searchParams.get('search') ?? '';
    if (debouncedSearch === current) return;
    setParams({ search: debouncedSearch || null, offset: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  // Guarda a requisição em andamento pra poder cancelá-la quando uma nova
  // começar (troca de página, busca, refetch manual etc.).
  const abortRef = useRef<AbortController | null>(null);

  const load = useCallback(async () => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsLoading(true);
    setError(null);

    const params = new URLSearchParams({
      offset: String(pagination.pageIndex * pagination.pageSize),
      limit: String(pagination.pageSize),
    });

    if (sorting[0]) {
      params.set(
        'orderby',
        `${sorting[0].id}.${sorting[0].desc ? 'desc' : 'asc'}`,
      );
    }

    if (debouncedSearch) {
      params.set('search', debouncedSearch);
    }

    if (filters) {
      for (const [key, val] of Object.entries(filters)) {
        if (val === null || val === undefined || val === '') continue;
        if (Array.isArray(val)) {
          if (val.length === 0) continue;
          params.set(key, val.join(','));
        } else {
          params.set(key, String(val));
        }
      }
    }

    try {
      const res = await fetch(`${apiUrl}?${params.toString()}`, {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error(`Erro ao buscar dados (HTTP ${res.status})`);

      const json = (await res.json()) as ApiListResponse<TData>;
      if (!Array.isArray(json?.data)) {
        throw new Error('Resposta da API em formato inesperado.');
      }

      setRows(json.data);
      setPageCount(json.pages ?? 0);
      setTotal(json.total ?? 0);
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
      setError((err as Error).message);
    } finally {
      // Só desliga o loading se esta ainda for a requisição atual.
      if (abortRef.current === controller) setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    apiUrl,
    pagination.pageIndex,
    pagination.pageSize,
    sorting,
    debouncedSearch,
    filtersKey,
  ]);

  useEffect(() => {
    load();
    return () => abortRef.current?.abort();
  }, [load]);

  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    manualSorting: true,
    pageCount,
    state: { pagination, sorting },
    onPaginationChange,
    onSortingChange,
  });

  const value = useDataTableContextValue(table, {
    searchValue: searchInput,
    onSearchChange: setSearchInput,
    view,
    onViewChange: onViewChange,
    isLoading,
    total,
  });

  /** Recarrega a página atual da API (ex: depois de excluir um registro). */
  return { value, error, refetch: load };
}
