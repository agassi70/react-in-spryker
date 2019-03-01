import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  pageHeader: {
    marginBottom: theme.spacing.unit * 8,
  },
  heroBlock: {
    backgroundImage: 'url("https://now.spryker.com/hubfs/Events/duotone_Events.jpg?t=1537192687999")',
    backgroundColor: 'red',
    backgroundSize: 'cover',
    height: '700px',
  },
  contentBlock: {
    minHeight: '400px',
    backgroundColor: '#d8d1d1',
  },
  footerBlock: {
    minHeight: '200px',
    backgroundColor: '#7979ce',
  },
  link: {
    width: '100%',
    fontSize: theme.appFixedDimensions.fontSize.medium,
    lineHeight: 2,
    letterSpacing: '0.5px',
    color: theme.appColors.black,
    textTransform: 'capitalize',
    textDecoration: 'none',
  },
  customerContainer: {
    padding: '1.875rem 0 2.5rem',
    [theme.breakpoints.up('lg')]: {
      padding: '3.875rem 0 5rem'
    }
  },
  rootPaper: {
    maxWidth: 282,
    backgroundColor: theme.appColors.lightGrey,
    padding: `${theme.spacing.unit * 6}px 70px`,
    [theme.breakpoints.down('md')]: {
      padding: `${theme.spacing.unit * 6}px 20px`,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: "100%",
    },
    '& ul': {
      marginBottom: theme.spacing.unit * 5,
      marginTop: theme.spacing.unit * 5,
    },
    '& li': {
      padding: '4px 0',
    },
  },
  logoutLink: {
    marginTop: theme.spacing.unit * 5,
    cursor: 'pointer',
  },
  rightPart: {
    maxWidth: theme.appFixedDimensions.customerSubPageWidth,
    marginLeft: "auto",

    [theme.breakpoints.down('md')]: {
      paddingLeft: theme.spacing.unit * 2,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: "100%",
      marginTop: theme.spacing.unit * 2,
      paddingLeft: 0,
    }
  },
});
