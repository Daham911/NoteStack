// Import axios to make HTTP requests
import axios from "axios";

// Determine the base URL depending on the environment
// In development, use localhost; in production, use relative /api path
const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

// Create an axios instance with the base URL
// This allows us to reuse this instance for all API calls
const api = axios.create({
  baseURL: BASE_URL,
});

// Export the axios instance to use in other parts of the app
export default api;
