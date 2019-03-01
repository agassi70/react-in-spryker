import { reduxify } from 'src/shared/lib/redux-helper';
import {getTotalItemsQuantity, getTotalProductsQuantity} from "src/shared/reducers/Common/Cart/selectors";


const mapStateToProps = (state: any, ownProps: any) => ({
  cartItemsQuantity: getTotalItemsQuantity(state, ownProps),
  cartProductsQuantity: getTotalProductsQuantity(state, ownProps),
});

export const connect = reduxify(mapStateToProps);
