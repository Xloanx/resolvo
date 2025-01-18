import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function humanReadableDate(timestamp = Date.now()) {
  const date = new Date(timestamp); // Convert to Date object

  const formattedDate = new Intl.DateTimeFormat('en-US', {
  weekday: 'short', // Short weekday, e.g., Wed
  month: 'short',   // Short month, e.g., Jan
  day: 'numeric',   // Numeric day, e.g., 8
  year: 'numeric',  // Full year, e.g., 2025
  }).format(date);

  return formattedDate;
}