import PropTypes from 'prop-types';

export const AbstractProductsRestAttributes = PropTypes.shape({
  sku: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  attributes: PropTypes.object,
  superAttributesDefinition: PropTypes.arrayOf(PropTypes.string),
  attributeMap: PropTypes.object,
  metaTitle: PropTypes.string,
  metaKeywords: PropTypes.string,
  metaDescription: PropTypes.string,
});

export const ConcreteProductsRestAttributes = PropTypes.shape({
  sku: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  attributes: PropTypes.object,
  superAttributesDefinition: PropTypes.arrayOf(PropTypes.string),
  metaTitle: PropTypes.string,
  metaKeywords: PropTypes.string,
  metaDescription: PropTypes.string,
});

export const RestAccessTokensResponseAttributes = PropTypes.shape({
  tokenType: PropTypes.string,
  expiresIn: PropTypes.string,
  accessToken: PropTypes.string,
  refreshToken: PropTypes.string,
});

export const RestAccessTokensRequestAttributes = PropTypes.shape({
  username: PropTypes.string,
  password: PropTypes.string,
});

export const RestCatalogSearchAttributes = PropTypes.shape({
  currency: PropTypes.string,
  sort: RestCatalogSearchSortAttributes,
  pagination: RestCatalogSearchPaginationAttributes,
  products: PropTypes.arrayOf(RestCatalogSearchProductsAttributes),
  valueFacets: PropTypes.arrayOf(RestFacetSearchResultAttributes),
  rangeFacets: PropTypes.arrayOf(RestRangeSearchResultAttributes),
  spellingSuggestion: PropTypes.string,
});

export const RestFacetSearchResultAttributes = PropTypes.shape({
  name: PropTypes.string,
  doc_count: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.string),
  active_value: PropTypes.string,
});

export const RestRangeSearchResultAttributes = PropTypes.shape({
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  active_min: PropTypes.number,
  active_max: PropTypes.number,
  doc_count: PropTypes.number,
});

export const RestCatalogSearchPaginationAttributes = PropTypes.shape({
  numFound: PropTypes.number,
  currentPage: PropTypes.number,
  maxPage: PropTypes.number,
  currentItemsPerPage: PropTypes.number,
});

export const RestCatalogSearchProductImageAttributes = PropTypes.shape({
  externalUrlSmall: PropTypes.string,
  externalUrlLarge: PropTypes.string,
});

export const RestCatalogSearchProductsAttributes = PropTypes.shape({
  images: PropTypes.arrayOf(RestCatalogSearchProductImageAttributes),
  price: PropTypes.number,
  abstractName: PropTypes.string,
  prices: RestProductPrice,
  abstractSku: PropTypes.string,
});

export const RestCatalogSearchSortAttributes = PropTypes.shape({
  sortParamNames: PropTypes.arrayOf(PropTypes.string),
  currentSortParam: PropTypes.string,
  currentSortOrder: PropTypes.string,
});

export const RestCatalogSearchSuggestionsAttributes = PropTypes.shape({
  currency: PropTypes.string,
  completion: PropTypes.arrayOf(PropTypes.string),
  products: PropTypes.arrayOf(PropTypes.shape({
    abstract_sku: PropTypes.string,
    abstract_name: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.shape({
    external_url_small: PropTypes.string,
    external_url_large: PropTypes.string,
  }),
  })),
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
  cmsPages: PropTypes.arrayOf(PropTypes.object),
});

export const RestErrorMessage = PropTypes.shape({
  errors: PropTypes.arrayOf(RestErrorMessageAttibutes),
});

export const RestErrorMessageAttibutes = PropTypes.shape({
  status: PropTypes.number,
  code: PropTypes.string,
  detail: PropTypes.string,
});

export const RestRefreshTokensAttributes = PropTypes.shape({
  expiresIn: PropTypes.string,
  accessToken: PropTypes.string,
  refreshToken: PropTypes.string,
});

export const RestWishlistItemsAttributes = PropTypes.shape({
  sku: PropTypes.string,
});

export const RestWishlistsAttributes = PropTypes.shape({
  name: PropTypes.string,
  numberOfItems: PropTypes.number,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
});

export const RestAddressAttributes = PropTypes.shape({
  salutation: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  address3: PropTypes.string,
  zipCode: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  company: PropTypes.string,
  phone: PropTypes.string,
  isDefaultShipping: PropTypes.bool,
  isDefaultBilling: PropTypes.bool,
  iso2Code: PropTypes.string,
});

