// Import Link component from react-router for navigation
import { Link } from "react-router";

// Import PlusIcon from lucide-react for the "New Note" button
import { PlusIcon } from "lucide-react";

// Navbar component for the top header of the app
const Navbar = () => {
  return (
    // Header container with background and bottom border
    <header className="bg-base-300 border-b border-base-content/10">
      {/* Center content and add padding */}
      <div className="mx-auto max-w-6xl p-4">
        {/* Flex container to space out title and button */}
        <div className="flex items-center justify-between">
          {/* App title */}
          <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
            NoteStack
          </h1>

          {/* Right side: New Note button */}
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              {/* Plus icon next to text */}
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

// Export Navbar component to use in other parts of the app
export default Navbar;
