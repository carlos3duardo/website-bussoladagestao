import { DataTableContent } from './DataTableContent';
import { ColumnProps } from './DataTableContent';
import { DataTableFooter } from './DataTableFooter';
import { DataTableFooterSection } from './DataTableFooterSection';
import { DataTableHeader } from './DataTableHeader';
import { DataTableHeaderSection } from './DataTableHeaderSection';
import { DataTableInputSearch } from './DataTableInputSearch';
import { DataTablePagesCount } from './DataTablePagesCount';
import { DataTablePagination } from './DataTablePagination';
import { DataTableRoot } from './DataTableRoot';
import { DataTableTitle } from './DataTableTitle';

export const DataTable = {
  Root: DataTableRoot,
  Header: DataTableHeader,
  HeaderSection: DataTableHeaderSection,
  Title: DataTableTitle,
  Content: DataTableContent,
  Footer: DataTableFooter,
  FooterSection: DataTableFooterSection,
  PagesCount: DataTablePagesCount,
  Pagination: DataTablePagination,
  InputSearch: DataTableInputSearch,
};

export type { ColumnProps as DataTableColumnProps };
