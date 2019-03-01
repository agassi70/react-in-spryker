import {
  pathCategoryComputers,
  pathCategoryNew,
  pathCategoryNotebooks,
  pathCategorySale,
  pathCategoryTablets,
  pathCategoryWorkstations
} from "src/shared/routes/categoriesRoutes";
import {
  CategoryNameComputers,
  CategoryNameNew,
  CategoryNameNotebooks,
  CategoryNameSale,
  CategoryNameTablets,
  CategoryNameWorkstations
} from "src/shared/constants/categories";

export const navLinks = [
  {
    name: CategoryNameComputers,
    path: pathCategoryComputers,
  },
  {
    name: CategoryNameNotebooks,
    path: pathCategoryNotebooks,
  },
  {
    name: CategoryNameWorkstations,
    path: pathCategoryWorkstations,
  },
  {
    name: CategoryNameTablets,
    path: pathCategoryTablets,
  },
  {
    name: CategoryNameSale,
    path: pathCategorySale,
  },
  {
    name: CategoryNameNew,
    path: pathCategoryNew,
  },
];
