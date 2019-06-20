function _replaceSelection(cm, active, startEnd, url) {
  if (/editor-preview-active/.test(cm.getWrapperElement().lastChild.className))
    return;

  var text;
  var start = startEnd[0];
  var end = startEnd[1];
  var startPoint = cm.getCursor("start");
  var endPoint = cm.getCursor("end");
  if (url) {
    end = end.replace("#url#", url);
  }
  if (active) {
    text = cm.getLine(startPoint.line);
    start = text.slice(0, startPoint.ch);
    end = text.slice(startPoint.ch);
    cm.replaceRange(start + end, {
      line: startPoint.line,
      ch: 0
    });
  } else {
    text = cm.getSelection();
    cm.replaceSelection(start + text + end);

    startPoint.ch += start.length;
    if (startPoint !== endPoint) {
      endPoint.ch += start.length;
    }
  }
  cm.setSelection(startPoint, endPoint);
  cm.focus();
}

function getState(cm, pos?) {
  pos = pos || cm.getCursor("start");
  var stat = cm.getTokenAt(pos);
  if (!stat.type) return {};

  var types = stat.type.split(" ");

  var ret: any = {},
    data,
    text;
  for (var i = 0; i < types.length; i++) {
    data = types[i];
    if (data === "strong") {
      ret.bold = true;
    } else if (data === "variable-2") {
      text = cm.getLine(pos.line);
      if (/^\s*\d+\.\s/.test(text)) {
        ret["ordered-list"] = true;
      } else {
        ret["unordered-list"] = true;
      }
    } else if (data === "atom") {
      ret.quote = true;
    } else if (data === "em") {
      ret.italic = true;
    } else if (data === "quote") {
      ret.quote = true;
    } else if (data === "strikethrough") {
      ret.strikethrough = true;
    } else if (data === "comment") {
      ret.code = true;
    } else if (data === "link") {
      ret.link = true;
    } else if (data === "tag") {
      ret.image = true;
    } else if (data.match(/^header(\-[1-6])?$/)) {
      ret[data.replace("header", "heading")] = true;
    }
  }
  return ret;
}

export function drawImage(editor, url) {
  var cm = editor.codemirror;
  var stat = getState(cm);
  var options = editor.options;
  _replaceSelection(cm, stat.image, options.insertTexts.image, url);
}
