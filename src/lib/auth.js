import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
const client = new MongoClient(process.env.MONGO_URI);
const db = client.db();
export const auth = betterAuth({
    database: mongodbAdapter(db, {
    // Optional: if you don't provide a client, database transactions won't be enabled.
    client
  }),
  //...other options
  emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: { 
    github: { 
      clientId: process.env, 
      clientSecret: process.env, 
    }, 
  }, 
});