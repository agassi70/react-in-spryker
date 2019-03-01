import { bindActionCreators, Dispatch } from 'redux';

import { reduxify } from 'src/shared/lib/redux-helper';
import { getRouterHistoryBack } from 'src/shared/selectors/Common/router';
import { getCounties, ICountries } from 'src/shared/reducers/Common/Init';
import {getCustomerReference} from 'src/shared/reducers/Pages/Login';
import {getCurrentAddress, isPageAddressesStateLoading} from 'src/shared/reducers/Pages/Addresses';
import { IAddressItem } from 'src/shared/interfaces/addresses';
import { addAddressAction, updateAddressAction } from 'src/shared/actions/Pages/Addresses';

const mapStateToProps = (state: any, ownProps: any) => {
  const routerGoBack = getRouterHistoryBack(state, ownProps);
  const countries: ICountries[] = getCounties(state, ownProps);
  const currentAddress: IAddressItem = getCurrentAddress(state, ownProps);
  const customer: string | null = getCustomerReference(state, ownProps);
  const isLoading: boolean = isPageAddressesStateLoading(state, ownProps);

  return ({
    customer,
    currentAddress,
    countries,
    routerGoBack,
    isLoading,
  });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    addAddress: (payload: IAddressItem, customerId: string) => addAddressAction(payload, customerId),
    updateAddress: (
      addressId: string, customerId: string, payload: IAddressItem
    ) => updateAddressAction(addressId, customerId, payload),
  }, dispatch);

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
