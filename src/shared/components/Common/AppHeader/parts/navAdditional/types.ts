import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

export interface AddNavProps extends WithStyles<typeof styles> {
  showSearch: boolean;
  handleSearch(): void;
  isSticky: boolean;
  pageWidth: number;
  pageHeight: number;
}
