import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

const DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";

export function formatDate(date?: string): string {
  if (!date) return "";
  return dayjs(date).format(DATE_FORMAT);
}

export function formatFromNow(date?: string): string {
  if (!date) return "";
  return dayjs(date).fromNow();
}
