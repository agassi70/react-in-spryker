import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';


export interface ISprykerLogoWhiteProps extends WithStyles<typeof styles> {
  extraClassName?: string;
}
