// Import mongoose library to define schemas and models
import mongoose from "mongoose";

// Step 1: Create a schema for the Note collection
// Schema defines the structure of the documents in MongoDB
const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String, // Title must be a string
      required: true, // Title is required
    },
    content: {
      type: String, // Content must be a string
      required: true, // Content is required
    },
  },
  { timestamps: true } // Automatically add createdAt and updatedAt fields
);

// Step 2: Create a model based on the schema
// The model allows us to interact with the Note collection in MongoDB
const Note = mongoose.model("Note", noteSchema);

// Export the model to use it in other parts of the project
export default Note;
