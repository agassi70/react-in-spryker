import { CATEGORIES_TREE_REQUEST, INIT_APP_ACTION_TYPE } from '../../constants/ActionTypes/Common/Init';
import { IReduxState } from 'src/typings/app';

import { getReducerPartFulfilled, getReducerPartPending, getReducerPartRejected } from '../parts';
import { ICartCreatePayload } from '../../services/Common/Cart/types';

export type TAppPriceMode = string | null;
export type TAppCurrency = string | null;
export type TAppStore = string | null;
export type TAppLocale = string | null;
export type TAppTimeZone = string | null;

export interface ICategory {
  nodeId: number;
  order: number;
  name: string;
  children: Array<ICategory> | object;
}

export interface ICountries {
  iso2Code: string;
  iso3Code: string;
  name: string;
  postalCodeMandatory: boolean;
  postalCodeRegex: string;
}

export interface IInitData {
  ok?: boolean;
  priceMode: TAppPriceMode;
  currency: TAppCurrency;
  store: TAppStore;
  locale: TAppLocale;
  timeZone: TAppTimeZone;
  categoriesTree?: Array<ICategory>;
  countries?: Array<ICountries>;
  anonymId?: string;
}

export interface IInitState extends IReduxState {
  data: IInitData | null;
}

export const initialState: IInitState = {
  data: {
    ok: false,
    priceMode: null,
    currency: null,
    store: null,
    locale: null,
    timeZone: null,
    categoriesTree: [],
    countries: [],
    anonymId: 'anonym',
  },
};

export const init = function(state: IInitState = initialState, action: any): IInitState {
  switch (action.type) {
    case `${INIT_APP_ACTION_TYPE}_PENDING`:
    case `${CATEGORIES_TREE_REQUEST}_PENDING`:
      return handleInitAppPending(state, action.payload);
    case `${INIT_APP_ACTION_TYPE}_FULFILLED`:
      return handleInitAppFulfilled(state, action.payload);
    case `${INIT_APP_ACTION_TYPE}_REJECTED`:
    case `${CATEGORIES_TREE_REQUEST}_REJECTED`:
      return handleInitAppRejected(state, action.payload);
    case `${CATEGORIES_TREE_REQUEST}_FULFILLED`:
      return {
        ...state,
        data: {
          ...state.data,
          ok: true,
          categoriesTree: action.categories,
        },
        ...getReducerPartFulfilled(),
      };
    default:
      return state;
  }
};

// handlers
const handleInitAppFulfilled = (appState: IInitState, payload: any) => {
  return {
    ...appState,
    data: {
      ...appState.data,
      ok: true,
      priceMode: payload.priceMode,
      currency: payload.currency,
      store: payload.store,
      locale: payload.locale,
      timeZone: payload.timeZone,
      countries: payload.countries,
      anonymId: payload.anonymId,
    },
    ...getReducerPartFulfilled(),
  };
};

const handleInitAppRejected = (appState: IInitState, payload: any) => {
  return {
    ...appState,
    data: {
      ...appState.data,
      ok: false,
    },
    ...getReducerPartRejected(payload.error),
  };
};
const handleInitAppPending = (appState: IInitState, payload: any) => {
  return {
    ...appState,
    data: {
      ...appState.data,
    },
    ...getReducerPartPending(),
  };
};

// selectors

export function isAppInitiated(state: any, props: any): boolean {
  return (state.init.data.ok);
}

export function isAppLoading(state: any, props: any): boolean {
  return (state.init && state.init.pending && state.init.pending === true);
}

export function isAppStateFulfilled(state: any, props: any): boolean {
  return Boolean(state.init && state.init.fulfilled && state.init.fulfilled === true);
}

export function getAppCurrency(state: any, props: any): TAppCurrency {
  return isAppInitiated(state, props) ? state.init.data.currency : null;
}

export function getAppLocale(state: any, props: any): TAppStore {
  return isAppInitiated(state, props) ? state.init.data.locale : null;
}

export function getAppTimeZone(state: any, props: any): TAppTimeZone {
  return isAppInitiated(state, props) ? state.init.data.timeZone : null;
}

export function getAppPriceMode(state: any, props: any): TAppPriceMode {
  return isAppInitiated(state, props) ? state.init.data.priceMode : null;
}

export function getAppStore(state: any, props: any): TAppStore {
  return isAppInitiated(state, props) ? state.init.data.store : null;
}

export function getCounties(state: any, props: any): ICountries[] {
  return isAppInitiated(state, props) ? state.init.data.countries : null;
}

export function getPayloadForCreateCart(state: any, props: any): ICartCreatePayload {
  return (
    isAppInitiated(state, props)
      ? {
        priceMode: state.init.data.priceMode,
        currency: state.init.data.currency,
        store: state.init.data.store,
      }
      : null
  );
}

export function getCategoriesTree(state: any, props: any): ICategory[] {
  return state.init.data.categoriesTree;
}

export function getAnonymId(state: any, props: any): string {
  return state.init.data.anonymId;
}
