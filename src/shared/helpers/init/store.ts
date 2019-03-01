import { IInitData } from '../../reducers/Common/Init';
import { PRICE_MODE_DEFAULT } from '../../constants/Environment';

export const parseStoreResponse = (data: any): IInitData => {

  const result: IInitData = {
    priceMode: null,
    currency: null,
    store: null,
    locale: null,
    timeZone: null,
  };

  if (!data.data[0].attributes) {
    return result;
  }
  const attributes = data.data[0].attributes;
  result.store = data.data[0].id;
  result.currency = attributes.defaultCurrency;
  result.priceMode = PRICE_MODE_DEFAULT;
  result.timeZone = attributes.timeZone;
  result.countries = attributes.countries;

  attributes.locales.forEach((row: any) => {
    row.code === result.store.toLowerCase() ? result.locale = row.code : 'de';
  });
  // For now it's hardcoded. Change if needed
  result.locale = attributes.locales[0].code;

  return result;
};
