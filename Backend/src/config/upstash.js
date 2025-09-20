// Import Ratelimit for rate-limiting and Redis for storing request data
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

// Load environment variables from the .env file
dotenv.config();

// Create a rate limiter that allows up to 10 requests every 20 seconds
const ratelimit = new Ratelimit({
  // Connect to Redis using credentials from environment variables
  redis: Redis.fromEnv(),

  // Use sliding window algorithm: max 10 requests per 20 seconds
  limiter: Ratelimit.slidingWindow(10, "20 s"),
});

// Export the rate limiter so it can be used in other parts of the project
export default ratelimit;
