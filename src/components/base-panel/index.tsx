import cls from "classnames";
import React, { ReactNode } from "react";
import "./index.less";

interface BasePanelProps {
  header?: ReactNode;
  children?: ReactNode;
  style?: "normal" | "white";
  className?: string;
}

export default function BasePanel(props: BasePanelProps) {
  const { header, children, style = "normal", className } = props;
  return (
    <div
      className={cls("base-panel", className, {
        "base-panel-white": style === "white"
      })}
    >
      {header && <div className="header">{header}</div>}
      <div className="body">{children}</div>
    </div>
  );
}
