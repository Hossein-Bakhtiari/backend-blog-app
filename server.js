import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import {
  errorResponserHandler,
  invalidPathHandler,
} from "./middleware/errorHandler.js";

// Routes
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is runniug...");
});

app.use("/api/users", userRoutes);

// Custom error handler
app.use(invalidPathHandler);
app.use(errorResponserHandler);

const PORT = process.env.Port || 5000;
app.listen(PORT, () => console.log(`Server is runnig on port ${PORT}`));
