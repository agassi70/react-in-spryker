import {TProductQuantity, TProductSKU} from "src/shared/interfaces/product/index";
import {ICartItem, ICartTotals, TCartId} from "src/shared/interfaces/cart/index";
import {ICartState} from "src/shared/reducers/Common/Cart/types";

// Number of products(including quantity per each product) in the cart
export function getTotalProductsQuantity(state: any, props: any): TProductQuantity {
  return state.cart.data.items.reduce((acc: number, item: ICartItem) => {
    return acc + item.quantity;
  }, 0);
}

// Number of items in the cart
export function getTotalItemsQuantity(state: any, props: any): TProductQuantity {
  return state.cart.data.totalQty;
}

export function isCartCreated(state: any, props: any): boolean {
  return (state.cart.data.cartCreated);
}

export function isCartStateLoading(state: any, props: any): boolean {
  return Boolean(state.cart && state.cart.pending && state.cart.pending === true);
}

export function isCartStateFulfilled(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.cart.fulfilled && state.cart.fulfilled === true);
}

export function isCartStateRejected(state: any, props: any): boolean {
  return Boolean(isStateExist(state, props) && state.cart.rejected && state.cart.rejected === true);
}

export function getCartId(state: any, props: any): TCartId {
  return (isCartCreated(state, props) && state.cart.data.id) ? state.cart.data.id : null;
}

export function getCartTotals(state: any, props: any): ICartTotals | null {
  return isStateExist(state, props) ? state.cart.data.totals : null;
}

export function getProductsFromCart(state: any, props: any): {items: ICartItem[], totalQty: number} {
  const items: ICartItem[] = isStateExist(state, props) ? state.cart.data.items : [];
  const totalQty: number = isStateExist(state, props) ? state.cart.data.totalQty : 0;

  return ({
    items,
    totalQty,
  });
}

// selectors INNER
function isStateExist(state: any, props: any): boolean {
  return Boolean(state.cart);
}

function getProductFromCart(cartState: ICartState, sku: TProductSKU): ICartItem {
  return (cartState.data.items.filter((item: ICartItem): any => item.sku === sku))[0];
}

function isProductExistsInCart(cartState: ICartState, sku: TProductSKU): boolean {
  return Boolean(cartState.data.items.filter((item: ICartItem): any => item.sku === sku).length);
}

function getCartItemsWithoutSelected(cartState: ICartState, sku: TProductSKU): Array<ICartItem> {
  return cartState.data.items.filter((item: ICartItem): any => item.sku !== sku);
}
