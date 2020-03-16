import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ForEditor from "for-editor";
import React, { useEffect, useMemo } from "react";
import "./index.less";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

export default function Editor(props: EditorProps) {
  const { value, onChange } = props;

  const isMobile = useMemo(() => {
    if (window && window.screen?.width < 450) {
      return true;
    } else {
      return false;
    }
  }, []);

  useEffect(() => {
    const listener = (event: ClipboardEvent) => {
      if (event.clipboardData) {
        const { clipboardData } = event;
        if (clipboardData.items) {
          let blob;
          for (let i = 0; i < clipboardData.items.length; i += 1) {
            if (clipboardData.items[i].type.indexOf("image") !== -1) {
              blob = clipboardData.items[i].getAsFile();
              break;
            }
          }
          if (blob) {
            const reader: FileReader = new FileReader();
            reader.onload = async (evt: any) => {
              //   const base64 = evt.target.result;
              //   const path = await uploadBase64(base64);
              //   drawImage(editor.current, path);
            };
            reader.readAsDataURL(blob);
          }
        }
      }
    };
    document.addEventListener("paste", listener);
    return () => document.removeEventListener("paste", listener);
  }, []);

  return (
    <div>
      <div className="editor-tips">
        <FontAwesomeIcon icon={faInfoCircle} />
        可以粘贴上传图片
      </div>
      {isMobile ? (
        <textarea
          className="simple-editor"
          value={value}
          onChange={({ target: { value } }) => onChange(value)}
        />
      ) : (
        <ForEditor value={value} onChange={onChange} />
      )}
    </div>
  );
}
