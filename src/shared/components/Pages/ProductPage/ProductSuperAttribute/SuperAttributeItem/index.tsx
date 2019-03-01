import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

import { SuperAttributeItemProps as Props } from './types';
import { styles } from './styles';

export const SuperAttributeItemComponent: React.SFC<Props> = ({classes, attributeItemData, isSelected, onSelect}) => {
  const onSelectValue = () => {
    const {value, name} = attributeItemData;

    onSelect(value.length > 0 ? value : name);
  };

  return (
    <Button
      variant="outlined"
      color={ isSelected ? 'primary' : null }
      className={ `${classes.button} ${isSelected ? classes.buttonSelected : ''}` }
      onClick={ onSelectValue }
    >
      { attributeItemData.name }
    </Button>
  );
};

export const SuperAttributeItem = withStyles(styles)(SuperAttributeItemComponent);
