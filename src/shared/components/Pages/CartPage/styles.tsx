import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';

export const styles = (theme: Theme) => createStyles({
  root: {
    marginBottom: theme.spacing.unit * 4,
  },
  fullWidth: {
    width: '100%',
  },
  listItem: {
    paddingTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3,
    alignItems: 'start',
  },
  listTitle: {
    width: '100%',
    height: '18px',
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    display: 'flex',
    letterSpacing: '0.2px',
    color: theme.appColors.grey,
  },
  cartTotalIndent: {
    marginTop: '58px'
  },
  itemWrapper: {
    width: '40%',
    paddingLeft: theme.spacing.unit * 3,
  },
  itemName: {
    fontSize: theme.appFixedDimensions.fontSize.large,
  },
  itemAttr: {
    letterSpacing: '0.2px',
    color: theme.appColors.grey,
    lineHeight: '24px',
  },
  textCapitalize: {
    textTransform: 'capitalize',
  },
  remove: {
    letterSpacing: '0.4px',
    textTransform: 'uppercase',
    fontSize: theme.appFixedDimensions.fontSize.small,
  },
  quantityForm: {
    width: '20%',
    paddingLeft: 'calc(20% - 60px)',
  },
  priceWrapper: {
    width: '20%',
    textAlign: 'right',
    paddingRight: theme.spacing.unit * 3,
  },
  sumWrapper: {
    lineHeight: '26px',
    verticalAlign: 'middle',
  },
  btnWrapper: {
    margin: `${theme.spacing.unit * 4}px 0`,
    height: '44px',
    borderRadius: '4px',
    fontSize: theme.appFixedDimensions.fontSize.medium,
    letterSpacing: '1.5px',
  },
  mainCurrency: {
    fontSize: theme.appFixedDimensions.fontSize.large,
    letterSpacing: '0.5px',
  },
  eachCurrency: {
    fontSize: theme.appFixedDimensions.fontSize.medium,
  },
  select: {
    width: '52px',
    height: '22px',
    padding: 0,
    paddingLeft: '8px',
  },
  menuItem: {
    padding: 0,
    paddingLeft: '6px',
    textAlign: 'left',
  }
});
