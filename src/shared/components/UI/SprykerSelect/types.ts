export interface IMenuItemSelect {
  value: string | number;
  name: string | number;
}

export interface IMenuItemFirst extends IMenuItemSelect {
  selected?: boolean;
  disabled?: boolean;
}

