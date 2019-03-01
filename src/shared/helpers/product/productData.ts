import {absentProductType, IProductCardImages, IProductPropFullData} from "src/shared/interfaces/product/index";

export const getCurrentProductDataObject = (abstractProduct: IProductPropFullData,
                                            concreteProduct: IProductPropFullData | null, ): IProductPropFullData => {

  let images: Array<IProductCardImages> = null;
  if (concreteProduct && concreteProduct.images && concreteProduct.images.length) {
    images = concreteProduct.images;
  } else if (abstractProduct.images && abstractProduct.images.length) {
    images = abstractProduct.images;
  }

  return {
    sku: concreteProduct ? concreteProduct.sku : null,
    name: concreteProduct ? concreteProduct.name : abstractProduct.name,
    images,
    availability: concreteProduct ? concreteProduct.availability : false,
    description: concreteProduct ? concreteProduct.description : abstractProduct.description,
    price: concreteProduct ? concreteProduct.price : null,
    prices: concreteProduct ? concreteProduct.prices : null,
    priceOriginalGross: concreteProduct ? concreteProduct.priceOriginalGross : null,
    priceOriginalNet: concreteProduct ? concreteProduct.priceOriginalNet : null,
    priceDefaultGross: concreteProduct ? concreteProduct.priceDefaultGross : null,
    priceDefaultNet: concreteProduct ? concreteProduct.priceDefaultNet : null,
    attributes: concreteProduct ? concreteProduct.attributes : abstractProduct.attributes,
    attributeNames: concreteProduct ? concreteProduct.attributeNames : abstractProduct.attributeNames,
    quantity: concreteProduct ? concreteProduct.quantity : abstractProduct.quantity,
    productType: concreteProduct ? concreteProduct.productType : absentProductType,
  };
};
