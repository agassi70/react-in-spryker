import {
  FilterValue,
  ICatalogSearchDataParsed,
  IProductLabelResponse,
  TLocalizedName,
  ValueFacets,
} from 'src/shared/interfaces/searchPageData';

interface IResponse {
  data: object;
  included: object;
}

export const parseCatalogSearchResponse = (response: IResponse): ICatalogSearchDataParsed => {
  if (!response) {
    return null;
  }
  const {data, included}: any = response;

  if (!data || !data[0]) {
    return null;
  }

  const attributes = data[0].attributes;
  const pagination = attributes.pagination;
  const filters: Array<ValueFacets> = [];
  let category: Array<FilterValue> = [];
  let currentCategory: string = '';
  let categoriesLocalizedName: TLocalizedName | null = null;

  attributes.valueFacets.forEach((filter: any) => {
    if (filter.name === 'category') {
      category = Array.isArray(filter.values) ? filter.values : [];
      currentCategory = filter.activeValue;
      categoriesLocalizedName = filter.localizedName;
    } else {
      filters.push(filter);
    }
  });

  let result: ICatalogSearchDataParsed = {
    items: attributes.abstractProducts,
    filters,
    category,
    currentCategory,
    currentSort: attributes.sort.currentSortParam,
    rangeFilters: attributes.rangeFacets,
    sortParams: attributes.sort.sortParamNames,
    sortParamLocalizedNames: attributes.sort.sortParamLocalizedNames,
    categoriesLocalizedName,
    pagination: {
      numFound: pagination.numFound,
      currentPage: pagination.currentPage,
      maxPage: pagination.maxPage,
      currentItemsPerPage: pagination.currentItemsPerPage,
      validItemsPerPageOptions: pagination.config.validItemsPerPageOptions,
    },
    spellingSuggestion: attributes.spellingSuggestion,
    productsLabeled: null,
    availableLabels: null,
  };

  if (!included) {
    return result;
  }

  included.forEach((row: any) => {

    if (row.type === 'abstract-products'
      && row.relationships
      && row.relationships['product-labels']
      && row.relationships['product-labels'].data) {

      if (!result.productsLabeled) {
        result.productsLabeled = {};
      }
      result.productsLabeled[row.id] = row.relationships['product-labels'].data.map((
        item: IProductLabelResponse
      ) => item.id);

    } else {
      if (row.type === 'product-labels') {
        if (!result.productsLabeled) {
          result.availableLabels = {};
        }

        result.availableLabels[row.id] = {
          id: row.id,
          frontEndReference: row.attributes.frontEndReference,
          isExclusive: row.attributes.isExclusive,
          name: row.attributes.name,
          position: row.attributes.position,
        };
      }
    }

  });

  return result;
};
