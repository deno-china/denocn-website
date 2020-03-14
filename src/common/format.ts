import dayjs from "dayjs";

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function formatDate(date?: string): string {
  if (!date) return "";
  return dayjs(date).format(DATE_FORMAT);
}
