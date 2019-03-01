import {
  PAGES_SEARCH_REQUEST,
  PAGES_SEARCH_REQUEST_CLEAR, PAGES_SEARCH_TERM_CLEAR,
  PAGES_SUGGESTION_REQUEST,
} from 'src/shared/constants/ActionTypes/Pages/Search';
import { CatalogService } from 'src/shared/services/Common/Catalog';
import { ISearchQuery } from 'src/shared/interfaces/searchPageData';


export const suggestPendingState = {
  type: PAGES_SUGGESTION_REQUEST + '_PENDING',
};

export const sendSuggestionAction = function(query: string) {
  return (dispatch: Function, getState: Function) => {
    dispatch(suggestPendingState);
    CatalogService.catalogSuggestion(PAGES_SUGGESTION_REQUEST, dispatch, query);
  };
};

export const sendSearchAction = function(params: ISearchQuery) {
  return (dispatch: Function, getState: Function) => {
    dispatch({
      type: PAGES_SEARCH_REQUEST + '_PENDING',
      searchTerm: params.q,
    });
    CatalogService.catalogSearch(PAGES_SEARCH_REQUEST, dispatch, params);
  };
};

export const clearSuggestions = function(searchTerm: string) {
  return {
    type: PAGES_SEARCH_REQUEST_CLEAR,
    searchTerm,
  };
};

export const clearSearchTermAction = function() {
  return {
    type: PAGES_SEARCH_TERM_CLEAR,
  };
};

