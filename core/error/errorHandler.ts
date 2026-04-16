import { MESSAGES } from '../messages/messages';
import { AxiosError } from 'axios';

// Accepts an Axios error and returns the right message
export const getErrorMessage = (error: AxiosError): string => {
  // Network error
  if (!error.status) {
    if (error.code === 'ECONNABORTED') return MESSAGES.API.TIMEOUT;
    return MESSAGES.API.NETWORK_ERROR;
  }

  // HTTP status codes
  switch (error.status) {
    case 400:
      return MESSAGES.API.BAD_REQUEST;
    case 401:
      return MESSAGES.AUTH.UNAUTHORIZED;
    case 403:
      return MESSAGES.AUTH.UNAUTHORIZED;
    case 404:
      return MESSAGES.USER.NOT_FOUND;
    case 500:
      return MESSAGES.API.SERVER_ERROR;
    default:
      return MESSAGES.API.SERVER_ERROR;
  }
};
