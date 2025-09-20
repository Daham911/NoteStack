// Import React and routing components
import React from "react";
import { Route, Routes } from "react-router";

// Import pages
import { HomePage } from "./pages/HomePage";
import { CreatePage } from "./pages/CreatePage";
import { NoteDetailPage } from "./pages/NoteDetailPage";

// Main App component where all routes are defined
const App = () => {
  return (
    <div>
      {/* Routes component defines all page routes */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />

        {/* Create new note page route */}
        <Route path="/create" element={<CreatePage />} />

        {/* Note detail page route with dynamic note ID */}
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
};

// Export App component for rendering in index.js
export default App;
