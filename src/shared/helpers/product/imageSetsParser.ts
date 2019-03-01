import { IProductCardImages, TProductImageSRC } from '../../interfaces/product';

export const parseImageSets = (imageSets: any): Array<IProductCardImages> | null => {

  if (!Array.isArray(imageSets) || !imageSets.length) {
    return null;
  }

  const result: Array<IProductCardImages> = [];

  imageSets.map((set: any) => {
    set.images.forEach((imgs: any) => {
      result.push(imgs);
    });
  });

  return result;
};

export const getOneProductImage = (images: Array<IProductCardImages>): TProductImageSRC | null => {

  if (!Array.isArray(images)) {
    return null;
  }

  const result = (images && images.length)
    ? (images[0].externalUrlSmall || null)
    : null;

  return result;
};
