import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: './Private.env' });

export const dbClient = new MongoClient("process.env.MONGO_URL");
