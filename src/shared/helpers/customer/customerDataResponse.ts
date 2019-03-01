import { ICustomerDataParsed } from 'src/shared/interfaces/customer';

interface ICustomerDataResponse {
  data: object;
  included: object;
}

export const parseCustomerDataResponse = (response: ICustomerDataResponse): ICustomerDataParsed => {
  if (!response) {
    return null;
  }
  const {data: {attributes, id}}: any = response;

  let result: ICustomerDataParsed = {...attributes, id};

  return result;
};
