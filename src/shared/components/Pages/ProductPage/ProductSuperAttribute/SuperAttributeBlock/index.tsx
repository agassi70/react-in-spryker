import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { SuperAttributeItem } from '../SuperAttributeItem';

import { SuperAttributeBlockProps as Props, SuperAttributeBlockState as State } from './types';
import { styles } from './styles';
import {ProductBlockTitleAttribute} from "src/shared/constants/product/index";

export class SuperAttributeBlockComponent extends React.PureComponent<Props, State> {
  public state: State = {
    selectedItemValue: '',
  };

  private selectAttribute = (value: string) => {
    const {onValueChanged, attributeData: {name}} = this.props;

    onValueChanged({name, value});
    this.setState(() => ({selectedItemValue: value}));
  };

  public render() {
    const {classes, attributeData} = this.props;
    const {selectedItemValue} = this.state;


    return (
      <div className={ classes.attributeBlock }>
        <h4 className={ classes.attributeTitle }>{`${ProductBlockTitleAttribute} ${attributeData.nameToShow}:`}</h4>

        <div className={ classes.attributesList }>
          { attributeData.data.map(attribute => (
            <SuperAttributeItem
              key={ attribute.value.length > 0 ? attribute.value : attribute.name }
              attributeItemData={ attribute }
              onSelect={ this.selectAttribute }
              isSelected={
                attribute.value.length > 0
                  ? attribute.value === selectedItemValue
                  : attribute.name === selectedItemValue
              }
            />
          )) }
        </div>
      </div>
    );
  }
}

export const SuperAttributeBlock = withStyles(styles)(SuperAttributeBlockComponent);
