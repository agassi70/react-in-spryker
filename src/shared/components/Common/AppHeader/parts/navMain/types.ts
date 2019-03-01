import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ICategory } from 'src/shared/reducers/Common/Init';
import { styles } from './styles';

export interface MainNavProps extends WithStyles<typeof styles> {
  categoriesTree: ICategory[];
  mobileNavState: boolean;
}
