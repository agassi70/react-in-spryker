import { link } from './parts/Links/types';
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

export const categoriesLinks: link[] = [
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

export const socialMediaLinks: link[] = [
  {
    name: 'Instagram',
    path: 'https://www.instagram.com/spryker/',
  },
  {
    name: 'YouTube',
    path: 'https://www.youtube.com/channel/UC6lVOEbqXxUh0W5FMTvlPDQ',
  },
  {
    name: 'Facebook',
    path: 'https://www.facebook.com/Spryker/',
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/sprysys',
  },
  {
    name: 'LinkedIn',
    path: 'https://www.linkedin.com/company/spryker-systems-gmbh',
  },
  {
    name: 'Xing',
    path: 'https://www.xing.com/companies/sprykersystemsgmbh',
  },
];
