import {IProductAttributeMap, IProductAttributeNames} from '../../interfaces/product';


export interface ISuperAttribute {
  name: string;
  nameToShow: string;
  data: Array<ISuperAttributeData>;
}

export interface ISuperAttributeData {
  value: string;
  name: string;
  idProductConcrete?: string | number;
}

export const parseSuperAttributes = (superAttributes: IProductAttributeMap,
                                     attributeNamesContainer: IProductAttributeNames):
  Array<ISuperAttribute> | null => {

  if (!superAttributes.super_attributes || typeof superAttributes.super_attributes !== 'object') {
    return null;
  }

  const names = Object.keys(superAttributes.super_attributes);
  const superData: Array<ISuperAttribute> = [];

  names.forEach((name) => {
    const data: Array<ISuperAttributeData> = [];

    const values = superAttributes.super_attributes[name];

    values.forEach((value: string) => {
      data.push(
        {
          value,
          name: value,
        },
      );
    });

    superData.push({
      name,
      nameToShow: attributeNamesContainer[name] ? attributeNamesContainer[name] : name,
      data}
      );
  });

  return superData;
};

export const getInitialSuperAttrSelected = (superAttributes: Array<ISuperAttribute>): any => {
  const attributes = [...superAttributes];
  if (!attributes.length) {
    return null;
  }
  const superAttrSelected: object = {};

  const selectedAttrNames = attributes.map((attr: ISuperAttribute) => (attr.name)).reduce((acc: any, name: string) => {
    acc[name] = null;
    return acc;
  }, superAttrSelected);

  return selectedAttrNames;
};
