import React from "react";
import { Icon, Tooltip } from "antd";

const FolderMenuItem = props => {
  const { isOpen, onClick, text } = props;
  const name = isOpen ? "folder-open" : "folder";
  return (
    <span onClick={onClick} style={{ whiteSpace: "nowrap" }}>
      <Icon type={name} style={{ marginRight: "3px" }} />
      {text}
    </span>
  );
};

const SideBarMenu = props => {
  const { closeAll, openAll } = props;
  return (
    <div>
      <ul className="sidebar-menu">
        <li className="sidebar-menu-item">
          <Tooltip placement="bottomRight" title="Open All Tabs">
            <span onClick={openAll}>
              <Icon type="folder-open" />
            </span>
          </Tooltip>
        </li>
        <li className="sidebar-menu-item">
          <Tooltip placement="bottomRight" title="Close All Tabs">
            <span onClick={closeAll}>
              <Icon type="close-square" />
            </span>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export { FolderMenuItem, SideBarMenu };
