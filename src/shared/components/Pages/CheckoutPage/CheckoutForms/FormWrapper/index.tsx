import * as React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { styles } from './styles';
import {
  IFormWrapperProps,
  IFormWrapperState
} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/FormWrapper/types";


export class FormWrapperBase extends React.Component<IFormWrapperProps, IFormWrapperState> {

  public state: IFormWrapperState = {
    expanded: false,
  };

  public componentDidUpdate = (prevProps: IFormWrapperProps, prevState: IFormWrapperState) => {
    if (!prevProps.isDisabled && this.props.isDisabled) {
      this.setState((prevState: IFormWrapperState) => {
        return {
          expanded: false,
        };
      });
    }
  }

  public handleShowing = (event: React.MouseEvent<{}>): void => {
    if (this.props.isDisabled) {
      return;
    }
    this.setState((prevState: IFormWrapperState) => {
      return {
        expanded: !prevState.expanded,
      };
    });
  };

  public render(): JSX.Element {
    const {classes, title, isDisabled}  = this.props;
    return (
      <Grid container className={ classes.root }>
        <Grid item xs={12}>

          <ExpansionPanel
            disabled={isDisabled}
            classes={{
              root: classes.panelRoot,
              expanded: classes.panelExpanded,
            }}
            expanded={this.state.expanded}
          >
            <ExpansionPanelSummary
              onClick={this.handleShowing}
              expandIcon={<ExpandMoreIcon />}
              classes={{
                expandIcon: classes.icon,
                root: classes.panelSummaryRoot,
                content: classes.panelSummaryContent,
                expanded: classes.panelSummaryExpanded,
              }}
            >
              <Typography className={classes.title} component="h3" >{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              classes={{root: classes.panelDetailRoot}}
            >
              <Grid container >
                <Grid item xs={12} className={classes.formOuter}>
                  {this.props.children}
                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </Grid>
      </Grid>
    );
  }
}

export const FormWrapper = withStyles(styles)(FormWrapperBase);
