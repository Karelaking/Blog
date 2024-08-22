import { Databases, Client, ID } from "appwrite";
import environmentVariables from "../conf/config";

type BlogPostType = {
  title: string;
  content: string;
  featuredImage: string;
  status: "published" | "draft";
  userId: string;
  writer: string;
  timeStamp: string;
};

class DataBaseServices {
  client = new Client();
  dataBase;

  constructor() {
    this.client.setEndpoint(environmentVariables.appwriteUrl);
    this.client.setProject(environmentVariables.appwriteProjectId);
    this.dataBase = new Databases(this.client);
  }

  // Create a new blog post
  async createBlogPost({
    title,
    content,
    featuredImage,
    status,
    userId,
    writer,
    timeStamp
  }: BlogPostType) {
    try {
      await this.dataBase.createDocument(
        environmentVariables.appwriteDatabaseId,
        environmentVariables.appweiteCollectionId,
        ID.unique(),
        { title, content, featuredImage, status, userId, writer, timeStamp }
      );
    } catch (error) {
      console.error(
        "Appwrite database services :: createBlogPost :: error",
        error
      );
      return null;
    }
  }

  // Update a blog post
  async updateBlogPost(
    documentId: string,
    { title, content, status, userId, featuredImage, writer }: BlogPostType
  ) {
    try {
      await this.dataBase.updateDocument(
        environmentVariables.appwriteDatabaseId,
        environmentVariables.appweiteCollectionId,
        documentId,
        { title, content, status, userId, featuredImage, writer }
      );
    } catch (error) {
      console.error(
        "Appwrite database services :: updateBlogPost :: error",
        error
      );
    }
  }

  // Delete a blog post
  async deleteBlogPost(documentId: string) {
    try {
      await this.dataBase.deleteDocument(
        environmentVariables.appwriteDatabaseId,
        environmentVariables.appweiteCollectionId,
        documentId
      );
    } catch (error) {
      console.error(
        "Appwrite database services :: deleteBlog Post :: error",
        error
      );
    }
  }

  // Get a blog post
  async getBlogPost() {
    try {
      await this.dataBase.listDocuments(
        environmentVariables.appwriteDatabaseId,
        environmentVariables.appweiteCollectionId
      );
    } catch (error) {
      console.error(
        "Appwrite database services :: getBlogPost :: error",
        error
      );
    }
  }

  // Get a blog post by Query
  async getBlogPostByQuery(query: string[]) {
    try {
      await this.dataBase.listDocuments(
        environmentVariables.appwriteDatabaseId,
        environmentVariables.appweiteCollectionId,
        query
      );
    } catch (error) {
      console.error(
        "Appwrite database services :: getBlogPostByQuery :: error",
        error
      );
    }
  }
}

const dataBaseServices = new DataBaseServices();

export default dataBaseServices;
