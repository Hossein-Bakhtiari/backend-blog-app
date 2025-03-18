import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";

// Routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();
const app = express();
const corsOptions = {
  exposedHeaders: "*",
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is runniug...");
});

app.use("/api/users", userRoutes);

// static assets
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));


// Custom error handler
app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
