import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  root: {
    position: 'absolute',
  },
  close: {
    padding: theme.spacing.unit / 2,
  },

});
