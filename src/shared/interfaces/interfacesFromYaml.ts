export interface AbstractProductsRestAttributes {
  sku: string;
  name: string;
  description: string;
  attributes: object;
  superAttributesDefinition: Array<string>;
  attributeMap: object;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
}

export interface ConcreteProductsRestAttributes {
  sku: string;
  name: string;
  description: string;
  attributes: object;
  superAttributesDefinition: Array<string>;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
}

export interface RestAccessTokensResponseAttributes {
  tokenType: string;
  expiresIn: string;
  accessToken: string;
  refreshToken: string;
}

export interface RestAccessTokensRequestAttributes {
  username: string;
  password: string;
}

export interface RestCatalogSearchAttributes {
  currency: string;
  sort: RestCatalogSearchSortAttributes;
  pagination: RestCatalogSearchPaginationAttributes;
  products: Array<RestCatalogSearchProductsAttributes>;
  valueFacets: Array<RestFacetSearchResultAttributes>;
  rangeFacets: Array<RestRangeSearchResultAttributes>;
  spellingSuggestion: string;
}

export interface RestFacetSearchResultAttributes {
  name: string;
  doc_count: number;
  values: Array<string>;
  active_value: string;
}

export interface RestRangeSearchResultAttributes {
  name: string;
  min: number;
  max: number;
  active_min: number;
  active_max: number;
  doc_count: number;
}

export interface RestCatalogSearchPaginationAttributes {
  numFound: number;
  currentPage: number;
  maxPage: number;
  currentItemsPerPage: number;
}

export interface RestCatalogSearchProductImageAttributes {
  externalUrlSmall: string;
  externalUrlLarge: string;
}

export interface RestCatalogSearchProductsAttributes {
  images: Array<RestCatalogSearchProductImageAttributes>;
  price: number;
  abstractName: string;
  prices: RestProductPrice;
  abstractSku: string;
}

export interface RestCatalogSearchSortAttributes {
  sortParamNames: Array<string>;
  currentSortParam: string;
  currentSortOrder: string;
}

export interface RestCatalogSearchSuggestionsAttributes {
  currency: string;
  completion: Array<string>;
  products: Array<{ abstract_sku: string, abstract_name: string, price: number, images: { external_url_small: string, external_url_large: string, }, }>;
  categories: Array<{ name: string, }>;
  cmsPages: Array<object>;
}

export interface RestErrorMessage {
  errors: Array<RestErrorMessageAttibutes>;
}

export interface RestErrorMessageAttibutes {
  status: number;
  code: string;
  detail: string;
}

export interface RestRefreshTokensAttributes {
  expiresIn: string;
  accessToken: string;
  refreshToken: string;
}

export interface RestWishlistItemsAttributes {
  sku: string;
}

export interface RestWishlistsAttributes {
  name: string;
  numberOfItems: number;
  createdAt: string;
  updatedAt: string;
}

export interface RestAddressAttributes {
  salutation: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  address3: string;
  zipCode: string;
  city: string;
  country: string;
  company: string;
  phone: string;
  isDefaultShipping: boolean;
  isDefaultBilling: boolean;
  iso2Code: string;
}

export interface RestCustomersAttributes {
  firstName: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  salutation: string;
  createdAt: string;
  updatedAt: string;
  registered: string;
}

export interface RestConcreteProductAvailabilityAttributes {
  availability: boolean;
  quantity: number;
  isNeverOutOfStock: boolean;
}

export interface RestAbstractProductAvailabilityAttributes {
  availability: boolean;
  quantity: number;
}

export interface RestProductImageSetsAttributes {
  name: string;
  images: RestImagesAttributes;
}

export interface RestImagesAttributes {
  externalUrlLarge: string;
  externalUrlSmall: string;
}

export interface RestProductPricesAttributes {
  prices: Array<RestProductPrice>;
}

export interface RestProductPrice {
  priceTypeName: string;
  grossAmount: number;
}

export interface RestCartsRequest {
  data: RestCartsRequestData;
}

export interface RestCartsRequestData {
  type: string;
  attributes: RestCartsRequestAttributes;
}

export interface RestCartsAttributes {
  priceMode: string;
  currency: string;
  store: string;
  discounts: Array<RestCartsDiscounts>;
  totals: RestCartsTotals;
}

export interface RestCartsRequestAttributes {
  priceMode: string;
  currency: string;
  store: string;
}

export interface RestCartsDiscounts {
  displayName: string;
  amount: number;
  code: string;
}

export interface RestCartsTotals {
  expenseTotal: number;
  discountTotal: number;
  taxTotal: number;
  subtotal: number;
  grandTotal: number;
}

