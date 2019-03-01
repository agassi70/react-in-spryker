import * as React from 'react';
import { FormattedDate } from 'react-intl';
import { NavLink } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import { ClickEvent, InputChangeEvent } from 'src/shared/interfaces/common/react';
import { pathCustomerPage } from 'src/shared/routes/contentRoutes';
import { AppPageTitle } from '../../Common/AppPageTitle';
import { AppTable } from '../../Common/AppTable';

import { styles } from './styles';
import { connect } from './connect';
import { WishlistPageProps as Props, WishlistPageState as State } from './types';
import {ICellInfo, ITableRow} from "src/shared/components/Common/AppTable/types";
import {IWishlist} from "src/shared/interfaces/wishlist/index";

export const pageTitle = 'Search results for ';

@connect
export class WishListBase extends React.Component<Props, State> {
  public state: State = {
    name: '',
    updatedName: '',
    updatedList: '',
  };

  public componentDidMount() {
    if (!this.props.isInitial) {
      this.props.getWishlistsAction();
    }
  }

  public handleChangeName = (event: InputChangeEvent): void => {
    event.persist();
    this.setState(() => ({name: event.target.value}));
  };

  public handleChangeUpdatedName = (event: InputChangeEvent): void => {
    event.persist();
    this.setState(() => ({updatedName: event.target.value}));
  };

  public addWishlist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!this.state.name.trim()) {
      return;
    }
    this.props.addWishlistAction(this.state.name);
    this.setState(() => ({name: ''}));
  };

  public handleUpdateWishlist = (e: ClickEvent) => {
    this.props.updateWishlistAction(this.state.updatedList, this.state.updatedName);
    this.setState(() => ({updatedList: '', updatedName: ''}));
  };

  public handleDeleteWishlist = (wishlistId: string) => (e: ClickEvent) => {
    this.props.deleteWishlistAction(wishlistId);
  };

  private setUpdatedWishlist = (id: string, name: string) => (e: ClickEvent) => {
    this.setState(() => ({updatedList: id, updatedName: name}));
  };

  public setCurrentWishlist = (wishlistId: string) => (event: ClickEvent) => {
    event.persist();
    this.props.getDetailWishlistAction(wishlistId);
  };

  public render() {
    const {classes, wishlists, isLoading} = this.props;
    const tableAction = isLoading ? classes.tableActionDisabled : classes.tableAction;

    if (!wishlists.length && isLoading) {
      return null;
    }

    const headerCellPart = 'header-';
    const bodyCellPart = 'body-';

    const headerCells: Array<ICellInfo> = [
      {content: 'Name', id: `${headerCellPart}1`},
      {content: 'Items', id: `${headerCellPart}2`},
      {content: 'Created', id: `${headerCellPart}3`},
      {content: '', id: `${headerCellPart}4`},
      {content: '', id: `${headerCellPart}5`},
    ];

    const bodyRows: Array<ITableRow> = wishlists.map((item: IWishlist) => (
      {
        id: item.id,
        cells: [
          {
            content: (
              this.state.updatedList && this.state.updatedList === item.id
                ? (
                  <form noValidate autoComplete="off" className={ classes.updateCell }>
                    <TextField
                      value={ this.state.updatedName }
                      onChange={ this.handleChangeUpdatedName }
                    />
                    <IconButton color="primary" onClick={this.handleUpdateWishlist} disabled={isLoading}>
                      <SaveIcon/>
                    </IconButton>
                  </form>
                ) : (
                  <NavLink
                    className={ classes.link }
                    to={ `${pathCustomerPage}/wishlist/${item.name}` }
                    onClick={ this.setCurrentWishlist(item.id) }
                  >
                    { item.name }
                  </NavLink>
                )
            ),
            id: `${bodyCellPart}1`
          },
          {content: item.numberOfItems, id: `${bodyCellPart}2`},
          {
            content: <FormattedDate value={ new Date(item.createdAt) } year='numeric' month='short' day='2-digit'/>,
            id: `${bodyCellPart}3`
          },
          {
            content: (
              <Typography
                component="span"
                className={ tableAction }
                onClick={ this.setUpdatedWishlist(item.id, item.name) }
              >
                Edit
              </Typography>
            ),
            id: `${bodyCellPart}4`
          },
          {
            content: (
              <Typography component="span" className={ tableAction } onClick={ this.handleDeleteWishlist(item.id) }>
                Delete
              </Typography>
            ),
            id: `${bodyCellPart}5`
          },
        ],
      }
    ));

    return (
      <Grid container>
        <Grid item xs={ 12 }>
          <AppPageTitle
            classes={ {root: classes.appPageTitleRoot, pageHeader: classes.appPageTitleRootPageHeader} }
            title="Wishlist"
          />
        </Grid>

        <Grid item xs={ 12 }>
          <form noValidate autoComplete="off" onSubmit={ this.addWishlist } className={ classes.form }>
            <Typography paragraph className={ classes.titleForm }>Add New Wishlist</Typography>
            <Paper elevation={ 0 } className={ classes.formItem }>
              <TextField
                className={ classes.textFieldForm }
                placeholder="Wishlist Name"
                value={ this.state.name }
                variant={ 'outlined' }
                onChange={ this.handleChangeName }
                inputProps={ {className: classes.input} }
              />
              <Button type="submit" variant="contained" color="primary" className={ classes.formSubmit }>Add</Button>
            </Paper>
          </form>

          { bodyRows.length
            ? (
              <AppTable headerCells={headerCells} bodyRows={bodyRows}/>
            ) : (
              <Paper elevation={ 0 }>
                <Divider/>
                <Typography paragraph className={ classes.noItems }>
                  You do not have any lists yet, create one above to get started.
                </Typography>
              </Paper>
            )
          }
        </Grid>
      </Grid>
    );
  }
}

export const ConnectedWishlistPage = withStyles(styles)(WishListBase);
export default ConnectedWishlistPage;
