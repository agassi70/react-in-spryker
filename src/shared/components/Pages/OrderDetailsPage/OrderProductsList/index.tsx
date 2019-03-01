import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { styles } from './styles';
import {IOrderProductListProps} from "./types";
import {IOrderDetailsItem} from 'src/shared/interfaces/order';
import {ICellInfo, ITableRow} from "src/shared/components/Common/AppTable/types";
import {
  OrderDetailProductSKU,
  OrderDetailTableHeaderItems,
  OrderDetailTableHeaderPrice,
  OrderDetailTableHeaderQuantity,
  OrderDetailTableHeaderTotal
} from "src/shared/constants/orders/index";
import {AppPrice} from "src/shared/components/Common/AppPrice/index";
import {appFixedDimensions} from "src/shared/theme/properties/new/appFixedDimensions";
import {AppTable} from "src/shared/components/Common/AppTable/index";
import {OrderProductName} from "src/shared/components/Pages/OrderDetailsPage/OrderProductName/index";


export const OrderProductListBase: React.SFC<IOrderProductListProps> = (props): JSX.Element => {
  const {classes, items} = props;

  const headerCellPart = 'header-';
  const rowPart = 'order-';
  const headerCells:  Array<ICellInfo> = [
    {id: `${headerCellPart}1`, content: OrderDetailTableHeaderItems},
    {id: `${headerCellPart}2`, content: OrderDetailTableHeaderPrice},
    {id: `${headerCellPart}3`, content: OrderDetailTableHeaderQuantity},
    {id: `${headerCellPart}4`, content: OrderDetailTableHeaderTotal, extraClassName: classes.total},
  ];

  const bodyRows: Array<ITableRow> = items.map((item: IOrderDetailsItem) => {
    return {
      id: `${rowPart}${item.sku}`,
      cells: [
        { id: `name-${item.sku}`,
          content: <OrderProductName
                      productName={item.name}
                      titleSKU={OrderDetailProductSKU}
                      sku={item.sku}
                   />
        },
        { id: `price-${item.sku}`,
          content: <AppPrice
                     value={item.sumPrice}
                     extraClassName={classes.price}
                     isStylesInherited={true}
                   />
        },
        { id: `quantity-${item.sku}`, content: item.quantity},
        { id: `total-${item.sku}`,
          content: <AppPrice
            value={item.sumPriceToPayAggregation}
            extraClassName={classes.price}
            isStylesInherited={true}
          />,
          extraClassName: classes.total
        },
      ],
    };
  });

  return (
    <div className={classes.root}>
      <AppTable
        headerCells={headerCells}
        bodyRows={bodyRows}
        isResponsive={true}
        width={appFixedDimensions.customerSubPageWidth}
      />
    </div>

  );
};

export const OrderProductList = withStyles(styles)(OrderProductListBase);
