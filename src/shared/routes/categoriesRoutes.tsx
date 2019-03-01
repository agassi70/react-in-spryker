import { pathCategoryPageBase } from 'src/shared/routes/contentRoutes';

export const pathURLToCategorySale = "outlet";
export const pathURLToCategoryNew = "new";
export const labeledCategories: {[key: string]: string} = {
  [pathURLToCategorySale]: "SALE %",
  [pathURLToCategoryNew]: "NEW",
};

export const pathCategoryComputers = `${pathCategoryPageBase}/5`;
export const pathCategoryNotebooks = `${pathCategoryPageBase}/6`;
export const pathCategoryWorkstations = `${pathCategoryPageBase}/7`;
export const pathCategoryTablets = `${pathCategoryPageBase}/8`;
export const pathCategorySale = `${pathCategoryPageBase}/${pathURLToCategorySale}`;
export const pathCategoryNew = `${pathCategoryPageBase}/${pathURLToCategoryNew}`;
