import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const connection = await mongoose.connect(String(process.env.MONGO_URL));
    return connection;
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
}