export const RestCustomersAttributes = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  gender: PropTypes.string,
  dateOfBirth: PropTypes.string,
  salutation: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  registered: PropTypes.string,
});

export const RestConcreteProductAvailabilityAttributes = PropTypes.shape({
  availability: PropTypes.bool,
  quantity: PropTypes.number,
  isNeverOutOfStock: PropTypes.bool,
});

export const RestAbstractProductAvailabilityAttributes = PropTypes.shape({
  availability: PropTypes.bool,
  quantity: PropTypes.number,
});

export const RestProductImageSetsAttributes = PropTypes.shape({
  name: PropTypes.string,
  images: RestImagesAttributes,
});

export const RestImagesAttributes = PropTypes.shape({
  externalUrlLarge: PropTypes.string,
  externalUrlSmall: PropTypes.string,
});

export const RestProductPricesAttributes = PropTypes.shape({
  prices: PropTypes.arrayOf(RestProductPrice),
});

export const RestProductPrice = PropTypes.shape({
  priceTypeName: PropTypes.string,
  grossAmount: PropTypes.number,
});

export const RestCartsRequest = PropTypes.shape({
  data: RestCartsRequestData,
});

export const RestCartsRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCartsRequestAttributes,
});

export const RestCartsAttributes = PropTypes.shape({
  priceMode: PropTypes.string,
  currency: PropTypes.string,
  store: PropTypes.string,
  discounts: PropTypes.arrayOf(RestCartsDiscounts),
  totals: RestCartsTotals,
  name: PropTypes.string,
  isDefault: PropTypes.bool,
});

export const RestCartsRequestAttributes = PropTypes.shape({
  priceMode: PropTypes.string,
  currency: PropTypes.string,
  store: PropTypes.string,
});

export const RestCartsDiscounts = PropTypes.shape({
  displayName: PropTypes.string,
  amount: PropTypes.number,
  code: PropTypes.string,
});

export const RestCartsTotals = PropTypes.shape({
  expenseTotal: PropTypes.number,
  discountTotal: PropTypes.number,
  taxTotal: PropTypes.number,
  subtotal: PropTypes.number,
  grandTotal: PropTypes.number,
});

export const RestCartItemsAttributes = PropTypes.shape({
  sku: PropTypes.string,
  quantity: PropTypes.number,
  groupKey: PropTypes.string,
  amount: PropTypes.number,
  calculations: RestCartItemCalculations,
});

export const RestCartItemCalculations = PropTypes.shape({
  unitPrice: PropTypes.number,
  sumPrice: PropTypes.number,
  taxRate: PropTypes.number,
  unitNetPrice: PropTypes.number,
  sumNetPrice: PropTypes.number,
  unitGrossPrice: PropTypes.number,
  sumGrossPrice: PropTypes.number,
  unitTaxAmountFullAggregation: PropTypes.number,
  sumTaxAmountFullAggregation: PropTypes.number,
  sumSubtotalAggregation: PropTypes.number,
  unitSubtotalAggregation: PropTypes.number,
  unitProductOptionPriceAggregation: PropTypes.number,
  sumProductOptionPriceAggregation: PropTypes.number,
  unitDiscountAmountAggregation: PropTypes.number,
  sumDiscountAmountAggregation: PropTypes.number,
  unitDiscountAmountFullAggregation: PropTypes.number,
  sumDiscountAmountFullAggregation: PropTypes.number,
  unitPriceToPayAggregation: PropTypes.number,
  sumPriceToPayAggregation: PropTypes.number,
});

export const RestCategoryNodesAttributes = PropTypes.shape({
  name: PropTypes.string,
  metaTitle: PropTypes.string,
  metaKeywords: PropTypes.string,
  metaDescription: PropTypes.string,
  isActive: PropTypes.bool,
  order: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.object),
  parents: PropTypes.arrayOf(PropTypes.object),
});

export const RestCategoryTreesAttributes = PropTypes.shape({
  nodeId: PropTypes.number,
  order: PropTypes.number,
  name: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
});

export const StoresRestAttributes = PropTypes.shape({
  timeZone: PropTypes.string,
  defaultCurrency: PropTypes.string,
  currencies: PropTypes.arrayOf(StoreCurrencyRestAttributes),
  locales: PropTypes.arrayOf(StoreLocaleRestAttributes),
  countries: PropTypes.arrayOf(StoreCountryRestAttributes),
});

export const StoreCurrencyRestAttributes = PropTypes.shape({
  code: PropTypes.string,
  name: PropTypes.string,
});

