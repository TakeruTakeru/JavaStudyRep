import React from "react";
import GoldenLayoutManager from "panels/GoldenLayoutManager";
import { FolderMenuItem } from "components/Icon";

class SideBar extends React.PureComponent {

  onClickMenuItem = componentName => {
    GoldenLayoutManager.openPanel(componentName);
  }

  render() {
    return (
      <div className="fit sidebar">
        <div className="sidebar-title">
          <h4>TITLE</h4>
        </div>
        <ul id="menu-container">
          <MenuItem onClick={this.onClickMenuItem} text="hogeA"/>
          </ul>
      </div>
    );
  }
}

const MenuItem = props => {
  const { text, onClick } = props;
  return(
    <li>
      <FolderMenuItem text={text} isOpen={true} onClick={() => onClick(text)} />
    </li>
  )
}

export default SideBar;
