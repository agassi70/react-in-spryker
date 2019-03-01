import { IProductCard } from '../product';
import { TAppCurrency } from '../../reducers/Common/Init';
import { IPagination } from 'src/shared/components/Common/AppPagination/types';
import {TCategoryId} from "src/shared/components/Pages/SearchPage/types";

export type TSpellingSuggestion = string;
export type TLocalizedName = string;

export interface FilterValue {
  value: any;
  doc_count: number;
}

export interface ValueFacets {
  name?: string;
  docCount?: any;
  values?: Array<FilterValue>;
  activeValue?: Array<string> | null;
  localizedName: TLocalizedName;
}

export interface RangeFacets {
  name?: string;
  min?: number;
  max?: number;
  activeMin?: number;
  activeMax?: number;
  docCount?: any;
  localizedName: TLocalizedName;
}

export interface FlyoutSearch {
  suggestions?: Array<IProductCard>;
  categories?: Array<{[name: string]: string}>;
  completion?: string[];
  pending?: boolean;
}

export type TLabelId = string;

export interface IProductLabelResponse {
  type: string;
  id: number;
}

export interface IAvailableLabel {
  id: string;
  frontEndReference: string;
  isExclusive: boolean;
  name: string;
  position: number;
}

export interface IProductsLabeledCollection {
  [id: string]: Array<TLabelId>;
}

export interface IAvailableLabelsCollection {
  [id: string]: IAvailableLabel;
}

export interface ILocalizedNamesMap {
  [key: string]: TLocalizedName;
}

export interface ICatalogSearchDataParsed {
  items?: Array<IProductCard>;
  filters?: Array<ValueFacets>;
  category: Array<FilterValue>;
  currentCategory: string;
  currentSort?: string;
  rangeFilters?: Array<RangeFacets>;
  sortParams?: Array<string>;
  sortParamLocalizedNames: ILocalizedNamesMap | null;
  categoriesLocalizedName: TLocalizedName | null;
  pagination: IPagination;
  spellingSuggestion: TSpellingSuggestion | null;
  productsLabeled: IProductsLabeledCollection | null;
  availableLabels: IAvailableLabelsCollection | null;
}

export interface ISearchPageData extends ICatalogSearchDataParsed {
  dispatch?: Function;
  flyoutSearch?: FlyoutSearch;
  searchTerm?: string;
  currency?: TAppCurrency;
}

export interface ISearchQuery {
  q?: string;
  currency?: TAppCurrency;
  sort?: string;
  category?: TCategoryId;
  ipp?: number;
  label?: string;
  page?: string | number;
  [key: string]: string | number | string[];
}
