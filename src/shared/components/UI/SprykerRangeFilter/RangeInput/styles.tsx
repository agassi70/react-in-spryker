import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  title: {
    lineHeight: 'normal',
    letterSpacing: 0.5,
    height: 'auto',
    paddingRight: theme.spacing.unit * 1.5,
  },
  value: {
    height: 'auto',
    lineHeight: 'normal',
    letterSpacing: 0.5,
    fontSize: theme.appFixedDimensions.fontSize.small,
    padding: 0,
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      width: 100,
    },

  },
  label: {
    position: 'absolute',
    color: theme.palette.error.main,
    top: -theme.spacing.unit * 2.5,
    left: '0%',
    width: '100%',
  },
  error: {
    color: theme.palette.error.main,
    'label + &': {
      marginTop: 0,
    },
  },
});
