/* tslint:disable */
export const initFixture: any = {
  data: [{
    'type': 'stores',
    'id': 'DE',
    'attributes': {
      'timeZone': 'Europe\/Berlin',
      'defaultCurrency': 'EUR',
      'currencies': [{'code': 'EUR', 'name': 'Euro'}, {'code': 'CHF', 'name': 'Swiss Franc'}],
      'locales': [{'code': 'en', 'name': 'en_US'}, {'code': 'de', 'name': 'de_DE'}],
      'countries': [{
        'iso2Code': 'DE',
        'iso3Code': 'DEU',
        'name': 'Germany',
        'postalCodeMandatory': true,
        'postalCodeRegex': '\\d{5}',
        'regions': {},
      }, {
        'iso2Code': 'AT',
        'iso3Code': 'AUT',
        'name': 'Austria',
        'postalCodeMandatory': true,
        'postalCodeRegex': '\\d{4}',
        'regions': {},
      }],
    },
    'links': {'self': 'http:\/\/glue.de.suite.local\/stores\/DE'},
  }], 'links': {'self': 'http:\/\/glue.de.suite.local\/stores'},
};
