import * as React from 'react';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';

import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { createSliderWithTooltip, Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import { styles } from './styles';
import { TSprykerRangeSliderValue } from 'src/shared/components/UI/SprykerRangeSlider/types';


export interface SprykerRangeSliderProps extends WithStyles<typeof styles> {
  title: string;
  attributeName: string;
  handleChange: (name: string, {min, max}: TSprykerRangeSliderValue) => void;
  handleAfterChange: (value: number[]) => void;
  min: number;
  max: number;
  currentValue?: {min: number, max: number};
  valueFormatter?: Function | null;
  extraClassName?: string;
}


const WithTooltipRange = createSliderWithTooltip(Range);

export const SprykerRangeSliderBase: React.SFC<SprykerRangeSliderProps> = (props) => {
  const {
    classes,
    title,
    attributeName,
    handleChange,
    handleAfterChange,
    min,
    max,
    valueFormatter,
    extraClassName,
    currentValue,
  } = props;

  return (
    <Grid container className={ extraClassName ? `${classes.root} ${extraClassName}` : classes.root }>
      <Grid item xs={ 12 }>
        <ExpansionPanel
          classes={ {
            root: classes.panelRoot,
            expanded: classes.panelExpanded,
          } }
        >

          <ExpansionPanelSummary
            expandIcon={ <ExpandMoreIcon/> }
            classes={ {
              expandIcon: classes.icon,
              root: classes.panelSummaryRoot,
              content: classes.panelSummaryContent,
              expanded: classes.panelSummaryExpanded,
            } }
          >
            <Typography className={ classes.heading } component="div">{ title }</Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails
            classes={ {
              root: classes.panelDetailRoot,
            } }
          >
            <Grid container>
              <Grid item xs={ 12 } className={ classes.rangeOuter }>
                <WithTooltipRange
                  className={ classes.range }
                  value={ [currentValue.min, currentValue.max] }
                  min={ min }
                  max={ max }
                  defaultValue={ [min, max] }
                  onChange={ (value: number[]) => handleChange(attributeName, {min: value[0], max: value[1]}) }
                  onAfterChange={ handleAfterChange }
                  tipProps={ {
                    placement: 'top',
                  } }
                  railStyle={ {top: '10px', backgroundColor: '#111111', height: '2px'} }
                  dotStyle={ {} }
                  handleStyle={ {
                    border: '1px solid #111111',
                    width: '24px',
                    height: '24px',
                    backgroundColor: '#fbfbfb',
                    marginLeft: '-12px',
                  } }
                  activeDotStyle={ {} }
                  trackStyle={ [{top: '10px', backgroundColor: '#111111', height: '2px'}] }
                />
              </Grid>

              <Grid container alignItems="center">
                <Grid item xs={ 6 } className={ `${classes.value} ${classes.valueMin}` }>
                  { valueFormatter ? valueFormatter(currentValue.min) : currentValue.min }
                </Grid>

                <Grid item xs={ 6 } className={ `${classes.value} ${classes.valueMax}` }>
                  { valueFormatter ? valueFormatter(currentValue.max) : currentValue.max }
                </Grid>
              </Grid>

            </Grid>

          </ExpansionPanelDetails>

        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};

export const SprykerRangeSlider = withStyles(styles)(SprykerRangeSliderBase);
