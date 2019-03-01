import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';

import { LangProps as Props, LangState as State, language } from './types';
import { styles } from './styles';

const availableLanguages: language[] = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Deutsch',
    code: 'de',
  },
];

export class LangComponent extends React.PureComponent<Props, State> {
  public state: State = {
    anchorEl: null,
    selectedLang: {
      name: 'English',
      code: 'en',
    },
  };

  private openLang = ({currentTarget}: React.MouseEvent<HTMLElement>) => {
    this.setState(() => ({anchorEl: currentTarget}));
  };
  private closeLang = () => this.setState(() => ({anchorEl: null}));
  private selectLang = (lang: language) => () => this.setState(() => ({selectedLang: lang, anchorEl: null}));

  public render() {
    const {anchorEl, selectedLang} = this.state;
    const {classes} = this.props;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          className={ classes.langBtn }
          size="small"
          aria-owns={ open ? 'lang-menu' : null }
          aria-haspopup="true"
          onClick={ this.openLang }
        >
          { selectedLang.name }
          { Boolean(anchorEl) ? <KeyboardArrowUp/> : <KeyboardArrowDown/> }
        </Button>

        <Menu
          id="lang-menu"
          anchorEl={ anchorEl }
          open={ open }
          onClose={ this.closeLang }
        >
          { availableLanguages.map(language => (
            <MenuItem
              key={ language.code }
              selected={ language.code === selectedLang.code }
              onClick={ this.selectLang(language) }
            >
              { language.name }
            </MenuItem>
          )) }
        </Menu>
      </div>
    );
  }
}

export const Lang = withStyles(styles)(LangComponent);