export interface RestCartItemsAttributes {
  sku: string;
  quantity: number;
  groupKey: string;
  amount: number;
  calculations: RestCartItemCalculations;
}

export interface RestCartItemCalculations {
  unitPrice: number;
  sumPrice: number;
  taxRate: number;
  unitNetPrice: number;
  sumNetPrice: number;
  unitGrossPrice: number;
  sumGrossPrice: number;
  unitTaxAmountFullAggregation: number;
  sumTaxAmountFullAggregation: number;
  sumSubtotalAggregation: number;
  unitSubtotalAggregation: number;
  unitProductOptionPriceAggregation: number;
  sumProductOptionPriceAggregation: number;
  unitDiscountAmountAggregation: number;
  sumDiscountAmountAggregation: number;
  unitDiscountAmountFullAggregation: number;
  sumDiscountAmountFullAggregation: number;
  unitPriceToPayAggregation: number;
  sumPriceToPayAggregation: number;
}

export interface RestCategoryNodesAttributes {
  name: string;
  metaTitle: string;
  metaKeywords: string;
  metaDescription: string;
  isActive: boolean;
  order: number;
  children: Array<object>;
  parents: Array<object>;
}

export interface RestCategoryTreesAttributes {
  nodeId: number;
  order: number;
  name: string;
  children: Array<object>;
}

export interface StoresRestAttributes {
  timeZone: string;
  defaultCurrency: string;
  currencies: Array<StoreCurrencyRestAttributes>;
  locales: Array<StoreLocaleRestAttributes>;
  countries: Array<StoreCountryRestAttributes>;
}

export interface StoreCurrencyRestAttributes {
  code: string;
  name: string;
}

export interface StoreLocaleRestAttributes {
  code: string;
  name: string;
}

export interface StoreRegionRestAttributes {
  iso2Code: string;
  name: string;
}

export interface StoreCountryRestAttributes {
  iso2Code: string;
  iso3Code: string;
  name: string;
  postalCodeMandatory: boolean;
  postalCodeRegex: string;
  regions: StoreRegionRestAttributes;
}

export interface RestTaxSetAttributes {
  name: string;
  taxRates: Array<RestTaxRate>;
}

export interface RestTaxRate {
  name: string;
  rate: string;
  country: string;
}

export interface RestWishlistsRequestAttributes {
  name: string;
}

export interface RestWishlistItemAttributes {
  sku: string;
}

export interface RestCustomersInfoAttributes {
  firstName: string;
  lastName: string;
  salutation: string;
  email: string;
}

export interface RestCustomersRegisterAttributes {
  salutation: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  acceptedTerms: boolean;
}

