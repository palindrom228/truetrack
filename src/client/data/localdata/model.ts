import Realm, {BSON, ObjectSchema} from "realm";

import {Client as ClientDto} from "../api/models";

export class Client extends Realm.Object<Client> {
  _id: BSON.ObjectId;
  name: string;
  server_id!: string;
  first_name!: string;
  last_name!: string;

  phone!: string;
  telegram_id!: string;
  synced!: boolean;
  static schema: ObjectSchema = {
    name: "Client",
    properties: {
      _id: "objectId",
      name: {type: "string", indexed: "full-text"},
      server_id: {type: "string", indexed: "full-text"},
      first_name: {type: "string", indexed: "full-text"},
      last_name: {type: "string", indexed: "full-text"},
      phone: {type: "string", indexed: "full-text"},
      telegram_id: {type: "string", indexed: "full-text"},
      synced: "bool",
    },
    primaryKey: "_id",
  };

  mapToUsualClient() {
    return {
      last_name: this.last_name,
      first_name: this.first_name,
      id: Number(this.server_id),
      telegram_id: this.telegram_id,
      phone: this.phone,
    } as ClientDto;
  }
}
