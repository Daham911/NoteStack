// Import Express framework
import express from "express";

// Import controller functions to handle note operations
import {
  getAllnotes,
  getNoteById,
  createANote,
  updateANote,
  deleteANote,
} from "../controllers/notesController.js";

// Create a new router instance
const router = express.Router();

// Define routes and connect them to corresponding controller functions

// GET all notes
router.get("/", getAllnotes);

// GET a single note by ID
router.get("/:id", getNoteById);

// POST a new note
router.post("/", createANote);

// PUT update an existing note by ID
router.put("/:id", updateANote);

// DELETE a note by ID
router.delete("/:id", deleteANote);

// Export the router to use it in the main app
export default router;
