import { WithStyles } from '@material-ui/core/styles/withStyles';
import { ISuperAttributeData } from 'src/shared/helpers/product/superAttributes';
import { styles } from './styles';

export interface SuperAttributeItemProps extends WithStyles<typeof styles> {
  attributeItemData: ISuperAttributeData;
  onSelect(attributeValue: string): void;
  isSelected: boolean;
}
