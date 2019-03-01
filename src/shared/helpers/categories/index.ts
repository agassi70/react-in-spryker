import {ICategory} from "src/shared/reducers/Common/Init";

export const getCategoryNameById = (categoryId: string | number, categoriesTree: Array<ICategory>): string | null => {
  if (!categoryId) {
    return null;
  }
  if (!Array.isArray(categoriesTree) || !categoriesTree.length) {
    return null;
  }
  const categoryIdNumbered = Number(categoryId);
  let name: string | null = null;

  categoriesTree.forEach((category: ICategory) => {
    if (name) {
      return;
    }
    if (categoryIdNumbered === category.nodeId) {
      name = category.name;
    } else if (Array.isArray(category.children) && category.children.length && category.children.length > 0) {
      name = getCategoryNameById(categoryIdNumbered, category.children);
    }
  });
  return name;
};

export const getCategoryIdByName = (categoryName: string, categoriesTree: Array<ICategory>): number | null => {
  if (!categoryName) {
    return null;
  }
  if (!Array.isArray(categoriesTree) || !categoriesTree.length) {
    return null;
  }

  let id: number | null = null;

  categoriesTree.forEach((category: ICategory) => {
    if (id) {
      return;
    }
    if (categoryName === category.name) {
      id = category.nodeId;
    } else if (Array.isArray(category.children) && category.children.length && category.children.length > 0) {
      id = getCategoryIdByName(categoryName, category.children);
    }
  });
  return id;
};
