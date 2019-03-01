import {INavLinkData} from "src/shared/interfaces/navLinks/index";
import {
  pathCustomerAddressesPage,
  pathCustomerProfilePage,
  pathOrderHistoryPage,
  pathWishListsPage
} from "src/shared/routes/contentRoutes";


export const NavLinkTitleProfile = "Profile";
export const NavLinkTitleAddresses = "Addresses";
export const NavLinkTitleOrderHistory = "Order History";
export const NavLinkTitleWishlist = "Wishlist";

export const customerProfileNavLinks: Array<INavLinkData> = [
  {path: pathCustomerProfilePage, title: NavLinkTitleProfile},
  {path: pathCustomerAddressesPage, title: NavLinkTitleAddresses},
  {path: pathOrderHistoryPage, title: NavLinkTitleOrderHistory},
  {path: pathWishListsPage, title: NavLinkTitleWishlist},
];
