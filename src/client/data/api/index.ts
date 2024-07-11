import {BASE_DEV_URL} from "@env";
import axios, {AxiosError, InternalAxiosRequestConfig} from "axios";

import {Client, ClientWithoutId} from "./models";
import {ClientApiConfigs} from "./paths";

import {tokenDataSource} from "~auth/data/tokenstore";

const mainApi = axios.create({
  baseURL: BASE_DEV_URL,
});

const onRequestError = (error: AxiosError): Promise<ClientsError> => {
  console.log("Error handled : ", error.response?.status);
  switch (error.response?.status) {
    case 409:
      return Promise.resolve({data: ClientApiErrors.ALRADY_EXIST});
    case 404:
      return Promise.resolve({data: ClientApiErrors.NOT_FOUND});
    default:
      return Promise.resolve({data: ClientApiErrors.UNHANDLED});
  }
};

interface ClientsError {
  data: string;
}

export enum ClientApiErrors {
  ALRADY_EXIST = "Client Alrady Exist",
  NOT_FOUND = "not found",
  UNHANDLED = "Unhandled Error",
}

mainApi.interceptors.response.use(response => {
  return response;
}, onRequestError);
export class ClientsApi {
  getClients = async () => {
    const data = await mainApi.get<Client[] | ClientApiErrors>(
      ClientApiConfigs.requestPaths.clients,
    );
    return data.data;
  };

  addClient = async (client: ClientWithoutId) => {
    const data = await mainApi.post<Client | ClientApiErrors>(
      ClientApiConfigs.requestPaths.addClient,
      client,
    );
    console.log(data.data);
    return data.data;
  };
}
export const clientApi = new ClientsApi();

mainApi.interceptors.request.use(
  async (config: InternalAxiosRequestConfig<any>) => {
    try {
      const token = await tokenDataSource.getToken();
      config.headers.Authorization = "Token " + token;
    } catch (error) {
      console.log(error);
    }

    return config;
  },
);
