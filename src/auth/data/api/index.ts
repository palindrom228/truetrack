import {BASE_DEV_URL} from "@env";
import axios, {AxiosError} from "axios";

import {AuthApiConfigs} from "./paths";

export const mainApi = axios.create({
  baseURL: BASE_DEV_URL,
});

const onRequestError = (error: AxiosError): Promise<AuthErrorsI> => {
  console.log("Error handled : ", error.response?.status);
  switch (error.response?.status) {
    case 404:
      return Promise.resolve({data: AuthErrors.NOT_FOUND});
    default:
      return Promise.resolve({data: AuthErrors.UNHANDLED});
  }
};

interface AuthErrorsI {
  data: string;
}

enum AuthErrors {
  NOT_FOUND = "User not found",
  UNHANDLED = "Unhandled Error",
}

mainApi.interceptors.response.use(response => {
  return response;
}, onRequestError);
export namespace AuthApi {
  export const login = async (log: string, pass: string) => {
    const data = await mainApi.post<LoginReturnType | AuthErrors>(
      AuthApiConfigs.requestPaths.login,
      {
        phone: log,
        password: pass,
      },
    );
    return data.data;
  };
}

interface LoginReturnType {
  token: string;
}
