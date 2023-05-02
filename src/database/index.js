import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set("strictQuery", true);

dotenv.config();

async function db() {
  try {
    await mongoose.connect(
      "mongodb+srv://lethanhancr7112001:Thanhanvodoi123%40@cluster0.hm7ssdc.mongodb.net/socials"
    );
    console.log("connected");
  } catch (error) {
    console.log("Failed");
  }
}
export default db;
