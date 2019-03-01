// tslint:disable:max-file-line-count

import * as React from 'react';
import {NavLink} from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import {getCategoryIdByName} from "src/shared/helpers/categories/index";
import {pathCategoryPageBase, pathProductPageBase, pathSearchPage} from 'src/shared/routes/contentRoutes';
import {ClickEvent, InputChangeEvent} from 'src/shared/interfaces/common/react';
import {IProductCard} from 'src/shared/interfaces/product';
import {AppPrice} from '../AppPrice';
import {SquareImage} from '../SquareImage';
import {styles} from './styles';
import {CatalogProps as Props, CatalogState as State} from './types';
import {connect} from './connect';

export const buttonTitle = 'Search';

@connect
export class CatalogSearchBase extends React.Component<Props, State> {
  private containerRef: React.RefObject<HTMLDivElement> = React.createRef();
  private designImgWidth: number = 0.23;
  public timer: number | null;

  public state: State = {
    value: '',
    heightListItem: 100,
  };

  public componentDidMount() {
    window.addEventListener('resize', this.setListItemHeight);
    this.setListItemHeight();
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.setListItemHeight);
  }

  private setListItemHeight = (): void => {
    if (this.containerRef && this.containerRef.current) {
      this.setState({heightListItem: this.containerRef.current.offsetWidth * this.designImgWidth});
    }
  };

  // Action handlers

  private getSuggestionValue = (suggestion: IProductCard): string => suggestion.abstractName;

  private handleSuggestionsFetchRequested = ({value}: {value: string}) => {
    const {value: currentValue} = this.state;

    if (!this.props.isLoading && value !== currentValue) {
      clearTimeout(this.timer);

      this.timer = window.setTimeout(() => {
        if (this.state.value === value) {
          this.props.sendSuggestionAction(value);
        }
      }, 800);
    }
  };

  private handleSuggestionsClearRequested = (): void => {
    // if (!this.props.isLoading) {
    //   this.props.clearSuggestions(this.state.value);
    // }
  };

  private clearSuggestion = (value: string): void => {
    this.props.clearSuggestions(value);
    this.setState({value: ''});
  };

  private handleChange = (event: InputChangeEvent, {newValue}: {newValue: string}): void => {
    if (newValue.trim().length < 4) {
      this.props.clearSuggestions(newValue);
    }

    if (!this.props.isLoading) {
      this.setState({
        value: newValue,
      });
    }
  };

  private handleFullSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const {value} = this.state;
    if (!this.props.isLoading && value.length > 2) {
      this.props.sendSearchAction({q: value, currency: this.props.currency});

      this.props.push(pathSearchPage);
      this.clearSuggestion(value);
    }
  };

  private handleSearchCompletion = (e: ClickEvent): void => {
    const query = e.currentTarget.dataset.query.trim();
    this.props.sendSearchAction({q: query, currency: this.props.currency});
    this.clearSuggestion(query);
  };

  /* Render Helpers */

  private shouldRenderSuggestions = (value: string): boolean => value && value.trim().length > 2;

  private renderInputComponent = (inputProps: any): JSX.Element => {
    const {classes, ref, ...other} = inputProps;
    let suggestQuery: string = this.state.value;

    if (this.props.completion.length) {
      this.props.completion.some((data: string) => {
        if (data.startsWith(suggestQuery.toLowerCase())) {
          suggestQuery = data;
          return true;
        }

        return false;
      });
    }
    const matches = match(suggestQuery, this.state.value);
    const parts = parse(suggestQuery, matches);

    return (
      <form action="/" method="GET" onSubmit={this.handleFullSearch} className="suggestForm">
        <div className={classes.completionInput}>
          {parts.length && matches.length
            ? parts.map((part, index: number) => {
                return part.highlight ? (
                  <span key={String(index)} className={classes.hiddenPart}>
                    {part.text}
                  </span>
                ) : (
                  <strong key={String(index)} className={classes.visiblePart}>
                    {part.text}
                  </strong>
                );
              })
            : null}
        </div>
        <TextField
          variant="outlined"
          fullWidth
          InputProps={{
            inputRef: node => ref(node),
            classes: {
              root: classes.inputRoot,
              formControl: classes.formControl,
              notchedOutline: classes.inputOutline,
              input: classes.input,
            },
            startAdornment: (
              <InputAdornment position="start" classes={{root: classes.inputIconContainer}}>
                <IconButton aria-label="Search" type="submit">
                  <SearchIcon classes={{root: classes.inputIcon}} />
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...other}
        />
      </form>
    );
  };

  private renderSuggestion = (
    suggestion: IProductCard,
    {query, isHighlighted}: {query: string; isHighlighted: boolean},
  ) => {
    const matches = match(suggestion.abstractName, query);
    const parts = parse(suggestion.abstractName, matches);
    const {classes} = this.props;

    return (
      <NavLink
        to={`${pathProductPageBase}/${suggestion.abstractSku}`}
        style={{textDecoration: 'none'}}
        onClick={() => this.clearSuggestion(suggestion.abstractName)}
      >
        <MenuItem selected={isHighlighted} component="div" className={classes.menuItem}>
          <SquareImage
            image={suggestion.images.length ? suggestion.images[0].externalUrlSmall : ''}
            size={this.state.heightListItem}
            alt={suggestion.abstractName}
          />

          <div className={classes.description}>
            <span className={classes.itemName}>
              {parts.map((part, index: number) => {
                return part.highlight ? (
                  <span key={String(index)} style={{fontWeight: 500}}>
                    {part.text}
                  </span>
                ) : (
                  <strong key={String(index)} style={{fontWeight: 300}}>
                    {part.text}
                  </strong>
                );
              })}
            </span>

            <AppPrice
              value={
                suggestion.prices && suggestion.prices.length
                  ? suggestion.prices[0].grossAmount
                  : suggestion.price
              }
              priceType={
                suggestion.prices && suggestion.prices.length
                  ? suggestion.prices[0].priceTypeName
                  : ''
              }
              extraClassName={classes.mainPrice}
            />

            {suggestion.prices && suggestion.prices.length > 1 ? (
              <AppPrice
                value={suggestion.prices[1].grossAmount}
                priceType={suggestion.prices[1].priceTypeName}
                extraClassName={classes.oldPrice}
              />
            ) : null}
          </div>
        </MenuItem>
      </NavLink>
    );
  };

  private renderSuggestionsContainer = (options: any): JSX.Element => {
    const {categories, completion, suggestions, categoriesTree, classes} = this.props;
    let suggestQuery: string = options.query.trim();

    if (completion.length) {
      completion.some((data: string) => {
        if (data.startsWith(options.query.trim().toLowerCase())) {
          suggestQuery = data;
          return true;
        }

        return false;
      });
    }

    const completions: JSX.Element[] = [];
    const renderedCategories: JSX.Element[] = [];

    for (let i = 0; i < 4; i++) {
      if (completion[i]) {
        completions.push(
          <NavLink
            to={pathSearchPage}
            data-query={completion[i]}
            key={`completion-${i}`}
            className={classes.completion}
            onClick={this.handleSearchCompletion}
          >
            <SearchIcon />
            <span>{completion[i]}</span>
          </NavLink>
        );
      }
    }

    for (let i = 0; i < 4; i++) {
      if (categories[i]) {
        const categoryNodeId = getCategoryIdByName(categories[i].name, categoriesTree);
        const path = categoryNodeId ? `${pathCategoryPageBase}/${categoryNodeId}` : pathSearchPage;
        renderedCategories.push(
          <NavLink to={path}
                   data-name={categories[i].name}
                   data-nodeid={categoryNodeId}
                   key={`category-${categoryNodeId}`}
                   className={classes.completion}
                   onClick={() => this.clearSuggestion(categories[i].name)}
          >
            <div className={classes.completion}>{categories[i].name}</div>
          </NavLink>,
        );
      }
    }

    if (!suggestions.length) {
      return (
        <div {...options.containerProps}>
          <Paper square>
            <Typography paragraph variant="headline">
              Nothing found...
            </Typography>
          </Paper>
        </div>
      );
    }

    return (
      <div {...options.containerProps}>
        <div className={classes.insideContWrapper}>
          <div>{completions}</div>
          <Typography component="h4" className={classes.categoryTitle}>
            Categories
          </Typography>
          <Divider />
          <div className={classes.marginTop}>{renderedCategories}</div>
          <Typography component="h4" className={classes.categoryTitle}>
            Suggested Products
          </Typography>

          <Divider />

          <div>{options.children}</div>

          <NavLink
            to={pathSearchPage}
            data-query={options.query}
            onClick={this.handleSearchCompletion}
            className={classes.linkAll}
          >
            See all suggested products
          </NavLink>
        </div>
      </div>
    );
  };

  /* RENDER */

  public render() {
    const {classes, suggestions, /*isLoading*/ id} = this.props;

    const autosuggestProps = {
      id,
      suggestions,
      renderInputComponent: this.renderInputComponent,
      onSuggestionsFetchRequested: this.handleSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.handleSuggestionsClearRequested,
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
      renderSuggestionsContainer: this.renderSuggestionsContainer,
      shouldRenderSuggestions: this.shouldRenderSuggestions,
    };

    return (
      <div className={classes.root} id="CatalogSearch" ref={this.containerRef}>
        <Autosuggest
          {...autosuggestProps}
          inputProps={{
            classes,
            placeholder: 'What are you looking for?',
            value: this.state.value,
            onChange: this.handleChange,
            type: 'text',
          }}
          theme={{
            container: classes.container,
            suggestionsContainer: classes.suggestionsContainer,
            suggestionsContainerOpen: classes.suggestionsContainerOpen,
            suggestionsList: classes.suggestionsList,
            suggestion: classes.suggestion,
          }}
        />
        {this.props.isLoading ? (
          <div className={classes.pendingProgress}>
            <CircularProgress size={34} color="primary" />
          </div>
        ) : null}
      </div>
    );
  }
}

const CatalogSearchComponent = withStyles(styles)(CatalogSearchBase);

export default CatalogSearchComponent;
