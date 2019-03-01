/* tslint:disable */
export const orderHistoryFixtureEmpty: any = {
  'data': [], 'links': {'self': 'http:\/\/glue.de.suite.local\/orders'},
};

export const orderHistoryFixtureFull: any = {
  'data': [{
    'type': 'orders',
    'id': 'DE--4',
    'attributes': {
      'createdAt': '2018-10-08 10:50:05.199707',
      'totals': {
        'expenseTotal': 590,
        'discountTotal': 6301,
        'taxTotal': 9149,
        'subtotal': 63012,
        'grandTotal': 57301,
        'canceledTotal': 0,
      },
      'currencyIsoCode': 'EUR',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/orders\/DE--4'},
  }, {
    'type': 'orders',
    'id': 'DE--3',
    'attributes': {
      'createdAt': '2018-10-08 07:30:32.709756',
      'totals': {
        'expenseTotal': 490,
        'discountTotal': 17936,
        'taxTotal': 19446,
        'subtotal': 174456,
        'grandTotal': 157010,
        'canceledTotal': 0,
      },
      'currencyIsoCode': 'EUR',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/orders\/DE--3'},
  }, {
    'type': 'orders',
    'id': 'DE--2',
    'attributes': {
      'createdAt': '2018-10-08 07:26:24.882175',
      'totals': {
        'expenseTotal': 490,
        'discountTotal': 8165,
        'taxTotal': 11029,
        'subtotal': 76752,
        'grandTotal': 69077,
        'canceledTotal': 0,
      },
      'currencyIsoCode': 'EUR',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/orders\/DE--2'},
  }, {
    'type': 'orders',
    'id': 'DE--1',
    'attributes': {
      'createdAt': '2018-10-08 07:21:31.473741',
      'totals': {
        'expenseTotal': 490,
        'discountTotal': 5891,
        'taxTotal': 4707,
        'subtotal': 54010,
        'grandTotal': 48609,
        'canceledTotal': 0,
      },
      'currencyIsoCode': 'EUR',
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/orders\/DE--1'},
  }], 'links': {'self': 'http:\/\/glue.de.suite.local\/orders'},
};
