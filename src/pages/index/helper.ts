import GlobalData from "../../common/global";

export async function getTopics(
  type: string,
  page: number = 1,
  pageSize: number = 10
) {
  const {
    data: { list: topics = [], total }
  } = await fetch(`${GlobalData.apiBase}/api/topic/${type}`).then(res =>
    res.json()
  );

  return { topics, total, page, pageSize };
}
