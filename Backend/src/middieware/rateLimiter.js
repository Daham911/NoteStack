// Import the Upstash rate limiter configuration
import ratelimit from "../config/upstash.js";

// Middleware to limit the number of requests from a user
const rateLimiter = async (req, res, next) => {
  try {
    // Call the rate limiter with a unique key for tracking requests
    const { success } = await ratelimit.limit("my-liit-key");

    // If the user has exceeded the limit, send a 429 response
    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }

    // If under limit, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Log any errors that occur in the rate limiter
    console.log("Ratelimit error", error);

    // Pass the error to the next error-handling middleware
    next(error);
  }
};

// Export the middleware to be used in routes
export default rateLimiter;
