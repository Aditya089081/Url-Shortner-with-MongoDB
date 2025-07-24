import { dbClient } from "../config/dbClient.js";
import dotenv from 'dotenv';
dotenv.config({ path: '../config/private.env' });

const db = dbClient.db(process.env.DATABASE_NAME);
const shortnerCollection = db.collection('Shortners'); // ✅ Use `collection` not `Collection`

export const loadLinks = async () => {
  return shortnerCollection.find().toArray();
};

export const saveLinks = async (link) => {
  return shortnerCollection.insertOne(link);
};

export const getLinkByShortCode = async (shortcode) => {
  return shortnerCollection.findOne({ shortcode });
};
