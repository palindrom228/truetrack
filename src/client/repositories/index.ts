import {v4 as uuid} from "uuid";

import "react-native-get-random-values";

import {clientApi, ClientApiErrors, ClientsApi} from "~client/data/api/";
import {Client as ClientDto, ClientWithoutId} from "~client/data/api/models";
import {
  ClientLocalDataSource,
  clientLocalDataSource,
} from "~client/data/localdata/";

class ClientRepository {
  constructor(
    private apiSource: ClientsApi = clientApi,
    private localSource: ClientLocalDataSource = clientLocalDataSource,
  ) {}

  updateClients = async () => {
    const serverData = await this.getClientsFromServer();
    if (Array.isArray(serverData)) {
      this.addClientsToDataBase(serverData);
    }
  };

  getClinents = async () => {
    return await this.localSource.getClients();
  };

  getClientFromLocalSource = async () => {
    return this.localSource.getClients();
  };

  getClientsFromServer = async () => {
    return await this.apiSource.getClients();
  };

  addClient = async (client: ClientWithoutId) => {
    console.log(client);
    const uniqId = uuid();
    let isNetworkError = true;
    try {
      await this.addClientToDataBase(client, uniqId);
    } catch (error) {
      console.log(error);
    }

    try {
      const serverClient = await this.addClientToServer(client);
      if (typeof serverClient !== "string") {
        await this.localSource.setClientSynced(serverClient, uniqId);
      }
      if (serverClient === ClientApiErrors.ALRADY_EXIST) {
        await this.localSource.removeClient(uniqId);
        isNetworkError = false;
        throw new Error(serverClient);
      }
    } catch (error) {
      console.log(error);
      if (!isNetworkError) {
        throw error;
      }
    }

    return await this.getClientFromLocalSource();
  };

  addClientToServer = async (client: ClientWithoutId) => {
    return await this.apiSource.addClient(client);
  };

  addClientToDataBase = async (client: ClientWithoutId, id: string) => {
    console.log(id);
    return await this.localSource.addClient(client, id);
  };
  addClientsToDataBase = async (clients: ClientDto[]) => {
    return await this.localSource.addClients(clients);
  };
  sync = async () => {};

  tryToSync = async () => {};
}

export const clientRepository = new ClientRepository();
