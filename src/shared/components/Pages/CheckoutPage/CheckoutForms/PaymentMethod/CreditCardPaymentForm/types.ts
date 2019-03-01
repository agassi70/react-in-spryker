import { WithStyles } from '@material-ui/core/styles/withStyles';
import {formStyles} from "src/shared/components/Pages/CheckoutPage/CheckoutForms/styles";
import {TPaymentProvidersCollection} from "src/shared/components/Pages/CheckoutPage/types/constantTypes";


export interface ICreditCardPaymentFormProps extends WithStyles<typeof formStyles> {
  providersCollection: TPaymentProvidersCollection;
}
