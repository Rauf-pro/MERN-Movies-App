import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
import uploadRoutes from "./routes/uploadRoutes.js";

//Files

import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import genreRoutes from "./routes/genreRoutes.js";
import moviesRoutes from "./routes/moviesRoutes.js";

//Configurations

dotenv.config();

//Connect to MongoDB

connectDB();

const app = express();

//Middlewares

app.use(express.json());
app.use(express.urlencoded({ expended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 3000;

// CORS
const cors = require("cors");
app.use(cors());
// Allow specific origin(s)
app.use(cors({
  origin: 'https://yourdeployedsite.com'
}));

//Routes

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/genre", genreRoutes);
app.use("/api/v1/movies", moviesRoutes);
app.use("/api/v1/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
