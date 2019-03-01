import { unexpectedServerError } from 'src/shared/constants/messages/errors';
import {IErrorItem, IResponseError} from "./types";

export class ApiServiceAbstract {

  protected static getParsedAPIError = (response: IResponseError) => {
    let errorMessage: string;
    if (!response || !response.problem) {
      errorMessage = unexpectedServerError;
    } else {
      errorMessage = response.problem;
    }

    if (response.data && response.data.errors && Array.isArray(response.data.errors) && response.data.errors.length) {

      errorMessage = response.data.errors.reduce((accumulator: string, currentValue: IErrorItem) => {
        return accumulator + ' ' + currentValue.detail;
      }, '');
    }
    return errorMessage;
  };
}
