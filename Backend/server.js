import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userModel from "./models/userModel.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
// app config
const app = express();
const port = process.env.PORT ||  4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
console.log("Starting database connection...");
connectDB().then(() => {
  console.log("Database connection function executed.");
}).catch((err) => {
  console.log("Error while connecting to DB:", err);
});

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('upload'));
app.use("/api/user",userRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("API Working");
});

// start the server
app.listen(port, () => {
  console.log(`Server started on PORT${port}`);
});
