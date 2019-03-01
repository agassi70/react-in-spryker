import { TProductQuantity, TProductSKU } from '../../interfaces/product';
import { ICartAddItem } from '../../interfaces/cart';

export const createCartItemAddToCart = (sku: TProductSKU, quantity: TProductQuantity): ICartAddItem => ({
  sku,
  quantity,
});
