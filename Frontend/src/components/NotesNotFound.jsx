// Import Notebook icon from lucide-react
import { NotebookIcon } from "lucide-react";

// Import Link for navigation to the create note page
import { Link } from "react-router";

// Component to display when no notes are found
const NotesNotFound = () => {
  return (
    // Centered container with spacing and padding
    <div className="flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
      {/* Icon inside a rounded background */}
      <div className="bg-primary/10 rounded-full p-8">
        <NotebookIcon className="size-10 text-primary" />
      </div>

      {/* Main heading */}
      <h3 className="text-2xl font-bold">No notes yet</h3>

      {/* Subtext encouraging the user to create a note */}
      <p className="text-base-content/70">
        Ready to organize your thoughts? Create your first note to get started
        on your journey.
      </p>

      {/* Button linking to the create note page */}
      <Link to="/create" className="btn btn-primary">
        Create Your First Note
      </Link>
    </div>
  );
};

// Export component for use in other parts of the app
export default NotesNotFound;
