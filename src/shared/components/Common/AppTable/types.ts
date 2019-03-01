import * as React from "react";
import {WithStyles} from '@material-ui/core';
import {styles} from './styles';


export interface ICellInfo {
  id: string;
  colSpan?: number | null;
  rowSpan?: number | null;
  content: JSX.Element | string | number;
  extraClassName?: string;
}

export interface ITableRow {
  id: string;
  cells?: Array<ICellInfo>;
  isRowHover?: boolean;
}

export interface IAppTableProps extends WithStyles<typeof styles> {
  headerCells: Array<ICellInfo> | null;
  bodyRows: Array<ITableRow>;
  footerCells?: Array<ICellInfo> | null;
  isResponsive?: boolean;
  width?: number;
}
