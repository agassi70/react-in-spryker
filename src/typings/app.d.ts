export interface IStyles {
  className?: string;
  style?: {};
}

export interface IComponent extends IStyles {
  children?: React.ReactNode[] | React.Element | string;
}

export interface IReduxState {
  dispatch?: Function;
  error?: any;
  pending?: boolean;
  fulfilled?: boolean;
  rejected?: boolean;
  initiated?: boolean;
}
