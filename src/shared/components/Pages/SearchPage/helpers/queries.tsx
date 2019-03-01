import {ISearchQuery} from "src/shared/interfaces/searchPageData/index";
import {TActiveRangeFilters} from "src/shared/components/Pages/SearchPage/types";


export const addToQueryActiveRangeFilters = (activeRangeFilters: TActiveRangeFilters): ISearchQuery => {
  const query: {[key: string]: number | string} = {};

  Object.keys(activeRangeFilters).forEach((key: string) => {
    query[`${key.includes('price') ? 'price' : key}[min]`] = activeRangeFilters[key].min;
    query[`${key.includes('price') ? 'price' : key}[max]`] = activeRangeFilters[key].max;
  });

  return query;
};
