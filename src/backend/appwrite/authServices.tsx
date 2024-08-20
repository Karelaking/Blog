import { Account, Client, ID } from "appwrite";
import environmentVariables from "../conf/config";

type createAccountType = {
  email: string;
  password: string;
  name: string;
};

type loginAccountType = {
  email: string;
  password: string;
};

class AuthServices {
  client;
  account;

  constructor() {
    this.client = new Client();
    this.client.setEndpoint(environmentVariables.appwriteUrl);
    this.client.setProject(environmentVariables.appwriteProjectId);
    this.account = new Account(this.client);
  }

  // Create a new account
  async createAccount({ email, password, name }: createAccountType) {
    try {
      const newAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (newAccount) {
        this.loginAccount({ email, password });
      } else {
        return newAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  // Login to account
  async loginAccount({ email, password }: loginAccountType) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  // Get current account
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
  }

  // Logout from account
  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
}

const authServices = new AuthServices();

export default authServices;
