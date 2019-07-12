import React from "react";
import { Icon } from "antd";

const FolderMenuItem = props => {
  const { isOpen, onClick, text } = props;
  const name = isOpen ? "folder-open" : "folder";
  return (
    <div onClick={onClick} style={{"whiteSpace": "nowrap"}} >
      <Icon type={name} style={{"marginRight": "3px"}}/>
      {text}
    </div>
  );
};

export { FolderMenuItem };
