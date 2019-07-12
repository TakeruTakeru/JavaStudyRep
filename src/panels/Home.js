import React from "react";
import GoldenLayout from "golden-layout";
import SideBar from "panels/SideBar";
import SplitPane from "react-splitter-layout";
import { GoldenLayoutConfig } from "config";
import GoldenLayoutManager from "panels/GoldenLayoutManager";

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
    const { uiState } = this.props.store;

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
          <SideBar toggleSideBar={uiState.toggleSideBar} />
          <div id="gl-container">
            <div className="container-header">
              <h4>私の 2 つの人格には共通の記憶がある</h4>
            </div>
            <div ref={node => (this.node = node)} />
          </div>
        </SplitPane>
      </div>
    );
  }
}
