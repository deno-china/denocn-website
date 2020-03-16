interface PageMetadata {
  title?: string;
}

let pageMetadata: PageMetadata = {};

export function getPageMetadata() {
  return pageMetadata;
}

export function setPageMetadata(meta: PageMetadata) {
  pageMetadata = { ...pageMetadata, ...meta };
  if (globalThis.document) {
    if (pageMetadata.title) {
      document.title = pageMetadata.title;
    }
  }
}
