import * as React from 'react';
import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from './styles';
import { TActiveFilters, TActiveRangeFilters } from 'src/shared/components/Pages/SearchPage/types';
import {ILocalizedNamesMap, RangeFacets} from 'src/shared/interfaces/searchPageData';


export interface IActiveFiltersListProps extends WithStyles<typeof styles> {
  activeValuesFilters: TActiveFilters;
  activeValuesRanges: TActiveRangeFilters;
  rangeFilters?: Array<RangeFacets>;
  resetHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
  filtersLocalizedNames: ILocalizedNamesMap | null;
  rangesLocalizedNames: ILocalizedNamesMap | null;
}
