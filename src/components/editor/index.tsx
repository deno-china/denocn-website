import ForEditor from "for-editor";
import React, { useEffect } from "react";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

export default function Editor(props: EditorProps) {
  const { value, onChange } = props;

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

  return <ForEditor value={value} onChange={onChange} />;
}