export interface RestCustomerPasswordAttributes {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export interface RestRefreshTokenRequestAttributes {
  refreshToken: string;
}

export interface RestCustomerForgottenPasswordAttributes {
  email: string;
}

export interface RestCustomerRestorePasswordAttributes {
  restorePasswordKey: string;
  password: string;
  confirmPassword: string;
}

export interface RestAbstractProductAvailabilityResponse {
  data: RestAbstractProductAvailabilityResponseData;
}

export interface RestAbstractProductAvailabilityResponseData {
  type: string;
  id: string;
  attributes: RestAbstractProductAvailabilityAttributes;
  links: RestLinks;
}

export interface RestConcreteProductAvailabilityResponse {
  data: RestConcreteProductAvailabilityResponseData;
}

export interface RestConcreteProductAvailabilityResponseData {
  type: string;
  id: string;
  attributes: RestConcreteProductAvailabilityAttributes;
  links: RestLinks;
}

export interface RestProductImageSetsResponse {
  data: RestProductImageSetsResponseData;
}

export interface RestProductImageSetsResponseData {
  type: string;
  id: string;
  attributes: RestProductImageSetsAttributesList;
  links: RestLinks;
}

export interface RestProductImageSetsAttributesList {
  imageSets: Array<RestProductImageSetsAttributes>;
}

export interface RestProductPricesResponse {
  data: RestProductPricesResponseData;
}

export interface RestProductPricesResponseData {
  type: string;
  id: string;
  attributes: RestProductPricesAttributes;
  links: RestLinks;
}

export interface RestAbstractProductsResponse {
  data: RestAbstractProductsResponseData;
}

export interface RestAbstractProductsResponseData {
  type: string;
  id: string;
  attributes: AbstractProductsRestAttributes;
  links: RestLinks;
}

export interface RestConcreteProductsResponse {
  data: RestConcreteProductsResponseData;
}

export interface RestConcreteProductsResponseData {
  type: string;
  id: string;
  attributes: ConcreteProductsRestAttributes;
  links: RestLinks;
}

export interface RestAccessTokenRequest {
  data: RestAccessTokenRequestData;
}

export interface RestAccessTokenRequestData {
  type: string;
  attributes: RestAccessTokensRequestAttributes;
  links: RestLinks;
}

export interface RestAccessTokenResponse {
  data: RestAccessTokenResponseData;
}

export interface RestAccessTokenResponseData {
  type: string;
  id: string;
  attributes: RestAccessTokensResponseAttributes;
}

export interface RestAddressesResponse {
  data: RestAddressesResponseData;
}

export interface RestAddressesListResponse {
  data: Array<RestAddressesResponseData>;
}

export interface RestAddressesResponseData {
  type: string;
  id: string;
  attributes: RestAddressAttributes;
  links: RestLinks;
}

export interface RestAddressesRequest {
  data: RestAddressesRequestData;
}

export interface RestAddressesRequestData {
  type: string;
  attributes: RestAddressAttributes;
}

export interface RestCartsResponse {
  data: RestCartsResponseData;
}

export interface RestCartsListResponse {
  data: Array<RestCartsResponseData>;
}

export interface RestCartsResponseData {
  type: string;
  id: string;
  attributes: RestCartsAttributes;
  links: RestLinks;
  relationships: RestCartsRelationships;
}

export interface RestCartsRelationships {
  items: Array<RestCartsItemsRelationshipData>;
}

export interface RestCartsItemsRelationshipData {
  id: number;
  type: string;
}

export interface RestCatalogSearchResponse {
  data: RestCatalogSearchResponseData;
}

export interface RestCatalogSearchResponseData {
  type: string;
  id: string;
  attributes: RestCatalogSearchAttributes;
  links: RestLinks;
}

export interface RestCatalogSearchSuggestionsResponse {
  data: RestCatalogSearchuggestionsResponseData;
}

export interface RestCatalogSearchuggestionsResponseData {
  type: string;
  id: string;
  attributes: RestCatalogSearchSuggestionsAttributes;
  links: RestLinks;
}

export interface RestCategoryNodeResponse {
  data: RestCategoryNodeResponseData;
}

export interface RestCategoryNodeResponseData {
  type: string;
  id: string;
  attributes: RestCategoryNodesAttributes;
  links: RestLinks;
}

export interface RestCategoryTreesResponse {
  data: RestCategoryTreesResponseData;
}

export interface RestCategoryTreesResponseData {
  type: string;
  id: string;
  attributes: RestCategoryTreesAttributes;
  links: RestLinks;
}

export interface RestCustomersResponse {
  data: RestCustomersResponseData;
}

export interface RestCustomersResponseData {
  type: string;
  id: string;
  attributes: RestCustomersAttributes;
  links: RestLinks;
}

export interface RestCustomersRegisterResponse {
  data: RestCustomersRegisterResponseData;
}

export interface RestCustomersRegisterResponseData {
  type: string;
  id: string;
  attributes: RestCustomersRegisterAttributes;
}

export interface RestCustomersRegisterRequestData {
  type: string;
  attributes: RestCustomersRegisterAttributes;
  links: RestLinks;
}

export interface RestCustomersRequest {
  data: RestCustomersRequestData;
}

export interface RestCustomersRequestData {
  type: string;
  id: string;
  attributes: RestCustomersAttributes;
  links: RestLinks;
}

export interface RestPostCartItemsRequest {
  data: RestPostCartItemsRequestData;
}

export interface RestPostCartItemsRequestData {
  type: string;
  attributes: RestPostCartItemsAttributes;
}

export interface RestPostCartItemsAttributes {
  sku: string;
  quantity: number;
}

export interface RestRefreshTokenRequest {
  data: RestRefreshTokenRequestData;
}

export interface RestRefreshTokenRequestData {
  type: string;
  attributes: RestRefreshTokenRequestAttributes;
  links: RestLinks;
}

export interface RestStoresResponse {
  data: RestStoresResponseData;
}

export interface RestStoresResponseData {
  type: string;
  id: string;
  attributes: StoresRestAttributes;
  links: RestLinks;
}

export interface RestTaxSetsResponse {
  data: RestTaxSetsResponseData;
}

export interface RestTaxSetsResponseData {
  type: string;
  id: string;
  attributes: RestTaxSetAttributes;
  links: RestLinks;
}

export interface RestWishlistItemResponse {
  data: RestWishlistItemResponseData;
}

export interface RestWishlistItemResponseData {
  type: string;
  id: string;
  attributes: RestWishlistItemAttributes;
  links: RestLinks;
}

export interface RestWishlistRelationships {
  'wishlist-items': Array<RestWishlistItemsRelationshipData>;
}

export interface RestWishlistItemsRelationshipData {
  id: number;
  type: string;
}

export interface RestWishlistItemRequest {
  data: RestWishlistItemRequestData;
}

export interface RestWishlistItemRequestData {
  type: string;
  attributes: RestWishlistItemAttributes;
}

export interface RestWishlistsResponse {
  data: RestWishlistsResponseData;
}

export interface RestWishlistsListResponse {
  data: Array<RestWishlistsResponseData>;
}

export interface RestWishlistsResponseData {
  type: string;
  id: string;
  attributes: RestWishlistsAttributes;
  links: RestLinks;
  relationships: RestWishlistRelationships;
}

export interface RestWishlistsRequest {
  data: RestWishlistsRequestData;
}

export interface RestWishlistsRequestData {
  type: string;
  attributes: RestWishlistsRequestAttributes;
}

export interface RestWishlistsPatchRequest {
  data: RestWishlistsPatchRequestData;
}

export interface RestWishlistsPatchRequestData {
  type: string;
  id: string;
  attributes: RestWishlistsRequestAttributes;
}

export interface RestCustomerForgottenPasswordRequest {
  data: RestCustomerForgottenPasswordRequestData;
}

export interface RestCustomerForgottenPasswordRequestData {
  type: string;
  attributes: RestCustomerForgottenPasswordAttributes;
}

export interface RestCustomerRestorePasswordRequest {
  data: RestCustomerRestorePasswordRequestData;
}

export interface RestCustomerRestorePasswordRequestData {
  type: string;
  attributes: RestCustomerRestorePasswordAttributes;
}

export interface RestCustomerPasswordRequest {
  data: RestCustomerPasswordRequestData;
}

export interface RestCustomerPasswordRequestData {
  type: string;
  attributes: RestCustomerPasswordAttributes;
}

export interface RestCalculatedDiscount {
  unitAmount: number;
  sumAmount: number;
  displayName: string;
  description: string;
  voucherCode: string;
  quantity: number;
}

export interface RestOrderAddress {
  salutation: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address1: string;
  address2: string;
  address3: string;
  company: string;
  city: string;
  zipCode: string;
  poBox: string;
  phone: string;
  cellPhone: string;
  description: string;
  comment: string;
  email: string;
  isBilling: boolean;
  isShipping: boolean;
}

export interface RestOrderAttributes {
  createdAt: string;
  totals: RestOrderTotalsAttributes;
  currencyIsoCode: string;
  items: Array<RestOrderItemsAttributes>;
  expenses: Array<RestOrderExpensesAttributes>;
  billingAddress: RestOrderAddress;
  shippingAddress: RestOrderAddress;
  priceMode: string;
  payments: Array<RestOrderPayment>;
  calculatedDiscounts: Array<RestCalculatedDiscount>;
}

export interface RestOrderListResponse {
  data: Array<RestOrderListResponseData>;
  links: RestLinks;
}

export interface RestOrderListResponseData {
  type: string;
  id: string;
  attributes: RestOrderListDetailsAttributes;
  links: RestLinks;
}

export interface RestOrderListDetailsAttributes {
  createdAt: string;
  totals: RestOrderTotalsAttributes;
  currencyIsoCode: string;
  items: Array<RestOrderItemsAttributes>;
  expenses: Array<RestOrderExpensesAttributes>;
}

export interface RestOrderResponse {
  data: Array<RestOrderResponseData>;
  links: RestLinks;
}

export interface RestOrderResponseData {
  type: string;
  id: string;
  attributes: RestOrderAttributes;
  links: RestLinks;
}

export interface RestOrderExpensesAttributes {
  type: string;
  name: string;
  sumPrice: number;
  unitGrossPrice: number;
  sumGrossPrice: number;
  taxRate: number;
  unitNetPrice: number;
  sumNetPrice: number;
  canceledAmount: number;
  unitDiscountAmountAggregation: number;
  sumDiscountAmountAggregation: number;
  unitTaxAmount: number;
  sumTaxAmount: number;
  unitPriceToPayAggregation: number;
  sumPriceToPayAggregation: number;
  taxAmountAfterCancellation: number;
}

export interface RestOrderItemMetadata {
  superAttributes: Array<string>;
  image: string;
}

export interface RestOrderItemsAttributes {
  name: string;
  sku: string;
  sumPrice: number;
  sumPriceToPayAggregation: number;
  quantity: number;
  metadata: RestOrderItemMetadata;
  calculatedDiscounts: Array<RestCalculatedDiscount>;
}

export interface RestOrderPayment {
  amount: number;
  paymentProvider: string;
  paymentMethod: string;
}

export interface RestOrderTotalsAttributes {
  expenseTotal: number;
  discountTotal: number;
  taxTotal: number;
  subtotal: number;
  grandTotal: number;
  canceledTotal: number;
}

export interface RestLinks {
  self: string;
}

