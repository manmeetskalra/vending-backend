import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./core/routes";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("DB connected successfully");
  } catch (error) {
    console.error("DB connection failed:", error);
    process.exit(1);
  }
};
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