export const StoreLocaleRestAttributes = PropTypes.shape({
  code: PropTypes.string,
  name: PropTypes.string,
});

export const StoreRegionRestAttributes = PropTypes.shape({
  iso2Code: PropTypes.string,
  name: PropTypes.string,
});

export const StoreCountryRestAttributes = PropTypes.shape({
  iso2Code: PropTypes.string,
  iso3Code: PropTypes.string,
  name: PropTypes.string,
  postalCodeMandatory: PropTypes.bool,
  postalCodeRegex: PropTypes.string,
  regions: StoreRegionRestAttributes,
});

export const RestTaxSetAttributes = PropTypes.shape({
  name: PropTypes.string,
  taxRates: PropTypes.arrayOf(RestTaxRate),
});

export const RestTaxRate = PropTypes.shape({
  name: PropTypes.string,
  rate: PropTypes.string,
  country: PropTypes.string,
});

export const RestWishlistsRequestAttributes = PropTypes.shape({
  name: PropTypes.string,
});

export const RestWishlistItemAttributes = PropTypes.shape({
  sku: PropTypes.string,
});

export const RestCustomersInfoAttributes = PropTypes.shape({
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  salutation: PropTypes.string,
  email: PropTypes.string,
});

export const RestCustomersRegisterAttributes = PropTypes.shape({
  salutation: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  passwordConfirmation: PropTypes.string,
  acceptedTerms: PropTypes.bool,
});

export const RestCustomerPasswordAttributes = PropTypes.shape({
  password: PropTypes.string,
  newPassword: PropTypes.string,
  confirmPassword: PropTypes.string,
});

export const RestRefreshTokenRequestAttributes = PropTypes.shape({
  refreshToken: PropTypes.string,
});

export const RestCustomerForgottenPasswordAttributes = PropTypes.shape({
  email: PropTypes.string,
});

export const RestCustomerRestorePasswordAttributes = PropTypes.shape({
  restorePasswordKey: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
});

export const RestAbstractProductAvailabilityResponse = PropTypes.shape({
  data: RestAbstractProductAvailabilityResponseData,
});

export const RestAbstractProductAvailabilityResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestAbstractProductAvailabilityAttributes,
  links: RestLinks,
});

export const RestConcreteProductAvailabilityResponse = PropTypes.shape({
  data: RestConcreteProductAvailabilityResponseData,
});

export const RestConcreteProductAvailabilityResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestConcreteProductAvailabilityAttributes,
  links: RestLinks,
});

export const RestProductImageSetsResponse = PropTypes.shape({
  data: RestProductImageSetsResponseData,
});

export const RestProductImageSetsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestProductImageSetsAttributesList,
  links: RestLinks,
});

export const RestProductImageSetsAttributesList = PropTypes.shape({
  imageSets: PropTypes.arrayOf(RestProductImageSetsAttributes),
});

export const RestProductPricesResponse = PropTypes.shape({
  data: RestProductPricesResponseData,
});

export const RestProductPricesResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestProductPricesAttributes,
  links: RestLinks,
});

export const RestAbstractProductsResponse = PropTypes.shape({
  data: RestAbstractProductsResponseData,
});

export const RestAbstractProductsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: AbstractProductsRestAttributes,
  links: RestLinks,
  relationships: PropTypes.shape({
    'product-labels': RestProductLabelsRelationships,
  }),
});

export const RestConcreteProductsResponse = PropTypes.shape({
  data: RestConcreteProductsResponseData,
});

export const RestConcreteProductsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: ConcreteProductsRestAttributes,
  links: RestLinks,
});

export const RestAccessTokenRequest = PropTypes.shape({
  data: RestAccessTokenRequestData,
});

export const RestAccessTokenRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestAccessTokensRequestAttributes,
  links: RestLinks,
});

export const RestAccessTokenResponse = PropTypes.shape({
  data: RestAccessTokenResponseData,
});

export const RestAccessTokenResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestAccessTokensResponseAttributes,
});

export const RestAddressesResponse = PropTypes.shape({
  data: RestAddressesResponseData,
});

export const RestAddressesListResponse = PropTypes.shape({
  data: PropTypes.arrayOf(RestAddressesResponseData),
});

export const RestAddressesResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestAddressAttributes,
  links: RestLinks,
});

export const RestAddressesRequest = PropTypes.shape({
  data: RestAddressesRequestData,
});

export const RestAddressesRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestAddressAttributes,
});

