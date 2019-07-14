import { ReplyDetail } from '../store/detail';

const DEFAULT_TITLE = 'Deno中文社区';

export function setDocumentTitle(title: string = ''): void {
  if (!document) {
    return;
  }
  if (title) {
    document.title = `${title} - ${DEFAULT_TITLE}`;
  } else {
    document.title = DEFAULT_TITLE;
  }
}

// 解决用户名可能为空的问题
export function getUserName(item: ReplyDetail): string {
  return `${item.author_nick_name || item.author_id}`;
}

// 回复的用户名转换为链接
export function getRealConent(content: string, flagMap: any): string {
  return content.replace(/@\S+/g, (key: string): string => {
    const link = flagMap[key];
    if (link) {
      return `[${key}](${link})`;
    }
    return key;
  });
}
