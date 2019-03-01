// tslint:disable:max-file-line-count

import * as React from 'react';
import { ChangeEvent, ReactNode } from 'react';
import { toast } from 'react-toastify';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import * as qs from 'query-string';
import { withRouter } from 'react-router';

import {RangeFacets, ISearchQuery} from 'src/shared/interfaces/searchPageData';
import {pathCategoryPageBase, pathProductPageBase} from 'src/shared/routes/contentRoutes';
import { AppPageTitle } from 'src/shared/components/Common/AppPageTitle';
import { TRangeInputName } from 'src/shared/components/UI/SprykerRangeFilter';
import { ActiveFiltersList } from 'src/shared/components/Pages/SearchPage/ActiveFiltersList';
import { validateRangeInputsError } from 'src/shared/constants/messages/errors';
import { AppBackdrop } from 'src/shared/components/Common/AppBackdrop';
import { SortPanel } from 'src/shared/components/Pages/SearchPage/SortPanel';
import { FoundItems } from 'src/shared/components/Pages/SearchPage/FoundItems';
import { SprykerSelect } from 'src/shared/components/UI/SprykerSelect';
import { ProductsList } from 'src/shared/components/Pages/SearchPage/ProductsList';
import { rangeFilterValueToFront } from 'src/shared/helpers/common/transform';
import { AppPagination } from 'src/shared/components/Common/AppPagination';
import {
  getFiltersLocalizedNames,
  getRangeFiltersLocalizedNames,
  isValidRangeInput,
  getLabeledCategory
} from 'src/shared/components/Pages/SearchPage/helpers/index';
import { AppMain } from '../../Common/AppMain';
import {
  filterTypeFilter,
  filterTypeRange,
  IFilterItemToDelete,
  ISearchPageProps,
  ISearchPageState,
  rangeMaxType,
  rangeMinType,
  RangeType,
  TCategoryId,
  TFilterItemValue,
} from './types';
import { connect } from './connect';
import { styles } from './styles';
import { SearchIntro } from './SearchIntro';
import { CategoriesList } from './CategoriesList';
import { SearchFilterList } from './SearchFilterList';
import { SearchPageContext } from './context';
import {
  addToQueryActiveRangeFilters,
} from "src/shared/components/Pages/SearchPage/helpers/queries";
import {DefaultItemsPerPage} from "src/shared/components/Pages/SearchPage/constants";
import {getCategoryNameById} from "src/shared/helpers/categories/index";

export const pageTitle = 'Results for ';
export const pageTitleDefault = 'Start searching';

@(withRouter as any)
@connect
export class SearchPageBase extends React.Component<ISearchPageProps, ISearchPageState> {
  constructor(props: ISearchPageProps) {
    super(props);

    const activeFilters: {[key: string]: string[]} = {};
    const activeRangeFilters: {[key: string]: RangeType} = {};

    this.state = {
      activeFilters,
      activeRangeFilters,
      sort: props.currentSort,
      itemsPerPage: props.pagination.currentItemsPerPage,
      isFiltersReset: false,
      isNeedNewRequest: false,
      isReadyToNewRequest: false,
      paginationPage: null,
    };
  }

  public componentDidMount() {
    this.initCategoryRequest();
  }

