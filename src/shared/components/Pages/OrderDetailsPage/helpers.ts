import {IOrderDetailsItem, IOrderDetailsSelectedItems} from "src/shared/interfaces/order/index";
import {TCartAddItemCollection} from "src/shared/interfaces/cart/index";

export const getOrderSelectedItemsData = (selectedItems: IOrderDetailsSelectedItems): TCartAddItemCollection => {
  const result = [];
  for (let sku in selectedItems) {
    if (selectedItems[sku]) {
      result.push({
        sku,
        quantity: this.props.order.items.filter((item: IOrderDetailsItem) => (item.sku === sku))[0].quantity,
      });
    }
  }
  return result.length ? result : null;
};
