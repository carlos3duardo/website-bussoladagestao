import { DataTableContent } from './DataTableContent';
import { DataTableRoot } from './DataTableContext';
import { DataTablePageSizeSelect } from './DataTablePageSizeSelect';
import { DataTablePagination } from './DataTablePagination';
import { DataTableRecordCount } from './DataTableRecordCount';
import { DataTableSearch } from './DataTableSearch';
import { DataTableViewToggle } from './DataTableViewToggle';
import { ClearFiltersButton } from './filters/ClearFiltersButton';
import { FilterDropdown } from './filters/FilterDropdown';

export { useDataTableContextValue } from './DataTableContext';
export { useDataTable } from './useDataTable';

export const DataTable = {
  Root: DataTableRoot,
  Content: DataTableContent,
  Pagination: DataTablePagination,
  Search: DataTableSearch,
  ViewToggle: DataTableViewToggle,
  PageSizeSelect: DataTablePageSizeSelect,
  RecordCount: DataTableRecordCount,
  Filter: FilterDropdown,
  ClearFilters: ClearFiltersButton,
};
