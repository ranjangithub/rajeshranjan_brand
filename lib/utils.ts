/** Convert YYYY-MM-DD (or any Date-parseable string) to MM/DD/YYYY */
export function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  if (!year || !month || !day) return dateStr;
  return `${month}/${day}/${year}`;
}
