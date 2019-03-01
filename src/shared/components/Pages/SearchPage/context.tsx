import * as React from 'react';
import { IFilterItemToDelete, TCategoryId } from 'src/shared/components/Pages/SearchPage/types';

type TSearchPageContext = {
  selectCategoryHandler: (categoryId: TCategoryId) => any;
  deleteActiveFilterHandler: (itemToDelete: IFilterItemToDelete) => any;
};

export const SearchPageContext = React.createContext<TSearchPageContext>({
  selectCategoryHandler: (/*categoryId: TCategoryId*/) => {
    throw new Error('selectCategoryHandler() not implemented');
  },
  deleteActiveFilterHandler: (/*itemToDelete: IFilterItemToDelete*/) => {
    throw new Error('deleteActiveFilterHandler() not implemented');
  },
});
