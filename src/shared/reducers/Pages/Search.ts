import produce from 'immer';
import {
  PAGES_SEARCH_REQUEST,
  PAGES_SEARCH_REQUEST_CLEAR, PAGES_SEARCH_TERM_CLEAR,
  PAGES_SUGGESTION_REQUEST,
} from 'src/shared/constants/ActionTypes/Pages/Search';
import { IReduxState } from 'src/typings/app';
import {
  IAvailableLabelsCollection,
  ILocalizedNamesMap,
  IProductsLabeledCollection,
  ISearchPageData,
  TLocalizedName,
  TSpellingSuggestion,
} from 'src/shared/interfaces/searchPageData';

export interface SearchState extends IReduxState {
  data: ISearchPageData;
}

export const initialState: SearchState = {
  data: {
    flyoutSearch: {
      suggestions: [],
      categories: [],
      completion: [],
      pending: false,
    },
    searchTerm: '',
    items: [],
    filters: [],
    rangeFilters: [],
    sortParams: [],
    sortParamLocalizedNames: null,
    categoriesLocalizedName: null,
    currentSort: '',
    currentCategory: '',
    pagination: {
      numFound: 0,
      currentPage: 0,
      maxPage: 0,
      currentItemsPerPage: 12,
      validItemsPerPageOptions: [12],
    },
    category: [],
    spellingSuggestion: null,
    productsLabeled: null,
    availableLabels: null,
  },
};

export const pageSearch = produce<SearchState>(
  (draft: SearchState, action: any) => {
    switch (action.type) {
      case `${PAGES_SEARCH_REQUEST}_PENDING`:
        draft.error = false;
        draft.pending = true;
        draft.fulfilled = false;
        draft.rejected = false;
        draft.initiated = true;
        draft.data.searchTerm = action.searchTerm;
        break;
      case `${PAGES_SUGGESTION_REQUEST}_PENDING`:
        draft.data.flyoutSearch.pending = true;
        break;
      case `${PAGES_SUGGESTION_REQUEST}_FULFILLED`:
        draft.data.flyoutSearch.suggestions = action.products;
        draft.data.flyoutSearch.categories = action.categories;
        draft.data.flyoutSearch.completion = action.completion;
        draft.data.flyoutSearch.pending = false;
        break;
      case `${PAGES_SEARCH_REQUEST}_REJECTED`:
        draft.error = action.error;
        draft.pending = false;
        draft.fulfilled = false;
        draft.rejected = true;
        break;
      case `${PAGES_SUGGESTION_REQUEST}_REJECTED`:
        draft.data.flyoutSearch.pending = false;
        draft.error = action.error;
        break;
      case `${PAGES_SEARCH_REQUEST}_FULFILLED`:
        draft.data.items = action.items;
        draft.data.filters = action.filters;
        draft.data.category = action.category;
        draft.data.rangeFilters = action.rangeFilters;
        draft.data.sortParams = action.sortParams;
        draft.data.sortParamLocalizedNames = action.sortParamLocalizedNames;
        draft.data.categoriesLocalizedName = action.categoriesLocalizedName;
        draft.data.currentSort = action.currentSort;
        draft.data.pagination = action.pagination;
        draft.data.currentCategory = action.currentCategory;
        draft.data.spellingSuggestion = action.spellingSuggestion || null;
        draft.data.productsLabeled = action.productsLabeled || null;
        draft.data.availableLabels = action.availableLabels || null;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case PAGES_SEARCH_REQUEST_CLEAR:
        // draft.data.searchTerm = action.searchTerm;
        draft.data.flyoutSearch.suggestions = [];
        draft.data.flyoutSearch.categories = [];
        draft.data.flyoutSearch.completion = [];
        draft.data.spellingSuggestion = null;
        draft.error = false;
        draft.pending = false;
        draft.fulfilled = true;
        draft.rejected = false;
        draft.initiated = true;
        break;
      case PAGES_SEARCH_TERM_CLEAR:
        draft.data.searchTerm = '';
        break;
      default:
        break;
    }
  },
  initialState,
);

// selectors
export function isPageSearchStateLoading(state: any, props: any): boolean {
  return (state.pageSearch && state.pageSearch.pending && state.pageSearch.pending === true);
}

export function getSearchTerm(state: any, props: any): string | null {
  return (
    state.pageSearch.data && state.pageSearch.data.searchTerm
      ? state.pageSearch.data.searchTerm
      : null
  );
}

export function getSuggestions(state: any, props: any): string | null {
  return (
    state.pageSearch.data && state.pageSearch.data.suggestions
      ? state.pageSearch.data.suggestions
      : null
  );
}

export function getSpellingSuggestion(state: any, props: any): TSpellingSuggestion | null {
  return (
    state.pageSearch.data && state.pageSearch.data.spellingSuggestion
      ? state.pageSearch.data.spellingSuggestion
      : null
  );
}

export function getProductsLabeled(state: any, props: any): IProductsLabeledCollection | null {
  return (
    state.pageSearch.data && state.pageSearch.data.productsLabeled
      ? state.pageSearch.data.productsLabeled
      : null
  );
}

export function getAvailableLabels(state: any, props: any): IAvailableLabelsCollection | null {
  return (
    state.pageSearch.data && state.pageSearch.data.availableLabels
      ? state.pageSearch.data.availableLabels
      : null
  );
}

export function getSortParamLocalizedNames(state: any, props: any): ILocalizedNamesMap | null {
  return (
    state.pageSearch.data && state.pageSearch.data.sortParamLocalizedNames
      ? state.pageSearch.data.sortParamLocalizedNames
      : null
  );
}

export function getCategoriesLocalizedName(state: any, props: any): TLocalizedName | null {
  return (
    state.pageSearch.data && state.pageSearch.data.categoriesLocalizedName
      ? state.pageSearch.data.categoriesLocalizedName
      : null
  );
}
