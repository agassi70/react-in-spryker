import { Location } from 'history';

export type TRouterMatchParam = string | number | null;

export function getRouterLocation(state: any, props: any): Location | null {
  return (state.routing && state.routing.location) ? state.routing.location : null;
}

export function getRouterMatchParam(state: any, props: any, paramName: string | number): TRouterMatchParam {
  if (!paramName || !props.match || !props.match.params || !props.match.params[paramName]) {
    return null;
  }

  return props.match.params[paramName];
}

export function getRouterHistoryPush(state: any, props: any): Function | null {
  if (!props.history || !props.history.push) {
    return null;
  }

  return props.history.push;
}

export function getRouterHistoryBack(state: any, props: any): Function | null {
  if (!props.history || !props.history.goBack) {
    return null;
  }

  return props.history.goBack;
}
