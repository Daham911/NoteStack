// Function to format a JavaScript Date object into a readable string
export function formatDate(date) {
  // Convert the date to a string in "Month Day, Year" format
  // Example: "Sep 17, 2025"
  return date.toLocaleDateString("en-US", {
    month: "short", // Use abbreviated month name (e.g., Jan, Feb, Mar)
    day: "numeric", // Show numeric day of the month
    year: "numeric", // Show 4-digit year
  });
}
