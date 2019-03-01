import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { IFilterItem } from 'src/shared/components/Pages/SearchPage/types';


export interface IActiveFilterItemProps extends WithStyles<typeof styles>, IFilterItem {
}
