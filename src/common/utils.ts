const DEFAULT_TITLE = 'Deno中文社区';

export function setDocumentTitle(title: string = '') {
  if (title) {
    document.title = `${title} - ${DEFAULT_TITLE}`;
  } else {
    document.title = DEFAULT_TITLE;
  }
}
