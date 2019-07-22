import React from "react";
import { Icon } from "antd";
import moment from "moment";

const ConsoleLine = props => {
  const { name, icon, onEnterKeyDown, text, idx } = props;
  const userIcon = icon ? icon : "user";
  const textLine = text ? (
    <span>
      {idx}
      <span className="console-input-log">{text}</span>
    </span>
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

const ResponseLine = props => {
  const { text } = props;
  return <div className="response-log">{text}</div>;
};

export { ConsoleLine, ResponseLine };
