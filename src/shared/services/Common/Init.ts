import api, {nodeApi} from '../api';
import { toast } from 'react-toastify';
import {
  categoriesFulfilledState,
  categoriesPendingState,
  categoriesRejectedState,
  getCategoriesAction,
  IInitApplicationDataPayload,
  initApplicationDataFulfilledStateAction,
  initApplicationDataPendingStateAction,
  initApplicationDataRejectedStateAction,
} from 'src/shared/actions/Common/Init';
import { parseStoreResponse } from 'src/shared/helpers/init/store';
import { ApiServiceAbstract } from '../apiAbstractions/ApiServiceAbstract';

export class InitAppService extends ApiServiceAbstract {
  public static async getInitData(dispatch: Function, payload?: IInitApplicationDataPayload): Promise<void> {
    let anonymId: string;
    try {
      const nodeResponse: any = await nodeApi.get('getUniqueUser');

      if (nodeResponse.ok) {
        anonymId = nodeResponse.data;
      } else {
        anonymId = 'anonym';
      }

    } catch (err) {
      anonymId = 'anonym';
    }

    try {
      let response: any;
      dispatch(initApplicationDataPendingStateAction());
      response = await api.get('stores', null);

      if (response.ok) {
        const responseParsed = parseStoreResponse(response.data);
        dispatch(initApplicationDataFulfilledStateAction({...responseParsed, anonymId}));

        dispatch(getCategoriesAction());
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(initApplicationDataRejectedStateAction(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(initApplicationDataRejectedStateAction(error.message));
      toast.error('Unexpected Error: ' + error.message);
    }
  }

  public static async getCategoriesTree(dispatch: Function): Promise<void> {
    try {
      dispatch(categoriesPendingState());
      const response: any = await api.get('category-trees', {}, {withCredentials: true});

      if (response.ok) {
        let tree = response.data.data[0].attributes.categoryNodesStorage;

        if (!Array.isArray(tree)) {
          tree = [];
        }
        dispatch(categoriesFulfilledState(tree));
      } else {
        const errorMessage = this.getParsedAPIError(response);
        dispatch(categoriesRejectedState(errorMessage));
        toast.error('Request Error: ' + errorMessage);
      }

    } catch (error) {
      dispatch(categoriesRejectedState(error.message));
      toast.error('Unexpected Error: ' + error.message);
    }
  }
}
