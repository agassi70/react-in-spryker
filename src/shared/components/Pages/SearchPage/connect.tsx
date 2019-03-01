import * as React from 'react';
import { RouteProps } from 'react-router';
import { push } from 'react-router-redux';
import { reduxify } from 'src/shared/lib/redux-helper';
import {
  getAvailableLabels,
  getCategoriesLocalizedName,
  getProductsLabeled,
  getSortParamLocalizedNames,
  getSpellingSuggestion,
  SearchState,
} from 'src/shared/reducers/Pages/Search';
import { getAppCurrency, getCategoriesTree, ICategory, TAppCurrency } from 'src/shared/reducers/Common/Init';
import {ISearchQuery, TSpellingSuggestion} from 'src/shared/interfaces/searchPageData';
import {getRouterMatchParam} from "src/shared/selectors/Common/router";
import {sendSearchAction} from "src/shared/actions/Pages/Search";

const mapStateToProps = (state: any, ownProps: any) => {
  const routerProps: RouteProps = state.routing ? state.routing : {};
  const pageSearchProps: SearchState = state.pageSearch ? state.pageSearch : null;
  const currency: TAppCurrency = getAppCurrency(state, ownProps);
  const categoriesTree: ICategory[] = getCategoriesTree(state, ownProps);
  const spellingSuggestion: TSpellingSuggestion = getSpellingSuggestion(state, ownProps);
  const productsLabeled = getProductsLabeled(state, ownProps);
  const availableLabels = getAvailableLabels(state, ownProps);
  const sortParamLocalizedNames = getSortParamLocalizedNames(state, ownProps);
  const categoriesLocalizedName = getCategoriesLocalizedName(state, ownProps);
  const locationCategoryId = getRouterMatchParam(state, ownProps, 'categoryId');

  return ({
    location: routerProps.location ? routerProps.location : ownProps.location,
    items: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.items : ownProps.items,
    searchTerm: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.searchTerm : ownProps.searchTerm,
    filters: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.filters : ownProps.filters,
    rangeFilters: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.rangeFilters : ownProps.rangeFilters,
    sortParams: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.sortParams : ownProps.sortParams,
    currentSort: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.currentSort : ownProps.currentSort,
    pagination: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.pagination : ownProps.pagination,
    category: pageSearchProps && pageSearchProps.data ? pageSearchProps.data.category : ownProps.category,
    currentCategory: pageSearchProps && pageSearchProps.data
      ? pageSearchProps.data.currentCategory
      : ownProps.currentCategory,
    isLoading: pageSearchProps && pageSearchProps.pending ? pageSearchProps.pending : ownProps.pending,
    isFulfilled: pageSearchProps && pageSearchProps.fulfilled ? pageSearchProps.fulfilled : ownProps.fulfilled,
    currency,
    categoriesTree,
    spellingSuggestion,
    productsLabeled,
    availableLabels,
    sortParamLocalizedNames,
    categoriesLocalizedName,
    locationCategoryId,
  });
};

export const connect = reduxify(
  mapStateToProps,
  (dispatch: Function) => ({
    dispatch,
    changeLocation: (location: string) => dispatch(push(location)),
    sendSearch: (params: ISearchQuery) => dispatch(sendSearchAction(params)),
  }),
);
