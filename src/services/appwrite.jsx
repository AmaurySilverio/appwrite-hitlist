import { Client, Databases, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67b45e3f000226b7efac");

const databases = new Databases(client);

const promise = databases.createDocument(
  "67b46d2e000fabe80d00",
  "67b46dfe000104c4421d",
  ID.unique(),
  {
    name: "Wawa",
    location: "Philadelphia, PA",
    position: "Software Engineer",
    priority: true,
  }
);

promise.then(
  function (response) {
    console.log(response);
  },
  function (error) {
    console.log(error);
  }
);
