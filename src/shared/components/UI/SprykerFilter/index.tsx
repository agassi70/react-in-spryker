import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { ChevronLeft } from '@material-ui/icons';

import { styles } from './styles';

export interface IMenuItemsDropdown {
  value: string | number;
  doc_count: string | number;
}

export interface SprykerFilterProps extends WithStyles<typeof styles> {
  attributeName?: string;
  handleChange?: Function;
  menuItems?: Array<IMenuItemsDropdown>;
  activeValues?: Array<string>;
  extraClassName?: string;
  isShowSelected?: boolean;
  handleClose?: Function;
  title?: string;
}

interface SprykerFilterState {
  isOpen: boolean;
}

export class SprykerFilter extends React.Component<SprykerFilterProps, SprykerFilterState> {

  public state: SprykerFilterState = {
    isOpen: false,
  };

  private handleChangeShowing = (event: React.ChangeEvent<{}>): void => {

    if (this.state.isOpen === true) {
      if (this.props.handleClose) {
        this.props.handleClose(event);
      }
    }

    this.setState(prev => ({isOpen: !prev.isOpen}));
  };

  private handleChangeValues = (event: any) => {
    this.props.handleChange(this.props.attributeName, event.target.value);
  };

  private handleDelete = (item: any) => () => {
    const values = [...this.props.activeValues].filter((val) => val !== item);
    this.props.handleChange(this.props.attributeName, values);
  };

  public render() {
    const {
      classes,
      attributeName,
      menuItems,
      activeValues,
      extraClassName,
      isShowSelected,
      title,
    } = this.props;

    return (
      <div className={ extraClassName ? `${classes.root} ${extraClassName}` : classes.root }>
        <FormControl className={ classes.formControl }>
          <Select
            multiple
            inputProps={ {
              name: attributeName,
              id: `${attributeName}-filter`,
            } }
            renderValue={ title ? () => title : () => attributeName ? attributeName.split('_').join(' ') : '' }
            displayEmpty
            open={ this.state.isOpen }
            onClose={ this.handleChangeShowing }
            onOpen={ this.handleChangeShowing }
            value={ activeValues }
            onChange={ this.handleChangeValues }
            disableUnderline={ true }
            IconComponent={ ChevronLeft }
            classes={ {
              icon: classes.icon,
              select: classes.input,
            } }
          >
            { menuItems.map((item) => (
              <MenuItem
                key={ item.value }
                value={ item.value }
                className={ classes.menuItem }
                disableGutters
                classes={ {
                  selected: classes.selected,
                } }
              >
                <span className={ classes.menuItemName }>{ item.value }</span>
                <span>({ item.doc_count })</span>
              </MenuItem>))
            }
          </Select>
          { isShowSelected
            ? activeValues.map(item => (
              <Chip
                key={ item }
                label={ item }
                variant="outlined"
                onDelete={ this.handleDelete(item) }
                className={ classes.chip }
              />))
            : null
          }
        </FormControl>
      </div>
    );
  }
}

export const SprykerFilterElement = withStyles(styles)(SprykerFilter);
