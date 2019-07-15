import React from "react";
import GoldenLayoutManager from "panels/GoldenLayoutManager";
import { FolderMenuItem, SideBarMenu } from "components/Icon";

const COMPONENT_KEYS =  GoldenLayoutManager.getComponentKeys();

class SideBar extends React.PureComponent {

  onClickMenuItem = componentName => {
    GoldenLayoutManager.openPanel(componentName);
  };

  render() {
    return (
      <div className="fit sidebar">
        <div className="sidebar-title">
          <h4>TITLE</h4>
        </div>
        <SideBarMenu openAll={this.props.openAll} closeAll={this.props.closeAll} />
        <ul id="menu-container">
          {COMPONENT_KEYS.map(key =>{
            return <MenuItem key={key} onClick={this.onClickMenuItem} text={key} />
          })}
        </ul>
      </div>
    );
  }
}

const MenuItem = props => {
  const { text, onClick } = props;
  return (
    <li className="sidebar-tab-item">
      <FolderMenuItem
        text={text}
        isOpen={false}
        onClick={() => onClick(text)}
      />
    </li>
  );
};

export default SideBar;
