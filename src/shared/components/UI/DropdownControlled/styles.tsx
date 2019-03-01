import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  root: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  button: {
    display: 'block',
    paddingLeft: 0,
    paddingRight: 0,
  },
  formControl: {
    width: '100%'
  },
});
