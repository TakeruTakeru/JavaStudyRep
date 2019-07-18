import React from "react";
import GoldenLayoutManager from "panels/GoldenLayoutManager";
import { FolderMenuItem, SideBarMenu } from "components/Icon";

const COMPONENT_CONFIG =  GoldenLayoutManager.getComponentConfig();

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
          {COMPONENT_CONFIG.map(conf =>{
            return <MenuItem key={conf.key} title={conf.title} componentName={conf.key} onClick={this.onClickMenuItem} />
          })}
        </ul>
      </div>
    );
  }
}

const MenuItem = props => {
  const { title, onClick, componentName } = props;
  return (
    <li className="sidebar-tab-item" onClick={() => onClick(componentName)}>
      <FolderMenuItem
        title={title}
        isOpen={false}
      />
    </li>
  );
};

export default SideBar;
