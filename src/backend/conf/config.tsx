const environmentVariables = {
    appwriteUrl: String(import.meta.env.VITE_URL), 
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VIET_DATABASE_ID),
    appweiteCollectionId: String(import.meta.env.VITE_COLLECTION_ID)
};

export default environmentVariables;
