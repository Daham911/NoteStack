// Import mongoose library to interact with MongoDB
import mongoose from "mongoose";

// Function to connect to MongoDB database
export const ConnectDB = async () => {
  try {
    // Try to connect using the MongoDB URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);

    // If successful, log a success message
    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    // If there’s an error, log the error message
    console.error("Error connecting to MongoDB", error);

    // Exit the application with failure code (1)
    process.exit(1);
  }
};
