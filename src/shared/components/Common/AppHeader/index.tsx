import * as React from 'react';
import { Sticky, StickyChildArgs } from 'react-sticky';
import debounce from 'lodash/debounce';
import { withRouter } from 'react-router';
import withStyles from '@material-ui/core/styles/withStyles';
import { merge } from 'src/shared/helpers/common';
import { pathCheckoutPage } from 'src/shared/routes/contentRoutes';
import CatalogSearch from '../CatalogSearch';
import { Preloader } from '../Preloader';
import { Logo } from './parts/logo';
import { MainNav } from './parts/navMain';
import { AddNav } from './parts/navAdditional';
import { AppHeaderProps as Props, AppHeaderState as State } from './types';
import { styles } from './styles';

@(withRouter as any)
export class AppHeaderComponent extends React.PureComponent<Props, State> {
  public state: State = {
    showSearch: true,
    stickyTriggerOffset: 0,
    pageWidth: 0,
    pageHeight: 0,
  };

  // Component variables

  private stickyTriggerRef: React.RefObject<HTMLDivElement> = React.createRef();

  // Component lifecycle methods

  public componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
    window.addEventListener('scroll', this.onWindowScroll);
  }

  public componentDidUpdate() {
    this.onWindowResize();
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
    window.removeEventListener('scroll', this.onWindowScroll);
    this.stickyTriggerRef = null;
  }

  // Event handlers

  private onWindowResize = debounce(() => {
    this.setTriggerOffset();
    this.updateWindowDimensions();
  }, 0.3);
  private onWindowScroll = debounce(() => {
    const {showSearch, stickyTriggerOffset} = this.state;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    if (showSearch && scrollPosition > stickyTriggerOffset) {
      this.setState(() => ({showSearch: false}));
    }
  }, 0.3);

  private updateWindowDimensions = () => {
    this.setState({ pageWidth: window.innerWidth, pageHeight: window.innerHeight });
  };

  // Action handlers

  private setTriggerOffset = () => {
    const stickyTriggerOffset = this.stickyTriggerRef.current.offsetTop;

    this.setState(() => ({stickyTriggerOffset}));
  };

  private handleSticky = (stickyState: StickyChildArgs) => {
    const {stickyTriggerOffset} = this.state;
    const scrollOffset = stickyState.distanceFromTop * -1;

    this.setState(() => ({showSearch: scrollOffset < stickyTriggerOffset}));
  };

  private handleSearch = () => this.setState(({showSearch}) => ({showSearch: !showSearch}));

  public render() {
    const {classes, isLoading, isMobileNavOpened, onMobileNavToggle} = this.props;
    const {stickyTriggerOffset, showSearch} = this.state;
    return (
      <Sticky topOffset={ stickyTriggerOffset }>
        { (stickyState: StickyChildArgs) => {
          const {style, isSticky, wasSticky} = stickyState;

          if (isSticky !== wasSticky) {
            this.handleSticky(stickyState);
          }

          return (
            <div
              style={ style }
              className={ classes.headerStickyContainer }
            >
              <div
                className={ classes.header }
                style={ {
                  transform: `translate3d(0, -${showSearch ? 0 : stickyTriggerOffset}px, 0)`,
                  transition: isSticky && wasSticky ? 'transform .3s ease-in-out' : 'none',
                } }
              >
                <div className={ classes.headerTop }>
                  <div className={ merge([classes.headerContainer, classes.headerTopContainer]) }>
                    <div className={ classes.logoContainer }>
                      <Logo/>
                    </div>

                    <div className={ classes.headerSearchContainer }>
                      <CatalogSearch id={'2'}/>
                    </div>
                  </div>
                </div>
                <div className={ classes.headerBottom } ref={ this.stickyTriggerRef }>
                  <div className={ classes.headerContainer }>
                    <div
                      className={ merge([classes.hamburger, isMobileNavOpened ? classes.hamburgerOpened : '']) }
                      onClick={ onMobileNavToggle }
                    >
                      <span/>
                      <span/>
                    </div>

                    {this.props.location.pathname.endsWith(pathCheckoutPage)
                      ? <div className={ classes.checkout }>Checkout</div>
                      : <MainNav mobileNavState={ isMobileNavOpened }/>
                    }

                    <AddNav
                      showSearch={ showSearch }
                      handleSearch={ this.handleSearch }
                      isSticky={isSticky}
                      pageWidth={this.state.pageWidth}
                      pageHeight={this.state.pageHeight}
                    />
                  </div>
                  { isLoading ? <Preloader extraClasses={ classes.preloader }/> : null }
                </div>
              </div>
            </div>
          );
        } }
      </Sticky>
    );
  }
}

export const AppHeader = withStyles(styles)(AppHeaderComponent);
