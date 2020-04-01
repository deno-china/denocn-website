import GlobalData from "../../common/global";

export async function getTopics(
  type: string,
  page: number = 1,
  size: number = 10
) {
  const {
    data: { list: topics = [], total }
  } = await fetch(
    `${GlobalData.apiBase}/api/topic/${type}?page=${page}&size=${size}`
  ).then(res => res.json());

  return { topics, total, page, size };
}
