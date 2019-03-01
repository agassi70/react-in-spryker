import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ISuperAttribute } from 'src/shared/helpers/product';
import { styles } from './styles';

export interface SuperAttributeBlockProps extends WithStyles<typeof styles> {
  attributeData: ISuperAttribute;
  onValueChanged(selectedData: {name: string, value: string}): void;
}

export interface SuperAttributeBlockState {
  selectedItemValue: string;
}
