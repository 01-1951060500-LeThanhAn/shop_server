import express from "express";
import dotenv from "dotenv";
import db from "./database/index.js";
import userRoutes from "./routes/userRoutes.js";
import productRoute from "./routes/productRoute.js";
import cartRoutes from "./routes/cartRoute.js";
import orderRoutes from "./routes/orderRoute.js";
import checkoutRote from "./routes/checkoutRoute.js";
import commentRoute from "./routes/commentRoute.js";
import cors from "cors";
const app = express();
db();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);
app.use("/product", productRoute);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/checkout", checkoutRote);
app.use("/comment", commentRoute);
app.listen(process.env.PORT || 8000, async () => {
  console.log("Server is running");
});
