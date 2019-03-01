import { IMenuItemsDropdown } from '../../components/UI/DropdownControlled';
import { IWishlist } from '../../interfaces/wishlist';
import {IMenuItemSelect} from "src/shared/components/UI/SprykerSelect/types";

export const createWishListMenuVariants = (wishlists: Array<IWishlist> | null)
  : Array<IMenuItemSelect> | null => {
  if (!wishlists) {
    return null;
  }

  const variants = wishlists.map((wishlist: IWishlist) => ({name: wishlist.name, value: wishlist.id}));

  return variants;
};
