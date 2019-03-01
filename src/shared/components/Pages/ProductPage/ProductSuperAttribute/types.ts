import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ISuperAttribute } from 'src/shared/helpers/product';
import { styles } from './styles';

export interface ProductSuperAttributeProps extends WithStyles<typeof styles> {
  productData: ISuperAttribute[] | null;
  onChange(selectedData: {name: string, value: string}): void;
}

export interface ProductSuperAttributeState {
  selectedValues: {
    [name: string]: string;
  } | null;
}
