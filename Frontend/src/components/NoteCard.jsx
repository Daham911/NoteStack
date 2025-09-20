// Import icons from lucide-react for edit and delete actions
import { PenSquareIcon, Trash2Icon } from "lucide-react";

// Import Link for navigation to note details
import { Link } from "react-router";

// Import utility function to format dates
import { formatDate } from "../lib/utils";

// Import axios instance to make API calls
import api from "../lib/axios";

// Import toast for showing notifications
import toast from "react-hot-toast";

// NoteCard component to display individual note
const NoteCard = ({ note, setNotes }) => {
  // Function to handle deleting a note
  const handleDelete = async (e, id) => {
    e.preventDefault(); // Prevent default link navigation

    // Confirm before deleting
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      // Send delete request to backend
      await api.delete(`/notes/${id}`);

      // Remove the deleted note from state to update UI
      setNotes((prev) => prev.filter((note) => note._id !== id));

      // Show success notification
      toast.success("Note deleted successfully");
    } catch (error) {
      console.log("Error in handleDelete", error);
      // Show error notification if delete fails
      toast.error("Failed to delete note");
    }
  };

  return (
    // Link to note details page
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 
      border-t-4 border-solid border-[#7480ff]"
    >
      <div className="card-body">
        {/* Note title */}
        <h3 className="card-title text-base-content">{note.title}</h3>

        {/* Note content (limited to 3 lines) */}
        <p className="text-base-content/70 line-clamp-3">{note.content}</p>

        {/* Card footer with date and actions */}
        <div className="card-actions justify-between items-center mt-4">
          {/* Display formatted creation date */}
          <span className="text-sm text-base-content/60">
            {formatDate(new Date(note.createdAt))}
          </span>

          {/* Edit and Delete actions */}
          <div className="flex items-center gap-1">
            {/* Edit icon (currently not functional, can link to edit page) */}
            <PenSquareIcon className="size-4" />

            {/* Delete button */}
            <button
              className="btn btn-ghost btn-xs text-error"
              onClick={(e) => handleDelete(e, note._id)}
            >
              <Trash2Icon className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Export NoteCard component for use in other parts of the app
export default NoteCard;
