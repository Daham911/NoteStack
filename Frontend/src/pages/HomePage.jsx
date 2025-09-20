// Import React hooks and components
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar"; // Navbar component
import RateLimitedUI from "../components/RateLimitedUI"; // UI for rate limit message
import api from "../lib/axios"; // Axios instance for API calls
import toast from "react-hot-toast"; // Toast notifications
import NoteCard from "../components/NoteCard"; // Component to display individual notes
import NotesNotFound from "../components/NotesNotFound"; // Component for empty notes state

// HomePage component to display all notes
export const HomePage = () => {
  // State to track rate limit, notes list, and loading status
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch notes from backend when component mounts
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        // Send GET request to fetch notes
        const res = await api.get("/notes");
        console.log(res.data);

        // Save fetched notes in state
        setNotes(res.data);

        // Reset rate limit state
        setIsRateLimited(false);
      } catch (error) {
        console.log("Error fetching notes");
        console.log(error.response);

        // Check if the error is due to rate limiting
        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes"); // Show error notification
        }
      } finally {
        // Stop loading indicator
        setLoading(false);
      }
    };

    fetchNotes(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Show rate limit message if user exceeded requests */}
      {isRateLimited && <RateLimitedUI />}

      {/* Notes container */}
      <div className="max-w-7xl mx-auto p-4 mt-6">
        {/* Loading indicator */}
        {loading && (
          <div className="text-center text-primary py-10">Loading notes...</div>
        )}

        {/* Show message if there are no notes */}
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {/* Display notes in a responsive grid */}
        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
