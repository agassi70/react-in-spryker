/* tslint:disable */

export const orderDetailsFixtureFull: any = {
  'data': {
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
      'items': [{
        'name': 'Sony Xperia Z3 Compact',
        'sku': '076_24394207',
        'sumPrice': 35711,
        'sumPriceToPayAggregation': 32139,
        'quantity': 1,
      }, {
        'name': 'Sony Xperia Z3 Compact',
        'sku': '076_24394207',
        'sumPrice': 35711,
        'sumPriceToPayAggregation': 32140,
        'quantity': 1,
      }, {
        'name': 'Sony SWR12',
        'sku': '089_29634947',
        'sumPrice': 41393,
        'sumPriceToPayAggregation': 37254,
        'quantity': 1,
      }, {
        'name': 'Sony SmartWatch 3',
        'sku': '093_24495843',
        'sumPrice': 24899,
        'sumPriceToPayAggregation': 22409,
        'quantity': 1,
      }, {
        'name': 'Asus Zenbook US303UB',
        'sku': '141_29380410',
        'sumPrice': 36742,
        'sumPriceToPayAggregation': 33068,
        'quantity': 1,
      }],
      'expenses': [{'name': 'Standard', 'sumPrice': 490}],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/orders\/DE--3'},
  },
};
