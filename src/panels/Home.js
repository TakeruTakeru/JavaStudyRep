import GoldenLayout from "golden-layout";
import React from "react";
import SideBar from "panels/SideBar";
import SplitPane from "react-splitter-layout";
import { GoldenLayoutConfig } from "config";
import { registerComponent, openPanel } from "panels/panelDefs";
import 'golden-layout/src/css/goldenlayout-base.css';
import 'golden-layout/src/css/goldenlayout-dark-theme.css';
import "react-splitter-layout/lib/index.css";

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setNode = this.setNode.bind(this);
    this.node = React.createRef();
  }
  componentDidMount() {
    const instance = new GoldenLayout(GoldenLayoutConfig, window.$("#gl-container"));
    registerComponent(instance);
    instance.init();
    this.instance = instance;
    let addMenuItem = (title, text) => {
      var element = document.createElement("li");
      element.textContent = text;
      document.getElementById("menu-container").append(element);
      element.addEventListener("click", e => {
        openPanel(this.instance, e.target.innerText)
      });
    };
    addMenuItem("Hoge_A", "hogeA");
    addMenuItem("Hoge_B", "hogeB");
  }

  setNode(node) {
    this.node = node;
  }

  render() {
    return (
      <div className="fit">
        <SplitPane
        //   onSecondaryPaneSizeChange={e => console.log(this.instance)}
          secondaryInitialSize={800}
        >
          <SideBar />
          <div>
            <div id="gl-container">
                <div ref={this.setNode} />
            </div>
            </div>
        </SplitPane>
      </div>
    );
  }
}