export const RestCartsResponse = PropTypes.shape({
  data: RestCartsResponseData,
});

export const RestCartsListResponse = PropTypes.shape({
  data: PropTypes.arrayOf(RestCartsResponseData),
});

export const RestCartsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCartsAttributes,
  links: RestLinks,
  relationships: RestCartsRelationships,
});

export const RestCartsRelationships = PropTypes.shape({
  items: PropTypes.arrayOf(RestCartsItemsRelationshipData),
});

export const RestCartsItemsRelationshipData = PropTypes.shape({
  id: PropTypes.number,
  type: PropTypes.string,
});

export const RestCatalogSearchResponse = PropTypes.shape({
  data: RestCatalogSearchResponseData,
});

export const RestCatalogSearchResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCatalogSearchAttributes,
  links: RestLinks,
});

export const RestCatalogSearchSuggestionsResponse = PropTypes.shape({
  data: RestCatalogSearchuggestionsResponseData,
});

export const RestCatalogSearchuggestionsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCatalogSearchSuggestionsAttributes,
  links: RestLinks,
});

export const RestCategoryNodeResponse = PropTypes.shape({
  data: RestCategoryNodeResponseData,
});

export const RestCategoryNodeResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCategoryNodesAttributes,
  links: RestLinks,
});

export const RestCategoryTreesResponse = PropTypes.shape({
  data: RestCategoryTreesResponseData,
});

export const RestCategoryTreesResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCategoryTreesAttributes,
  links: RestLinks,
});

export const RestCustomersResponse = PropTypes.shape({
  data: RestCustomersResponseData,
});

export const RestCustomersResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCustomersAttributes,
  links: RestLinks,
});

export const RestCustomersRegisterResponse = PropTypes.shape({
  data: RestCustomersRegisterResponseData,
});

export const RestCustomersRegisterResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCustomersRegisterAttributes,
});

export const RestCustomersRegisterRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCustomersRegisterAttributes,
  links: RestLinks,
});

export const RestCustomersRequest = PropTypes.shape({
  data: RestCustomersRequestData,
});

export const RestCustomersRequestData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCustomersAttributes,
  links: RestLinks,
});

export const RestPostCartItemsRequest = PropTypes.shape({
  data: RestPostCartItemsRequestData,
});

export const RestPostCartItemsRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestPostCartItemsAttributes,
});

export const RestPostCartItemsAttributes = PropTypes.shape({
  sku: PropTypes.string,
  quantity: PropTypes.number,
});

export const RestRefreshTokenRequest = PropTypes.shape({
  data: RestRefreshTokenRequestData,
});

export const RestRefreshTokenRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestRefreshTokenRequestAttributes,
  links: RestLinks,
});

export const RestStoresResponse = PropTypes.shape({
  data: RestStoresResponseData,
});

export const RestStoresResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: StoresRestAttributes,
  links: RestLinks,
});

export const RestTaxSetsResponse = PropTypes.shape({
  data: RestTaxSetsResponseData,
});

export const RestTaxSetsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestTaxSetAttributes,
  links: RestLinks,
});

export const RestWishlistItemResponse = PropTypes.shape({
  data: RestWishlistItemResponseData,
});

export const RestWishlistItemResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestWishlistItemAttributes,
  links: RestLinks,
});

export const RestWishlistRelationships = PropTypes.shape({
  'wishlist-items': PropTypes.arrayOf(RestWishlistItemsRelationshipData),
});

export const RestWishlistItemsRelationshipData = PropTypes.shape({
  id: PropTypes.number,
  type: PropTypes.string,
});

export const RestWishlistItemRequest = PropTypes.shape({
  data: RestWishlistItemRequestData,
});

export const RestWishlistItemRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestWishlistItemAttributes,
});

export const RestWishlistsResponse = PropTypes.shape({
  data: RestWishlistsResponseData,
});

export const RestWishlistsListResponse = PropTypes.shape({
  data: PropTypes.arrayOf(RestWishlistsResponseData),
});

export const RestWishlistsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestWishlistsAttributes,
  links: RestLinks,
  relationships: RestWishlistRelationships,
});

export const RestWishlistsRequest = PropTypes.shape({
  data: RestWishlistsRequestData,
});

export const RestWishlistsRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestWishlistsRequestAttributes,
});

export const RestWishlistsPatchRequest = PropTypes.shape({
  data: RestWishlistsPatchRequestData,
});

export const RestWishlistsPatchRequestData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestWishlistsRequestAttributes,
});

