import { StatusCodes } from 'http-status-codes';
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { processErrorHandle } from '../process-error-handle';

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const BACKEND_URL = 'http://localhost:3000';
const REQEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQEST_TIMEOUT,
  });

  // api.interceptors.request.use(
  //   (config: any) => {
  //     const token = getToken();

  //     if (token) {
  //       config.headers['x-token'] = token;
  //     }

  //     return config;
  //   }
  // );

  api.interceptors.response.use(
    (response) => response,
    (error) => {

      if (error.response && shouldDisplayError(error.response)) {
        processErrorHandle(error.response.data.error);
      }

      throw error;
    }
  );

  return api;
};
