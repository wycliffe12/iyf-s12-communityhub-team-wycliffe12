
// Check whether a post contains valid text
export function validatePostContent(content) {
  return content.trim().length > 0;
}

// Get the initials from a person's name
export function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase())
    .slice(0, 2)
    .join("");
}

// Format a date for displaying on a post
export function formatPostDate(date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(date));
}
