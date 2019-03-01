import { getAvailabilityDisplay } from './availability';
import { getInitialSuperAttrSelected, ISuperAttribute, parseSuperAttributes } from './superAttributes';
import { parseImageSets } from './imageSetsParser';
import { parseProductResponse } from './productResponse';
import { createQuantityVariants } from './quantity';
import { displayProductNameWithSuperAttr } from './name';
import { createPathToIdProductConcrete, findIdProductConcreteByPath } from './attributeMap';
import {getCurrentProductDataObject} from './productData';

export {
  getAvailabilityDisplay,
  parseSuperAttributes,
  ISuperAttribute,
  parseImageSets,
  parseProductResponse,
  createQuantityVariants,
  displayProductNameWithSuperAttr,
  createPathToIdProductConcrete,
  findIdProductConcreteByPath,
  getInitialSuperAttrSelected,
  getCurrentProductDataObject,
};
