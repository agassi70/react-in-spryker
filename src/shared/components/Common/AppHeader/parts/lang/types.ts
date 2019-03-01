import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';

export type language = {
  name: string,
  code: string,
};

export interface LangProps extends WithStyles<typeof styles> {
}

export interface LangState {
  anchorEl: HTMLElement | null;
  selectedLang: language;
}
