import {ICategoriesTeasersData} from "src/shared/components/Pages/HomePage/types";
import {
  CategoryIntroComputers,
  CategoryIntroNotebooks,
  CategoryIntroTablets,
  CategoryIntroWorkstations,
  CategoryNameComputers,
  CategoryNameNotebooks,
  CategoryNameTablets,
  CategoryNameWorkstations
} from "src/shared/constants/categories";
import {
  HomePageComputersBtnText,
  HomePageNotebooksBtnText,
  HomePageTabletsBtnText,
  HomePageWorkstationsBtnText
} from "src/shared/constants/content/homePage";
import {
  pathCategoryComputers,
  pathCategoryNotebooks,
  pathCategoryTablets,
  pathCategoryWorkstations
} from "src/shared/routes/categoriesRoutes";
import {computersSrc, notebooksSrc, tabletsSrc, workstationsSrc} from "src/img/index";

export const categoriesTeasersData: Array<ICategoriesTeasersData> = [
  {
    title: CategoryNameComputers,
    text: CategoryIntroComputers,
    img: computersSrc,
    path: pathCategoryComputers,
    linkTitle: HomePageComputersBtnText,
  },
  {
    title: CategoryNameNotebooks,
    text: CategoryIntroNotebooks,
    img: notebooksSrc,
    path: pathCategoryNotebooks,
    linkTitle: HomePageNotebooksBtnText,
  },
  {
    title: CategoryNameTablets,
    text: CategoryIntroTablets,
    img: tabletsSrc,
    path: pathCategoryTablets,
    linkTitle: HomePageTabletsBtnText,
  },
  {
    title: CategoryNameWorkstations,
    text: CategoryIntroWorkstations,
    img: workstationsSrc,
    path: pathCategoryWorkstations,
    linkTitle: HomePageWorkstationsBtnText,
  },
];
