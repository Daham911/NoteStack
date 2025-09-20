// Import required libraries
import express from "express"; // Express framework for server
import notesRoutes from "./routes/notesRoutes.js"; // Routes for notes API
import { ConnectDB } from "./config/db.js"; // Function to connect to MongoDB
import dotenv from "dotenv"; // Load environment variables
import rateLimiter from "./middieware/rateLimiter.js"; // Middleware to limit requests
import cors from "cors"; // Middleware for Cross-Origin Resource Sharing

// Load environment variables from .env file
dotenv.config();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5001; // Use environment port or default 5001

// Connect to MongoDB database
ConnectDB();

// ----------------- Middleware -----------------

// Enable CORS to allow requests from frontend (http://localhost:5173)
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Parse incoming JSON requests and put data in req.body
app.use(express.json());

// Apply rate limiting middleware to prevent too many requests
app.use(rateLimiter);

// ----------------- Routes -----------------

// Routes for handling notes API
app.use("/api/notes", notesRoutes);

// ----------------- Start Server -----------------

// Start the server and listen on the specified PORT
app.listen(PORT, () => {
  console.log("Server started on Port:", PORT);
});
