import {IPaymentMethod, IShipmentMethod} from "src/shared/interfaces/checkout/index";
import {IAddressItemCollection} from "src/shared/interfaces/addresses/index";

export const addressesCollectionFixture: Array<IAddressItemCollection> = [
  {
    "id": "dd1ddd99-1315-5eae-aaaf-9e74f78a33d52",
    "salutation": "Mr",
    "firstName": "spencor",
    "lastName": "hopkin",
    "address1": "East road",
    "address2": "213",
    "address3": "",
    "zipCode": "61000",
    "city": "Berlin",
    "country": {
      "id_country": 60,
      "iso2_code": "DE",
      "iso3_code": "DEU",
      "name": "Germany",
      "postal_code_mandatory": true,
      "postal_code_regex": "\\d{5}",
      "regions": {}
    },
    "iso2Code": "DE",
    "company": "Spryker2",
    "phone": "+380669455897"
  },
  {
    "id": "dd1ddd99-1315-5eae-aaaf-9e74f78a33d53",
    "salutation": "Mr",
    "firstName": "spencor",
    "lastName": "hopkin",
    "address1": "West road",
    "address2": "212",
    "address3": "",
    "zipCode": "61000",
    "city": "Berlin",
    "country": {
      "id_country": 60,
      "iso2_code": "DE",
      "iso3_code": "DEU",
      "name": "Germany",
      "postal_code_mandatory": true,
      "postal_code_regex": "\\d{5}",
      "regions": {}
    },
    "iso2Code": "DE",
    "company": "Spryker",
    "phone": "+380669455897"
  }
];

export const shipmentMethodsFixture: Array<IShipmentMethod> = [
  {
    "carrierName": "Spryker Dummy Shipment",
    "id": "2",
    "name": "Express",
    "price": 590,
    "taxRate": null,
    "shipmentDeliveryTime": null
  },
  {
    "carrierName": "Spryker Dummy Shipment",
    "id": "1",
    "name": "Standard",
    "price": 490,
    "taxRate": null,
    "shipmentDeliveryTime": null
  },
  {
    "carrierName": "Spryker Drone Shipment",
    "id": "5",
    "name": "Air Light",
    "price": 1500,
    "taxRate": null,
    "shipmentDeliveryTime": null
  },
  {
    "carrierName": "Spryker Drone Shipment",
    "id": "4",
    "name": "Air Sonic",
    "price": 1000,
    "taxRate": null,
    "shipmentDeliveryTime": null
  },
  {
    "carrierName": "Spryker Drone Shipment",
    "id": "3",
    "name": "Air Standard",
    "price": 500,
    "taxRate": null,
    "shipmentDeliveryTime": null
  }
];

// export const paymentMethodsFixture: Array<IPaymentMethod> = [
//   {
//     paymentProvider: 'visa',
//     paymentMethod: 'creditCard',
//     paymentSelection: '1',
//     amount: 0,
//   },
//   {
//     paymentProvider: 'masterCard',
//     paymentMethod: 'creditCard',
//     paymentSelection: '2',
//     amount: 0,
//   },
//   {
//     paymentProvider: 'Dummy name invoice',
//     paymentMethod: 'invoice',
//     paymentSelection: '3',
//     amount: 0,
//   },
// ];
