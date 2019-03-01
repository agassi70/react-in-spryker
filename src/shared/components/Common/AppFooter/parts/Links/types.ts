import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

export type link = {
  name: string;
  path: string;
};

export interface LinksProps extends WithStyles<typeof styles> {
  external?: boolean;
  title: string;
  links: link[];
}
