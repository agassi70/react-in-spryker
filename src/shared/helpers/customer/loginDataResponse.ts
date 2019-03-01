import { ICustomerLoginDataParsed, TCustomerId } from 'src/shared/interfaces/customer';
import { TAccessToken } from 'src/shared/interfaces/login';
import jwtDecoder from 'jwt-decode';

interface ICustomerLoginDataResponse {
  data: {
    attributes: {
      accessToken: TAccessToken;
      expiresIn: number;
      refreshToken: TAccessToken;
      tokenType: string;
    },
    id: TCustomerId | null;
  };
}

export const parseLoginDataResponse = (response: ICustomerLoginDataResponse): ICustomerLoginDataParsed => {
  if (!response) {
    return null;
  }
  const {data: {attributes}}: any = response;
  const {sub}: {sub: string} = jwtDecoder(attributes.accessToken);
  const customerRef = JSON.parse(sub).customer_reference;

  let result = {
    accessToken: attributes.accessToken,
    expiresIn: attributes.expiresIn,
    refreshToken: attributes.refreshToken,
    tokenType: attributes.tokenType,
    customerRef,
  };

  return result;
};
