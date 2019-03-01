import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  container: {
    flexGrow: 1,
  },
  insideContWrapper: {
    width: '75%',
    margin: '40px 12.5% 80px',
  },
  suggestionsContainer: {
    display: 'none',
  },
  suggestionsContainerOpen: {
    display: 'block',
    position: 'absolute',
    width: '100%',
    height: '85vh',
    overflowY: 'auto',
    borderRadius: '2px',
    backgroundColor: '#ffffff',
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  divider: {
    height: theme.spacing.unit * 2,
  },
  inputRoot: {
    display: 'flex',
    flexDirection: 'row-reverse',
    paddingLeft: 5,
  },
  inputOutline: {
    border: '1px solid #d9d9d9',
    backgroundColor: theme.palette.common.white,
    zIndex: 1,
  },
  input: {
    fontSize: 16,
    lineHeight: '20px',
    fontWeight: 500,
    color: theme.appColors.black,
    padding: 13,
    zIndex: 3,
    background: 'transparent',
    letterSpacing: '0.5px',
    '&:not(:focus)': {
      backgroundColor: 'white'
    },
  },
  inputIconContainer: {
    position: 'relative',
    zIndex: 2,
    margin: 0,
  },
  inputIcon: {
    fill: `${theme.appColors.grey} !important`,
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 0,
    marginTop: theme.spacing.unit * 3,
    height: '100%',
    paddingTop: 0,
    paddingBottom: 0,
  },
  pendingProgress: {
    position: 'absolute',
    left: '40%',
    zIndex: 10,
  },
  completion: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '22px',
    fontSize: theme.appFixedDimensions.fontSize.medium,
    color: theme.appColors.black,
    letterSpacing: '0.5px',
    textDecoration: 'none',
  },
  categoryTitle: {
    lineHeight: '25px',
    fontSize: '20px',
    letterSpacing: '0.6px',
    marginTop: '60px',
    marginBottom: theme.spacing.unit * 2,
  },
  searchTitle: {
    marginLeft: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit,
    letterSpacing: '0.5px',
  },
  marginTop: {
    marginTop: theme.spacing.unit * 2,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing.unit * 2,
    alignSelf: 'stretch',
  },
  itemName: {
    fontSize: theme.appFixedDimensions.fontSize.medium,
    letterSpacing: '0.5px',
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
  mainPrice: {
    fontSize: theme.appFixedDimensions.fontSize.large,
    letterSpacing: '1px',
    color: theme.appColors.black,
  },
  oldPrice: {
    fontSize: theme.appFixedDimensions.fontSize.small,
    letterSpacing: '1px',
    color: theme.appColors.grey,
  },
  linkAll: {
    display: 'inline-block',
    marginTop: theme.spacing.unit * 3,
    fontSize: theme.appFixedDimensions.fontSize.small,
    color: theme.appColors.black,
    letterSpacing: '0.4px',
    textDecoration: 'underline',
  },
  completionInput: {
    position: 'absolute',
    left: 20,
    top: 13,
    zIndex: 2,
  },
  hiddenPart: {
    display: 'inline-block',
    transform: 'translateY(-200px)',
  },
  visiblePart: {
    fontSize: 16,
    lineHeight: '20px',
    color: '#000000',
    letterSpacing: '0.5px',
    opacity: 0.35,
    fontWeight: 300,
  },
});
