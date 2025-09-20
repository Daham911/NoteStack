// Import Zap icon from lucide-react
import { ZapIcon } from "lucide-react";

// Component to display when the user hits the rate limit
const RateLimitedUI = () => {
  return (
    // Container centered with max width and padding
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Card with background, border, rounded corners, and shadow */}
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        {/* Flex container to arrange icon and text side by side on medium screens */}
        <div className="flex flex-col md:flex-row items-center p-6">
          {/* Icon container with background and padding */}
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-primary" />
          </div>

          {/* Text container */}
          <div className="flex-1 text-center md:text-left">
            {/* Main heading */}
            <h3 className="text-xl font-bold mb-2">Rate Limit Reached</h3>

            {/* Message explaining why the user can't proceed */}
            <p className="text-base-content mb-1">
              You've made too many requests in a short period. Please wait a
              moment.
            </p>

            {/* Additional instructions */}
            <p className="text-sm text-base-content/70">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export component for use in other parts of the app
export default RateLimitedUI;
