import { Account, Client } from "appwrite";
import environmentVariables from "../conf/config";

class DataBaseServices{
    client;
    account;

    constructor(){
        this.client = new Client();
        this.client.setEndpoint(environmentVariables.appwriteUrl);
        this.client.setProject(environmentVariables.appwriteProjectId);
        this.account = new Account(this.client);
    }
}

const dataBaseServices = new DataBaseServices();

export default dataBaseServices;