  public componentDidUpdate = (prevProps: ISearchPageProps, prevState: ISearchPageState): void => {
    const {locationCategoryId, currency} = this.props;

    if (locationCategoryId && currency && locationCategoryId !== prevProps.locationCategoryId) {
      this.runNewCategoryPage();
    }

    // Init new request if it's needed
    if (this.state.isReadyToNewRequest) {
      if (!prevState.isReadyToNewRequest && this.state.isNeedNewRequest) {
        this.updateSearch();
        this.setState({isReadyToNewRequest: false});
      }
      if (this.state.isReadyToNewRequest && !this.state.isNeedNewRequest) {
        this.setState({isReadyToNewRequest: false});
      }
    }

    // if searchTerm was changed
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.runResetActiveFilters(false);
    }
  };

  public selectCategory = (categoryId: TCategoryId): any => (event: React.MouseEvent<HTMLElement>) => {
    if (this.props.locationCategoryId !== categoryId) {
      this.props.changeLocation(`${pathCategoryPageBase}/${categoryId}`);
    }
  };

  public updateActiveFilters = (name: string, values: Array<string>) => {
    this.setState((prevState: ISearchPageState) => ({
      activeFilters: {
        ...prevState.activeFilters,
        [name]: values,
      },
      paginationPage: 1,
      isFiltersReset: false,
      isNeedNewRequest: true,
    }));
  };

  public updateRangeFilters = (name: TRangeInputName, {min, max}: RangeType) => {
    const currentData = this.props.rangeFilters.filter((filter: RangeFacets) => (filter.name === name))[0];
    const currentDataActiveMin = rangeFilterValueToFront(currentData.activeMin, rangeMinType);
    const currentDataActiveMax = rangeFilterValueToFront(currentData.activeMax, rangeMaxType);

    if (currentDataActiveMin === min && currentDataActiveMax === max) {
      return;
    }

    this.setState((prevState: ISearchPageState) => {
      return {
        activeRangeFilters: {
          ...prevState.activeRangeFilters,
          [name]: {min, max},
        },
        paginationPage: 1,
        isFiltersReset: false,
        isNeedNewRequest: true,
      };
    });
  };

  private validateData = (): boolean => {
    return isValidRangeInput(this.state.activeRangeFilters, this.props.rangeFilters);
  };

  public resetRangeFilter = ({name}: IFilterItemToDelete): boolean => {
    if (!name) {
      return;
    }

    const {...activeRanges} = this.state.activeRangeFilters;
    delete activeRanges[name];

    this.setState((prevState: ISearchPageState) => ({
      activeRangeFilters: {
        ...activeRanges,
      },
      isFiltersReset: false,
      isNeedNewRequest: true,
      paginationPage: 1,
    }));
    return true;
  };

  public resetFilterOneValue = ({name, value}: IFilterItemToDelete): boolean => {
    const values = [...this.state.activeFilters[name]].filter((val: TFilterItemValue) => val !== value);
    this.updateActiveFilters(name, values);
    return true;
  };

  public updateSearch = (needResetURLParam: boolean = true): boolean => {

    if (!this.validateData()) {
      console.error('can\'t make request in updateSearch method!!!');
      toast.error(validateRangeInputsError);
      return;
    }
    let query: ISearchQuery = this.getQueryBaseParams();

    if (needResetURLParam === true) {
      this.setPaginationParam("1");
    }

    this.props.sendSearch(query);
    this.setState((prevState: ISearchPageState) => ({
      ...prevState,
      isReadyToNewRequest: false,
      isNeedNewRequest: false,
      paginationPage: needResetURLParam ? 1 : prevState.paginationPage,
    }));

    return true;
  };

  public handleSetSorting = (event: ChangeEvent<HTMLSelectElement>, child: ReactNode): void => {
    const result = this.runSetSorting(event.target.value);
  };

  public handleSetItemsPerPage = (event: ChangeEvent<HTMLSelectElement>, child: ReactNode): void => {
    const result = this.runSetItemsPerPage(+event.target.value);
  };

  public handlePagination = (event: ChangeEvent<{}>, value: number | string): void => {
    const resultPagination = this.runSetPaginationPage(value);
  };

  public onSelectProductHandler = (sku: string) => {
    this.props.changeLocation(`${pathProductPageBase}/${sku}`);
  };

  public deleteActiveFilterHandler = (itemToDelete: IFilterItemToDelete) => (event: React.MouseEvent<HTMLElement>) => {
      if (itemToDelete.type === filterTypeFilter) {
        this.resetFilterOneValue(itemToDelete);
      } else if (itemToDelete.type === filterTypeRange) {
        this.resetRangeFilter(itemToDelete);
      }

      this.setState({isReadyToNewRequest: true});
    };

  public resetActiveFilters = (event: React.MouseEvent<HTMLDivElement>): void => {
    const resultReset = this.runResetActiveFilters();
  };

  public onCloseFilterHandler = (event: React.ChangeEvent<{}>): void => {
    this.setState({isReadyToNewRequest: true});
  };

  public onAfterChangeRangeFilterHandler = (value: number[]): void => {
    this.setState({isReadyToNewRequest: true});
  };

  private initCategoryRequest = async (): Promise<any> => {
    const parsedGetParams = qs.parse(this.props.location.search);
    let query: ISearchQuery = this.getQueryBaseParams();
    if (parsedGetParams && parsedGetParams.page) {
      query.page = parsedGetParams.page;
    }
    // TODO: Add Query params to URL
    await this.props.sendSearch(query);
  }

  private setPaginationParam = (page: string): void => {
    const searchQuery = new URLSearchParams(this.props.history.location.search);
    searchQuery.set('page', page);
    this.props.history.replace({...this.props.history.location, search: searchQuery.toString()});
  }

  private getQueryBaseParams = (): ISearchQuery => {
    let query: ISearchQuery = {
      currency: this.props.currency,
      ipp: DefaultItemsPerPage,
    };
    if (this.props.searchTerm) {
      query.q = this.props.searchTerm;
    }
    if (this.props.currency) {
      query.currency = this.props.currency;
    }
    if (this.props.locationCategoryId) {
      const labeledCategory = getLabeledCategory(this.props.locationCategoryId);
      if (labeledCategory) {
        query.label = labeledCategory;
      } else {
        query.category = this.props.locationCategoryId;
      }
    }
    if (this.state.sort) {
      query.sort = this.state.sort;
    }
    if (this.state.itemsPerPage) {
      query.ipp = this.state.itemsPerPage;
    }
    if (this.state.activeFilters) {
      query = {...query, ...this.state.activeFilters};
    }
    if (this.state.activeRangeFilters) {
      query = {...query, ...addToQueryActiveRangeFilters(this.state.activeRangeFilters)};
    }
    if (this.state.paginationPage) {
      query.page = this.state.paginationPage;
    }
    return query;
  }

  private runResetActiveFilters = async (needUpdateSearch: boolean = true): Promise<any> => {
    await this.setState((prevState: ISearchPageState) => {
      return ({
        ...prevState,
        activeFilters: {},
        activeRangeFilters: {},
        selectedCategory: null,
        isFiltersReset: true,
        isNeedNewRequest: false,
        isReadyToNewRequest: false,
        paginationPage: 1,
      });
    });

    if (needUpdateSearch) {
      const resultUpdate = await this.updateSearch();
    }

    return true;
  };

  private runSetItemsPerPage = async (itemsPerPage: ISearchPageState['itemsPerPage']): Promise<any> => {
    await this.setState({paginationPage: 1, itemsPerPage, isReadyToNewRequest: true});
    const resultUpdate = await this.updateSearch();
    return resultUpdate;
  };

  private runSetPaginationPage = async (page: ISearchPageState['paginationPage']): Promise<any> => {
    await this.setState({paginationPage: page, isReadyToNewRequest: true} );
    this.setPaginationParam(String(page));
    const resultUpdate = await this.updateSearch(false);
    return resultUpdate;
  };

  private runSetSorting = async (sortMode: ISearchPageState['sort']): Promise<any> => {
    await this.setState({sort: sortMode, isReadyToNewRequest: true});
    const resultUpdate = await this.updateSearch();
    return resultUpdate;
  };

  private runNewCategoryPage = async (): Promise<any> => {
    await this.setState({paginationPage: null});
    const resultNewCategoryPage = await this.initCategoryRequest();
    return resultNewCategoryPage;
  };

  public render() {
    const {
      classes,
      items,
      searchTerm,
      currency,
      filters,
      rangeFilters,
      isLoading,
      sortParams,
      sortParamLocalizedNames,
      pagination,
      category,
      spellingSuggestion,
      categoriesTree,
      categoriesLocalizedName,
      currentCategory,
      productsLabeled,
      availableLabels,
    } = this.props;

    const isSortParamsExist = (sortParams.length > 0);
    const isProductsExist = (items.length > 0);
    const isCategoriesExist = (category.length > 0);

    const sortPanelNumberMode = (
      <SprykerSelect
        currentMode={ this.state.itemsPerPage }
        changeHandler={ this.handleSetItemsPerPage }
        menuItems={ pagination.validItemsPerPageOptions.map((item: number) => ({value: item, name: item})) }
        menuItemFirst={ {value: ' ', name: 'products per page', disabled: true} }
        name="pages"
      />
    );

    const sortPanelSorterMode = (
      <SprykerSelect
        currentMode={ this.state.sort || ' ' }
        changeHandler={ this.handleSetSorting }
        menuItems={ sortParams.filter((item: string) => item !== 'rating').map((item: string) => ({
          value: item,
          name: (sortParamLocalizedNames && sortParamLocalizedNames[item]) ? sortParamLocalizedNames[item] : `${item}`,
        })) }
        menuItemFirst={ {
          value: ' ',
          name: (!isSortParamsExist && !this.state.sort) ? 'Choose sort mode' : 'Sort by relevance',
          disabled: !isSortParamsExist,
        } }
        name="sort"
        title={null}
      />
    );

    const categoryDisplayName =  getCategoryNameById(currentCategory, categoriesTree);

    return (
      <AppMain>
        { isLoading ? <AppBackdrop isOpen={ true }/> : null }
        <AppPageTitle
          title={ searchTerm
            ? `${pageTitle} "${searchTerm}"`
            : (currentCategory && categoryDisplayName) ? categoryDisplayName : pageTitleDefault
          }
          intro={ <SearchIntro className={ classes.spellingSuggestion } spellingSuggestion={ spellingSuggestion }/> }
        />
        <Grid container className={ classes.container }>
          <SearchPageContext.Provider
            value={ {
              selectCategoryHandler: this.selectCategory,
              deleteActiveFilterHandler: this.deleteActiveFilterHandler,
            } }
          >
            <Grid item xs={ isCategoriesExist ? 12 : null } md={ isCategoriesExist ? 3 : null }>
              <CategoriesList
                categories={ category }
                localizedName = {categoriesLocalizedName}
                categoriesTree={ categoriesTree }
                selectedCategory={ currentCategory }
              />
            </Grid>

            <Grid item xs={ 12 } md={ isCategoriesExist ? 9 : 12 }>
              <Grid container>
                <SearchFilterList
                  filters={ filters }
                  updateFilterHandler={ this.updateActiveFilters }
                  activeValuesFilters={ this.state.activeFilters }
                  ranges={ rangeFilters }
                  activeValuesRanges={ this.state.activeRangeFilters }
                  updateRangeHandler={ this.updateRangeFilters }
                  onCloseFilterHandler={ this.onCloseFilterHandler }
                  onAfterChangeRangeFilter={ this.onAfterChangeRangeFilterHandler }
                  isFiltersReset={ this.state.isFiltersReset }
                  isProductsExist={ isProductsExist }
                />
                <ActiveFiltersList
                  activeValuesFilters={ this.state.activeFilters }
                  activeValuesRanges={ this.state.activeRangeFilters }
                  rangeFilters={ rangeFilters }
                  resetHandler={ this.resetActiveFilters }
                  filtersLocalizedNames = {getFiltersLocalizedNames(filters)}
                  rangesLocalizedNames = {getRangeFiltersLocalizedNames(rangeFilters)}
                />
                <SortPanel
                  foundItems={ <FoundItems numberFound={ pagination.numFound }/> }
                  numberMode={ sortPanelNumberMode }
                  sorterMode={ sortPanelSorterMode }
                  isProductsExist={ isProductsExist }
                />
                <ProductsList
                  products={ items }
                  selectProductHandler={ this.onSelectProductHandler }
                  currency={ currency }
                  isLoading={ !!isLoading }
                  productsLabeled={ productsLabeled }
                  availableLabels={ availableLabels }
                />
                <AppPagination pagination={ pagination } onChangeHandler={ this.handlePagination }/>
              </Grid>
            </Grid>
          </SearchPageContext.Provider>
        </Grid>
      </AppMain>
    );
  }
}

export const SearchPage = withStyles(styles)(SearchPageBase);

export default SearchPage;
