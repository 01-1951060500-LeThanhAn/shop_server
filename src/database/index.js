import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set("strictQuery", true);

dotenv.config();

async function db() {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hm7ssdc.mongodb.net/${process.env.DB_DATABASE}`
    );
    console.log("connected");
  } catch (error) {
    console.log("Failed");
  }
}
export default db;
