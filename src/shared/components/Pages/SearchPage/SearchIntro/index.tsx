import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import { styles } from './styles';
import { ISearchIntroProps } from 'src/shared/components/Pages/SearchPage/SearchIntro/types';


export const pageIntroText = 'Did you mean ';

export const SearchIntroBase: React.SFC<ISearchIntroProps> = (props) => {
  const {className, spellingSuggestion} = props;

  if (!spellingSuggestion) {
    return null;
  }
  return (
    <React.Fragment>
      { pageIntroText }
      <span className={ className }>{ spellingSuggestion }</span> ?
    </React.Fragment>
  );

};

export const SearchIntro = withStyles(styles)(SearchIntroBase);
