import {
  FilterValue,
  ILocalizedNamesMap,
  ISearchPageData,
  RangeFacets,
  ValueFacets
} from 'src/shared/interfaces/searchPageData';
import { rangeFilterValueToFront } from 'src/shared/helpers/common/transform';
import { rangeMaxType, rangeMinType, TActiveRangeFilters } from 'src/shared/components/Pages/SearchPage/types';
import {IActiveFilterCategories} from "src/shared/components/Pages/SearchPage/CategoriesList/types";
import {labeledCategories} from "src/shared/routes/categoriesRoutes";
import {ICategory} from "src/shared/reducers/Common/Init";

export const isValidRangeInput = (activeRanges: TActiveRangeFilters,
                                  defaultRanges: ISearchPageData['rangeFilters']): boolean => {
  const activeData: {[key: string]: any} = {...activeRanges};
  const defaultData = [...defaultRanges];
  let canMakeNewRequest: boolean = true;

  defaultData.forEach((filter: RangeFacets) => {
    if (activeData[filter.name]) {
      const defaultMin = rangeFilterValueToFront(filter.min, rangeMinType);
      const defaultMax = rangeFilterValueToFront(filter.max, rangeMaxType);

      for (let prop in activeData[filter.name]) {
        if (activeData[filter.name][prop] < defaultMin
          || activeData[filter.name][prop] > defaultMax
        ) {
          canMakeNewRequest = false;
        }
      }
    }
  });
  return canMakeNewRequest;
};

export const getFormattedActiveCategories = (data: Array<FilterValue>): IActiveFilterCategories | null => {
  if (!Array.isArray(data) || !data.length) {
    return null;
  }
  const response: IActiveFilterCategories = {};
  data.forEach((item: FilterValue) => {
    response[item.value] = item.doc_count;
  });
  return response;
};

export const getRangeFiltersLocalizedNames = (data: Array<RangeFacets> | null): ILocalizedNamesMap | null => {
  if (!Array.isArray(data) || !data.length) {
    return null;
  }
  const response: ILocalizedNamesMap = {};
  data.forEach((item: RangeFacets) => {
    response[item.name] = item.localizedName;
  });
  return response;
};

export const getFiltersLocalizedNames = (data: Array<ValueFacets> | null): ILocalizedNamesMap | null => {
  if (!Array.isArray(data) || !data.length) {
    return null;
  }
  const response: ILocalizedNamesMap = {};
  data.forEach((item: ValueFacets) => {
    response[item.name] = item.localizedName;
  });
  return response;
};

export const getLabeledCategory = (category: string | number): string | null => {
  if (!category) {
    return null;
  }
  const labelValue = labeledCategories[category];
  if (!labelValue) {
    return null;
  }
  return labelValue;
};
