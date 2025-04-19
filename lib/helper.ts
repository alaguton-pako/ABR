export function formatReadableDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
export function formatDurationToMinutes(durationInSeconds: number): string {
  const minutes = Math.floor(durationInSeconds / 60);
  return `${minutes} min${minutes !== 1 ? "s" : ""}`;
}
