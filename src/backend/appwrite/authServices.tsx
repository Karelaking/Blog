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
  client = new Client();
  account;

  constructor() {
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
      console.error("Appwrite authService :: createAccount :: error", error);
    }
  }

  // Login to account
  async loginAccount({ email, password }: loginAccountType) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Appwrite authService :: createAccount :: error", error);
    }
  }

  // Guest login to account
  async guestLogin() {
    try {
      await this.account.createAnonymousSession();
    } catch (error) {
      console.error("Appwrite authServices :: guestLogin :: error", error);
    }
  }

  // Get current account
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Appwrite authService :: getCurrentUser :: error", error);
    }
  }

  // Logout from account
  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Appwrite authService :: logOut :: error", error);
    }
  }

  // Update account information
  async updateAccountInfo() {
    // TODO: Update account information
  }

  // Delete account
  async deleteAccount() {
    // TODO: Delete account
  }
}

const authServices = new AuthServices();

export default authServices;
