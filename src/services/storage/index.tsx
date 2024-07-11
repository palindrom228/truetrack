import * as Keychain from "react-native-keychain";

export class SecureStorage {
  constructor(private storage = Keychain) {}
  saveCreds = async (domain: string, data: string, user: string = "") => {
    const result = await this.storage.setInternetCredentials(
      domain,
      user,
      data,
    );
    if (!result) {
      throw new Error("Error while storing data");
    }
  };
  removeCreds = async (domain: string) => {
    return await this.storage.resetInternetCredentials(domain);
  };
  hasCreds = async (domain: string) => {
    try {
      const result = await this.storage.hasInternetCredentials(domain);
      return !!result;
    } catch (error) {
      return false;
    }
  };
  getCreds = async (domain: string) => {
    const result = await this.storage.getInternetCredentials(domain);
    if (result) {
      return result.password;
    } else {
      throw new Error("Error while getting data from Secure storage");
    }
  };
}
