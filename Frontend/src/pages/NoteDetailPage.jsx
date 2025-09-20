// Import React hooks and libraries
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"; // Routing hooks
import api from "../lib/axios"; // Axios instance for API calls
import toast from "react-hot-toast"; // Toast notifications
import { ArrowLeftIcon, LoaderIcon, Trash2Icon } from "lucide-react"; // Icons

// Component to view and edit a single note
export const NoteDetailPage = () => {
  // State for the note data, loading state, and saving state
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate(); // Hook to programmatically navigate pages
  const { id } = useParams(); // Get note ID from URL

  // Fetch the note data when component mounts or id changes
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`); // GET request to fetch note
        setNote(res.data); // Save note data in state
      } catch (error) {
        console.log("Error in fetching note", error);
        toast.error("Failed to fetch the note"); // Show error notification
      } finally {
        setLoading(false); // Stop loading indicator
      }
    };

    fetchNote();
  }, [id]);

  // Function to delete the note
  const handleDelete = async () => {
    // Confirm deletion with the user
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`); // Send DELETE request
      toast.success("Note deleted"); // Show success notification
      navigate("/"); // Navigate back to home page
    } catch (error) {
      console.log("Error deleting the note:", error);
      toast.error("Failed to delete note"); // Show error notification
    }
  };

  // Function to save changes to the note
  const handleSave = async () => {
    // Validate inputs
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Please add a title or content");
      return;
    }

    setSaving(true); // Show saving state

    try {
      await api.put(`/notes/${id}`, note); // Send PUT request to update note
      toast.success("Note updated successfully");
      navigate("/"); // Navigate back to home page
    } catch (error) {
      console.log("Error saving the note:", error);
      toast.error("Failed to update note"); // Show error notification
    } finally {
      setSaving(false); // Remove saving state
    }
  };

  // Show loading indicator while fetching note
  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    // Main page container
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Back button and delete button */}
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="h-5 w-5" />
              Back to Notes
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="h-5 w-5" />
              Delete Note
            </button>
          </div>

          {/* Card containing the note form */}
          <div className="card bg-base-100">
            <div className="card-body">
              {/* Title input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })} // Update title in state
                />
              </div>

              {/* Content input */}
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered h-32"
                  value={note.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  } // Update content in state
                />
              </div>

              {/* Save button */}
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
