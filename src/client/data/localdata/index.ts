import {Realm} from "@realm/react";
import {createRealmContext} from "@realm/react";
import {BSON} from "realm";

import {Client} from "~/client/data/localdata/model";
import {
  Client as ClientDto,
  ClientWithoutId,
} from "~client/data/api/models/index";
export const SyncedRealmContext = createRealmContext({
  // Pass all of your models into the schema value.
  schema: [Client],
});

export class ClientLocalDataSource {
  private async getRealm() {
    const realm = Realm.open({schema: [Client]});
    return realm;
  }
  getClients = async () => {
    try {
      const realm = await this.getRealm();
      return realm.objects(Client).map(client => client.mapToUsualClient());
    } catch (error) {
      return [];
    }
  };
  addClient = async (client: ClientWithoutId, uniqId: string) => {
    const realm = await this.getRealm();
    console.log(uniqId);
    realm.write(() => {
      realm.create(Client, {
        _id: new BSON.ObjectId(),
        name: client.first_name + " " + client.last_name,
        first_name: client.first_name,
        last_name: client.last_name,
        phone: client.phone,
        telegram_id: client.telegram_id,
        server_id: uniqId,
        synced: false,
      });
      console.log("Saved");
    });
  };

  removeClient = async (id: string) => {
    const realm = await this.getRealm();
    realm.write(() => {
      const client = realm.objects(Client).find(it => it.server_id === id);
      realm.delete(client);
      console.log("Removed");
    });
  };

  setClientSynced = async (client: ClientDto, tempId: string) => {
    const realm = await this.getRealm();
    realm.write(() => {
      const unsyncedCLient = realm
        .objects(Client)
        .find(value => value.server_id === tempId);
      if (unsyncedCLient) {
        console.log("Unsynced Client : ", unsyncedCLient);
        unsyncedCLient.server_id = String(client.id);
        unsyncedCLient.synced = true;
      }
    });
  };
  addClients = async (clients: ClientDto[]) => {
    const realm = await this.getRealm();
    realm.write(() => {
      const existObjects = realm.objects(Client);
      const notExisted = clients.filter(
        value =>
          !existObjects.find(client => String(value.id) === client.server_id),
      );
      existObjects.forEach(client => {
        const serverClient = clients.find(
          item => String(item.id) === client.server_id,
        );

        if (serverClient) {
          client.last_name = serverClient.last_name;
          client.first_name = serverClient.first_name;
          client.phone = serverClient.phone;
          client.telegram_id = serverClient.telegram_id;
          client.name = serverClient.first_name + " " + serverClient.last_name;
          client.synced = true;
        }
      });
      notExisted.forEach(client => {
        realm.create(Client, {
          _id: new BSON.ObjectId(),
          name: client.first_name + " " + client.last_name,
          first_name: client.first_name,
          last_name: client.last_name,
          phone: client.phone,
          telegram_id: client.telegram_id,
          server_id: String(client.id),
          synced: true,
        });
      });
    });
  };
}

export const clientLocalDataSource = new ClientLocalDataSource();
