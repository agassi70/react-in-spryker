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
  titleForm: {
    marginBottom: '0.3125rem'
  },
  textFieldForm: {
    marginRight: '1.5rem',
    padding: 0,
    maxWidth: '27.1875rem',
    width: '100%',
    fontSize: '0.875rem'
  },
  tableAction: {
    cursor: 'pointer',
    transition: 'color 0.5s ease-in-out',
    '&:hover': {
        color: theme.appColors.blue
    },
  },
  tableActionDisabled: {
    pointerEvents: 'none',
    opacity: 0.5
  },
  updateCell: {
    display: 'flex',
  },
  form: {
    padding: '2rem 0'
  },
  formItem: {
    display: 'flex',
    alignItems: 'center'
  },
  formSubmit: {
    padding: '11px 24px',
    minWidth: '8rem',
    fontSize: '1rem'
  },
  input: {
    padding: '0.6875rem 0.75rem',
    fontSize: '0.85rem',
    lineHeight: '1'
  },
  noItems: {
    marginTop: '2rem',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  link: {
    color: theme.palette.common.black,
    textDecoration: 'none',
    transition: 'color 0.5s ease-in-out',
    '&:hover': {
        color: theme.appColors.blue
    },
  }
});