export const RestCustomerForgottenPasswordRequest = PropTypes.shape({
  data: RestCustomerForgottenPasswordRequestData,
});

export const RestCustomerForgottenPasswordRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCustomerForgottenPasswordAttributes,
});

export const RestCustomerRestorePasswordRequest = PropTypes.shape({
  data: RestCustomerRestorePasswordRequestData,
});

export const RestCustomerRestorePasswordRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCustomerRestorePasswordAttributes,
});

export const RestCustomerPasswordRequest = PropTypes.shape({
  data: RestCustomerPasswordRequestData,
});

export const RestCustomerPasswordRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCustomerPasswordAttributes,
});

export const RestCalculatedDiscount = PropTypes.shape({
  unitAmount: PropTypes.number,
  sumAmount: PropTypes.number,
  displayName: PropTypes.string,
  description: PropTypes.string,
  voucherCode: PropTypes.string,
  quantity: PropTypes.number,
});

export const RestOrderAddress = PropTypes.shape({
  salutation: PropTypes.string,
  firstName: PropTypes.string,
  middleName: PropTypes.string,
  lastName: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  address3: PropTypes.string,
  company: PropTypes.string,
  city: PropTypes.string,
  zipCode: PropTypes.string,
  poBox: PropTypes.string,
  phone: PropTypes.string,
  cellPhone: PropTypes.string,
  description: PropTypes.string,
  comment: PropTypes.string,
  email: PropTypes.string,
  isBilling: PropTypes.bool,
  isShipping: PropTypes.bool,
});

export const RestOrderAttributes = PropTypes.shape({
  createdAt: PropTypes.string,
  totals: RestOrderTotalsAttributes,
  currencyIsoCode: PropTypes.string,
  items: PropTypes.arrayOf(RestOrderItemsAttributes),
  expenses: PropTypes.arrayOf(RestOrderExpensesAttributes),
  billingAddress: RestOrderAddress,
  shippingAddress: RestOrderAddress,
  priceMode: PropTypes.string,
  payments: PropTypes.arrayOf(RestOrderPayment),
  calculatedDiscounts: PropTypes.arrayOf(RestCalculatedDiscount),
});

export const RestOrderListResponse = PropTypes.shape({
  data: PropTypes.arrayOf(RestOrderListResponseData),
  links: RestLinks,
});

export const RestOrderListResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestOrderListDetailsAttributes,
  links: RestLinks,
});

export const RestOrderListDetailsAttributes = PropTypes.shape({
  createdAt: PropTypes.string,
  totals: RestOrderTotalsAttributes,
  currencyIsoCode: PropTypes.string,
  items: PropTypes.arrayOf(RestOrderItemsAttributes),
  expenses: PropTypes.arrayOf(RestOrderExpensesAttributes),
});

export const RestOrderResponse = PropTypes.shape({
  data: PropTypes.arrayOf(RestOrderResponseData),
  links: RestLinks,
});

export const RestOrderResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestOrderAttributes,
  links: RestLinks,
});

export const RestOrderExpensesAttributes = PropTypes.shape({
  type: PropTypes.string,
  name: PropTypes.string,
  sumPrice: PropTypes.number,
  unitGrossPrice: PropTypes.number,
  sumGrossPrice: PropTypes.number,
  taxRate: PropTypes.number,
  unitNetPrice: PropTypes.number,
  sumNetPrice: PropTypes.number,
  canceledAmount: PropTypes.number,
  unitDiscountAmountAggregation: PropTypes.number,
  sumDiscountAmountAggregation: PropTypes.number,
  unitTaxAmount: PropTypes.number,
  sumTaxAmount: PropTypes.number,
  unitPriceToPayAggregation: PropTypes.number,
  sumPriceToPayAggregation: PropTypes.number,
  taxAmountAfterCancellation: PropTypes.number,
});

export const RestOrderItemMetadata = PropTypes.shape({
  superAttributes: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
});

export const RestOrderItemsAttributes = PropTypes.shape({
  name: PropTypes.string,
  sku: PropTypes.string,
  sumPrice: PropTypes.number,
  sumPriceToPayAggregation: PropTypes.number,
  quantity: PropTypes.number,
  metadata: RestOrderItemMetadata,
  calculatedDiscounts: PropTypes.arrayOf(RestCalculatedDiscount),
});

export const RestOrderPayment = PropTypes.shape({
  amount: PropTypes.number,
  paymentProvider: PropTypes.string,
  paymentMethod: PropTypes.string,
});

