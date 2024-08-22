import { Client, Storage } from "appwrite";
import environmentVariables from "../conf/config";

class StorageService {
  client = new Client();
  bucket;

  constructor() {
    this.client.setEndpoint(environmentVariables.appwriteUrl);
    this.client.setProject(environmentVariables.appwriteProjectId);
    this.bucket = new Storage(this.client);
  }
}

const storageService = new StorageService();

export default storageService;
