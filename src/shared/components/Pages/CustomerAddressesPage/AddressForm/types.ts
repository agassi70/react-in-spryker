import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from '../styles';
import { IAddressItem } from 'src/shared/interfaces/addresses';
import { ICountries } from 'src/shared/reducers/Common/Init';

export interface AddressFormProps extends WithStyles<typeof styles> {
  customer: string;
  currentAddress: IAddressItem;
  countries: ICountries[];
  routerGoBack: Function;
  isLoading: boolean;
  dispatch: Function;
  addAddress(payload: IAddressItem, customerId: string): void;
  updateAddress(addressId: string, customerId: string, payload: IAddressItem): void;
}

export interface AddressFormState extends IAddressItem {
  submitted: boolean;
}
