import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Please provide MONGODB_URI");
}

interface MongooseCached {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCached;
}

let cached: MongooseCached = global.mongoose;

if (!cached) cached = global.mongoose = { conn: null, promise: null };

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { dbName: "urbanshirts", bufferCommands: true })
      .then((res) => res)
      .catch((error) => {
        throw new Error("unable to connnect with database", error.message);
      });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
