import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  appPageTitleRoot: {
    margin: 0,
    padding: 0
  },
  appPageTitleRootPageHeader: {
    fontSize: '2rem',
  },
  bodyCell: {
    '&:first-child': {
      paddingLeft: 0
    }
  },
  headerCell: {
    padding: '0.25rem 1rem'
  },
  vertical: {
    display: 'flex',
    flexDirection: 'column',
  },
  attributes: {
    display: 'block',
    textTransform: 'capitalize',
    color: theme.appColors.grey
  },
  noItems: {
      marginTop: '2rem',
      fontSize: '1rem',
      fontWeight: 'bold'
  },
  menu: {
    display: 'flex',
    padding: '2rem 0'
  },
  menuItem: {
    padding: '0',
    fontSize: '0.875rem',
    cursor: 'default',
    '&:not(:last-child)': {
      cursor: 'pointer',
      '&:after': {
        padding: '0 0.3125rem',
        content: '">"'
      }
    },
    '&:hover': {
      backgroundColor: 'transparent'
    },
    '&:last-of-type': {
      textDecoration: 'underline'
    }
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    transition: 'color 0.5s ease-in-out',
    '&:hover': {
      color: theme.appColors.blue
    },
  },
  tableAction: {
    cursor: 'pointer',
    transition: 'color .5s ease-in-out',
    '&:hover': {
      color: theme.appColors.blue
    },
  },
  tableActionDisabled: {
    pointerEvents: 'none',
    opacity: 0.5
  },
  available: {
    color: theme.appColors.green
  },
  noAvailable: {
    color: theme.appColors.red
  },
  addAllBtn: {
    display: 'block',
    margin: '1.4375rem 0 0 auto',
    fontSize: '0.625rem',
    fontWeight: 'bold',
    transition: 'all 0.5s ease-in-out',
    '&:hover': {
      backgroundColor: theme.appColors.white,
      color: theme.palette.primary.main
    }
  },
  product: {
    display: 'flex'
  },
  wrapProductImage: {
    position: 'relative',
    maxHeight: '3.5rem',
    maxWidth: '3.5rem',
    padding: '0.4375rem',
    '&:before': {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      content: '""',
    }
  },
  productDescription: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '1rem'
  },
  price: {
    fontSize: '0.875rem'
  }
});
