import { ReactElementLike } from "prop-types";
import React, { FunctionComponent } from "react";
import "./Base.less";

interface basePanelProps {
  header?: ReactElementLike | string;
  className?: string;
}

const BasePanel: FunctionComponent<basePanelProps> = props => {
  return (
    <div className={`base-panel ${props.className}`}>
      <div className="header">{props.header}</div>
      <div className="body">{props.children}</div>
    </div>
  );
};

export default BasePanel;
