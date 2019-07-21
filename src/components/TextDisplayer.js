import React from "react";
import { Icon } from "antd";
import moment from "moment";

const ConsoleLine = props => {
  const { name, icon, onEnterKeyDown, text } = props;
  const userIcon = icon ? icon : "user";
  const textLine = text ? (
    <span className="console-input-log">{text}</span>
  ) : (
    <span>
      {moment().format("MMMM D H:mm:ss")}
      <input onKeyDown={onEnterKeyDown} className="console-input" />
    </span>
  );
  return (
    <div>
      <span style={{ fontSize: "1rem" }}>
        <Icon className="console-icon" type={userIcon} />
        <span className="console-username">{name}</span>
      </span>
      {textLine}
    </div>
  );
};

export { ConsoleLine };
