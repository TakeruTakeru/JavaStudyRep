import React from "react";
import GoldenLayout from "golden-layout";
import SideBar from "panels/SideBar";
import SplitPane from "react-splitter-layout";
import { GoldenLayoutConfig } from "config";
import GoldenLayoutManager from "panels/GoldenLayoutManager";

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
  }

  render() {
    return (
      <div className="fit">
        <SplitPane secondaryInitialSize={800}>
          <SideBar />
          <div>
            <div id="gl-container">
              <div ref={node => (this.node = node)} />
            </div>
          </div>
        </SplitPane>
      </div>
    );
  }
}
