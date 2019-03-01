import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import {FilterValue, TLocalizedName} from 'src/shared/interfaces/searchPageData';
import { ICategory } from 'src/shared/reducers/Common/Init';
import { TCategoryId } from 'src/shared/components/Pages/SearchPage/types';


export interface ICategoriesListProps extends WithStyles<typeof styles> {
  categories: Array<FilterValue>;
  categoriesTree: Array<ICategory>;
  selectedCategory: TCategoryId;
  localizedName: TLocalizedName | null;
}

export interface IActiveFilterCategories {
  [key: string]: number;
}
