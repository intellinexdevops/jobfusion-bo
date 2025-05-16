import mongoose from "mongoose";

const MONGO_URI_MAIN = process.env.MONGO_URI_MAIN as string;

if (!MONGO_URI_MAIN) {
  throw new Error("Please define the MONGO_URI_MAIN in your .env.local");
}

async function connect() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

connect().then((error) => console.error(error));
