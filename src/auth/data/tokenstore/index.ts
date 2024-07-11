import {SecureStorage} from "~services/storage";

const TokenStorageName = "TokenStore";
const tokenUser = "TokenUser";

class TokenStore {
  constructor(private storage: SecureStorage) {}

  async getToken() {
    return await this.storage.getCreds(TokenStorageName);
  }

  async hasToken() {
    return await this.storage.hasCreds(TokenStorageName);
  }

  async removeToken() {
    return await this.storage.removeCreds(TokenStorageName);
  }

  async setToken(token: string) {
    return await this.storage.saveCreds(TokenStorageName, token, tokenUser);
  }
}

export const tokenDataSource = new TokenStore(new SecureStorage());
