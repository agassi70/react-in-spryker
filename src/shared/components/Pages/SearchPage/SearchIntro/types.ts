import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { TSpellingSuggestion } from 'src/shared/interfaces/searchPageData';


export interface ISearchIntroProps extends WithStyles<typeof styles> {
  className: string;
  spellingSuggestion: TSpellingSuggestion | null;
}