export const RestOrderTotalsAttributes = PropTypes.shape({
  expenseTotal: PropTypes.number,
  discountTotal: PropTypes.number,
  taxTotal: PropTypes.number,
  subtotal: PropTypes.number,
  grandTotal: PropTypes.number,
  canceledTotal: PropTypes.number,
});

export const RestCartItemsRequest = PropTypes.shape({
  data: RestCartItemsRequestData,
});

export const RestCartItemsRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCartItemsRequestAttributes,
});

export const RestCartItemsRequestAttributes = PropTypes.shape({
  sku: PropTypes.string,
  quantity: PropTypes.number,
});

export const RestCartItemsPatchRequest = PropTypes.shape({
  data: RestCartItemsPatchRequestData,
});

export const RestCartItemsPatchRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCartItemsPatchRequestAttributes,
});

export const RestCartItemsPatchRequestAttributes = PropTypes.shape({
  quantity: PropTypes.number,
});

export const RestCheckoutRequest = PropTypes.shape({
  data: RestCheckoutRequestData,
});

export const RestCheckoutRequestData = PropTypes.shape({
  type: PropTypes.string,
  attributes: RestCheckoutRequestAttributes,
});

export const RestCheckoutRequestAttributes = PropTypes.shape({
  customer: RestCustomer,
  idCart: PropTypes.string,
  billingAddress: RestAddress,
  shippingAddress: RestAddress,
  payments: PropTypes.arrayOf(RestPayment),
  shipping: RestShipment,
});

export const RestCustomer = PropTypes.shape({
  email: PropTypes.string,
  salutation: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
});

export const RestAddress = PropTypes.shape({
  id: PropTypes.string,
  salutation: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address1: PropTypes.string,
  address2: PropTypes.string,
  address3: PropTypes.string,
  zipCode: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  company: PropTypes.string,
  phone: PropTypes.string,
  iso2Code: PropTypes.string,
});

export const RestPayment = PropTypes.shape({
  paymentProviderName: PropTypes.string,
  paymentMethodName: PropTypes.string,
});

export const RestShipment = PropTypes.shape({
  idShipmentMethod: PropTypes.number,
});

export const RestCheckoutDataResponse = PropTypes.shape({
  data: RestCheckoutDataResponseData,
});

export const RestCheckoutDataResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCheckoutDataAttributes,
});

export const RestCheckoutResponse = PropTypes.shape({
  data: RestCheckoutResponseData,
});

export const RestCheckoutResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestCheckoutResponseAttributes,
});

export const RestCheckoutDataAttributes = PropTypes.shape({
  addresses: PropTypes.arrayOf(RestAddress),
  paymentProviders: PropTypes.arrayOf(RestPaymentProviderAttributes),
  shipmentMethods: PropTypes.arrayOf(RestShipmentMethodAttributes),
});

export const RestPaymentProviderAttributes = PropTypes.shape({
  paymentProviderName: PropTypes.string,
  paymentMethods: PropTypes.arrayOf(RestPaymentMethodAttributes),
});

export const RestPaymentMethodAttributes = PropTypes.shape({
  paymentMethodName: PropTypes.string,
  requiredRequestData: PropTypes.object,
});

export const RestShipmentMethodAttributes = PropTypes.shape({
  carrierName: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  taxRate: PropTypes.number,
  shipmentDeliveryTime: PropTypes.string,
});

export const RestCheckoutResponseAttributes = PropTypes.shape({
  orderReference: PropTypes.string,
  relationships: PropTypes.shape({
    orders: RestOrderResponse,
  }),
});

export const RestLinks = PropTypes.shape({
  self: PropTypes.string,
});

export const RestProductLabelsResponse = PropTypes.shape({
  data: RestProductLabelsResponseData,
});

export const RestProductLabelsResponseData = PropTypes.shape({
  type: PropTypes.string,
  id: PropTypes.string,
  attributes: RestProductLabelsAttributes,
  links: RestLinks,
});

export const RestProductLabelsAttributes = PropTypes.shape({
  name: PropTypes.string,
  isExclusive: PropTypes.bool,
  position: PropTypes.number,
  frontEndReference: PropTypes.string,
});

export const RestProductLabelsRelationships = PropTypes.shape({
  data: PropTypes.arrayOf(RestProductLabelsRelationshipsData),
});

export const RestProductLabelsRelationshipsData = PropTypes.shape({
  id: PropTypes.string,
  type: PropTypes.string,
});

