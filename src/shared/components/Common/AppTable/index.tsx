import * as React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import {styles} from './styles';
import {IAppTableProps, ICellInfo, ITableRow} from "./types";


export const AppTableBase: React.SFC<IAppTableProps> = (props) => {
  const {classes, headerCells, bodyRows, footerCells, isResponsive, width} = props;
  const rowClass =  classes.bodyRow;

  const tableStyles: React.CSSProperties = {
    width: isResponsive ? width : '100%',
  };

  return (
    <div className={`${classes.tableOuter} ${isResponsive ? classes.responsive : ''}`}>
      <Table className={classes.root}  style={tableStyles} >
      {
        headerCells
        ? (<TableHead className={classes.header}>
            <TableRow className={classes.headerRow} classes={{hover: classes.rowHover}}>
              {headerCells.map((cell: ICellInfo) => (
                <TableCell
                  colSpan={cell.colSpan}
                  rowSpan={cell.rowSpan}
                  key={cell.id}
                  className={`${classes.headerCell} ${cell.extraClassName ? cell.extraClassName : ''}`}
                >
                  {cell.content}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>)
          : null
      }

      <TableBody className={classes.body}>
        {bodyRows.map((row: ITableRow) => (
          <TableRow key={row.id} className={rowClass}>
            {row.cells.map((cell: ICellInfo) => (
              <TableCell
                colSpan={cell.colSpan}
                rowSpan={cell.rowSpan}
                key={`${row.id}-${cell.id}`}
                className={`${classes.bodyCell} ${cell.extraClassName ? cell.extraClassName : ''}`}
              >
                {cell.content}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>

      {
        footerCells
          ? (<TableFooter>
              <TableRow>
                {footerCells.map((cell: ICellInfo) => (
                  <TableCell
                    colSpan={cell.colSpan}
                    rowSpan={cell.rowSpan}
                    key={cell.id}
                    className={`${classes.footerCell} ${cell.extraClassName ? cell.extraClassName : ''}`}
                  >
                    {cell.content}
                  </TableCell>
                ))}
              </TableRow>
            </TableFooter>)
          : null
      }
    </Table>
    </div>
  );
};

export const AppTable = withStyles(styles)(AppTableBase);
