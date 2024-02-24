import Root from './data-table.svelte';
import Body from './data-table-body.svelte';
import Toolbar from './data-table-toolbar.svelte';
import FacetedFilterBuilder from './data-table-faceted-filter-builder.svelte';
import FacetedFilterContainer from './data-table-faceted-filter-container.svelte';
import FacetedFilter from './data-table-faceted-filter.svelte';
import PageSize from './data-table-page-size.svelte';
import Pagination from './data-table-pagination.svelte';

export {
    Root,
    Body,
    Toolbar,
    FacetedFilterBuilder,
    FacetedFilterContainer,
    FacetedFilter,
    PageSize,
    Pagination,
    //
    Root as DataTable,
    Body as DataTableBody,
    Toolbar as DataTableToolbar,
    FacetedFilterBuilder as DataTableFacetedFilterBuilder,
    FacetedFilterContainer as DataTableFacetedFilterContainer,
    FacetedFilter as DataTableFacetedFilter,
    PageSize as DataTablePageSize,
    Pagination as DataTablePagination
};
