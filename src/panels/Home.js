import React from "react";
import GoldenLayout from "golden-layout";
import SplitPane from "react-splitter-layout";
import SideBar from "panels/SideBar";
import GoldenLayoutManager from "panels/GoldenLayoutManager";
import { GoldenLayoutConfig } from "config";

const SIDEBAR_MIN_SIZE = 0;
const PANEL_MIN_SIZE = 85;
const PANEL_INITIALIZE_SIZE = 90;
const CUSTOM_SPLITTER_CLASSNAME = "custom-splitter";

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.node = React.createRef();
  }
  componentDidMount() {
    const instance = new GoldenLayout(
      GoldenLayoutConfig,
      window.$("#gl-container")
    );
    GoldenLayoutManager.setInstance(instance);
    this.props.store.uiState.setGoldenLayoutManager(GoldenLayoutManager);
  }

  render() {
    const { uiState, user } = this.props.store;

    return (
      <div className="fit">
        <SplitPane
         customClassName={CUSTOM_SPLITTER_CLASSNAME} 
          percentage={true}
          secondaryInitialSize={PANEL_INITIALIZE_SIZE}
          onDragEnd={uiState.toggleSideBar}
          primaryMinSize={SIDEBAR_MIN_SIZE}
          secondaryMinSize={PANEL_MIN_SIZE}
        >
          <SideBar openAll={uiState.openAll} closeAll={uiState.closeAll} toggleSideBar={uiState.toggleSideBar} />
          <div id="gl-container">
            <div className="container-header">
              <h4>{user.username ? `${user.username}$ ${user.getUserInfo}` : 'Please Login...'}</h4>
            </div>
            <div ref={node => (this.node = node)} />
          </div>
        </SplitPane>
      </div>
    );
  }
}
