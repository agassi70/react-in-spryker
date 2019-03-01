import { ICategory, TAppCurrency } from 'src/shared/reducers/Common/Init';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import {ISearchPageData, ISearchQuery} from 'src/shared/interfaces/searchPageData';
import { Location } from 'history';
import { RouteProps } from 'react-router';
import {WithRouter} from "src/shared/interfaces/common/react";

export interface ISearchPageProps extends WithStyles<typeof styles>, ISearchPageData, RouteProps, WithRouter {
  isLoading: boolean;
  changeLocation: Function;
  categoriesTree: ICategory[];
  location: Location;
  isFulfilled: boolean;
  locationCategoryId: TCategoryId;
  sendSearch: (params: ISearchQuery) => void ;
}

export interface ISearchPageState {
  activeFilters: TActiveFilters;
  activeRangeFilters: TActiveRangeFilters;
  sort: string;
  itemsPerPage: number;
  isFiltersReset: boolean;
  isNeedNewRequest: boolean;
  isReadyToNewRequest: boolean;
  selectedCategory?: string | null;
  paginationPage: number | string | null;
}

export type RangeType = {min: number, max: number};
export type TCategoryId = number | string;
export type TActiveFilters = {[name: string]: string[]};
export type TActiveRangeFilters = {[name: string]: RangeType};
export type TFilterItemName = string;
export type TFilterItemValue = number | string | RangeType;
export type TFilterItemTypeFilter = 'filter';
export type TFilterItemTypeRange = 'range';
export const filterTypeFilter: TFilterItemTypeFilter = 'filter';
export const filterTypeRange: TFilterItemTypeRange = 'range';
export type TFilterItemType = TFilterItemTypeFilter | TFilterItemTypeRange;

export type TRangeMinType = 'min';
export type TRangeMaxType = 'max';
export const rangeMinType: TRangeMinType = 'min';
export const rangeMaxType: TRangeMaxType = 'max';
export type TRangeType = TRangeMinType | TRangeMaxType;

export interface IFilterItem extends IFilterItemToDelete {
  label: string | JSX.Element;
  order?: number;
}

export interface IFilterItemToDelete {
  name: TFilterItemName;
  value: TFilterItemValue;
  type: TFilterItemType;
  rangeSubType?: TRangeType;
}
