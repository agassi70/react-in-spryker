import { ICartDataResponse } from '../../interfaces/cart';
import { parseImageSets } from '../product/imageSetsParser';
import {priceTypeNameDefault, priceTypeNameOriginal} from "src/shared/interfaces/product/index";

export const parseCartCreateResponse = (data: any): ICartDataResponse => {
  return {
    ...parseCommonDataInCartResponse(data),
    items: [],
  };
};

export const parseAddToCartResponse = (data: any): ICartDataResponse => {

  const result: any = {};
  let totalQty: number = 0;
  // Fill data with concrete products ids
  if (data.data.relationships && data.data.relationships.items) {
    data.data.relationships.items.data.forEach((datum: any) => {
      result[datum.id] = {};
    });
  }

  data.included && data.included.forEach((row: any) => {
    if (row.type === 'concrete-product-image-sets' && !result[row.id].images) {
      const images = parseImageSets(row.attributes.imageSets);
      result[row.id].image = images[0].externalUrlSmall ? images[0].externalUrlSmall : null;
    } else {
      if (row.type === 'items' && !result[row.id].sku) {
        result[row.id].sku = row.id;
        result[row.id].quantity = row.attributes.quantity;
        result[row.id].amount = row.attributes.amount;
        result[row.id].calculations = row.attributes.calculations;
        result[row.id].groupKey = row.attributes.groupKey;
        totalQty += row.attributes.quantity;
      } else {
        if (row.type === 'concrete-products') {
          result[row.id].name = row.attributes.name;

          if (Array.isArray(row.attributes.superAttributesDefinition)) {
            result[row.id].superAttributes = [];
            Object.keys(row.attributes.attributes).forEach((attribute: string) => {
              if (row.attributes.superAttributesDefinition.includes(attribute)) {
                result[row.id].superAttributes.push({
                  [attribute]: row.attributes.attributes[attribute],
                });
              }
            });
          }
        } else if (row.type === 'concrete-product-prices') {
          result[row.id].prices = row.attributes.prices;
          if (row.attributes.prices && row.attributes.prices.length) {
            row.attributes.prices.forEach((priceData: any) => {
              if (priceData.priceTypeName === priceTypeNameDefault) {
                result[row.id].priceDefaultGross = priceData.grossAmount;
                result[row.id].priceDefaultNet = priceData.netAmount;
              }
              if (priceData.priceTypeName === priceTypeNameOriginal) {
                result[row.id].priceOriginalGross = priceData.grossAmount;
                result[row.id].priceOriginalNet = priceData.netAmount;
              }
            });
          }
        } else {
          if (row.type === 'concrete-product-availabilities' && !result[row.id].availability) {
            result[row.id].availability = row.attributes.availability;
            result[row.id].availableQuantity = row.attributes.quantity;
          }
        }
      }
    }
  });

  const items = Object.values(result);
  return {
    ...parseCommonDataInCartResponse(data),
    items,
    totalQty,
  };
};

export const parseGuestCartResponse = (data: any): ICartDataResponse => {

  const result: any = {};
  let totalQty: number = 0;
  // Fill data with concrete products ids
  if (data.data.relationships && data.data.relationships['guest-cart-items']) {
    data.data.relationships['guest-cart-items'].data.forEach((datum: any) => {
      result[datum.id] = {};
    });
  }

  data.included && data.included.forEach((row: any) => {
    if (row.type === 'concrete-product-image-sets') {
      const images = parseImageSets(row.attributes.imageSets);
      result[row.id].image = images[0].externalUrlSmall ? images[0].externalUrlSmall : null;
    } else {
      if (row.type === 'concrete-products') {
        result[row.id].name = row.attributes.name;

        if (Array.isArray(row.attributes.superAttributesDefinition)) {
          result[row.id].superAttributes = [];
          Object.keys(row.attributes.attributes).forEach((attribute: string) => {
            if (row.attributes.superAttributesDefinition.includes(attribute)) {
              result[row.id].superAttributes.push({
                [attribute]: row.attributes.attributes[attribute],
              });
            }
          });
        }
      } else {
        if (row.type === 'concrete-product-availabilities') {
          result[row.id].availability = row.attributes.availability;
          result[row.id].availableQuantity = row.attributes.quantity;
        } else {
          if (row.type === 'guest-cart-items') {
            result[row.id].sku = row.id;
            result[row.id].quantity = row.attributes.quantity;
            result[row.id].amount = row.attributes.amount;
            result[row.id].calculations = row.attributes.calculations;
            result[row.id].groupKey = row.attributes.groupKey;
            totalQty += row.attributes.quantity;
          }
        }
      }
    }
  });

  const items = Object.values(result);
  return {
    ...parseCommonDataInCartResponse(data),
    cartCreated: true,
    items,
    totalQty,
  };
};

const parseCommonDataInCartResponse = (data: any): any => {
  return {
    id: data.data.id,
    currency: data.data.attributes.currency,
    discounts: data.data.attributes.discounts,
    priceMode: data.data.attributes.priceMode,
    store: data.data.attributes.store,
    totals: data.data.attributes.totals,
  };
};

