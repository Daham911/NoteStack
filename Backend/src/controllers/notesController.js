// Import the Note model to interact with notes in the database
import Note from "../models/Note.js";

// Controller to get all notes from the database
export const getAllnotes = async (req, res) => {
  try {
    // Fetch all notes and sort by newest first (descending order by createdAt)
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes); // Send notes as JSON response
  } catch (error) {
    console.error("Error in getAllNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to get a single note by its ID
export const getNoteById = async (req, res) => {
  try {
    // Find note by ID from request parameters
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found" });

    res.status(200).json(note); // Send the found note as JSON
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to create a new note
export const createANote = async (req, res) => {
  try {
    const { title, content } = req.body; // Get title and content from request body
    const newNote = new Note({ title, content }); // Create new note instance

    await newNote.save(); // Save note to database
    res.status(201).json({ message: "Note created successfully" });
  } catch (error) {
    console.error("Error in createANote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to update an existing note
export const updateANote = async (req, res) => {
  try {
    const { title, content } = req.body; // Get updated data from request body

    // Find note by ID and update it, return the updated note
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true } // Return the updated note instead of old one
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }

    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.error("Error in updateANote controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Controller to delete a note
export const deleteANote = async (req, res) => {
  try {
    // Find note by ID and delete it
    const deleteANote = await Note.findByIdAndDelete(req.params.id);

    if (!deleteANote)
      return res.status(400).json({ message: "Note not found" });

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in deleteANote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
