import { bindActionCreators, Dispatch } from 'redux';
import { reduxify } from 'src/shared/lib/redux-helper';
import { isUserAuthenticated } from 'src/shared/reducers/Pages/Login';
import {getAnonymId, isAppStateFulfilled} from "src/shared/reducers/Common/Init";
import {getGuestCartAction} from "src/shared/actions/Common/Cart";

const mapStateToProps = (state: any, ownProps: any) => {
  const isUserLoggedIn = isUserAuthenticated(state, ownProps);
  const isInitStateFulfilled: boolean = isAppStateFulfilled(state, ownProps);
  const anonymId = getAnonymId(state, ownProps);

  return ({
    isUserLoggedIn,
    isInitStateFulfilled,
    anonymId,
  });
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getGuestCartAction,
    },
    dispatch,
  );

export const connect = reduxify(mapStateToProps, mapDispatchToProps);
