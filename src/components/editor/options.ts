const editorOptions = {
  spellChecker: false,
  renderingConfig: {
    singleLineBreaks: false,
    codeSyntaxHighlighting: true
  },
  promptURLs: true,
  promptTexts: {
    image: "输入URL地址",
    link: "输入链接地址"
  },
  toolbar: [
    "bold",
    "italic",
    "strikethrough",
    "heading",
    "code",
    "quote",
    "unordered-list",
    "ordered-list",
    "clean-block",
    "link",
    "image",
    "table",
    "horizontal-rule",
    "|",
    "preview",
    "side-by-side",
    "fullscreen"
  ]
};

export default editorOptions;
