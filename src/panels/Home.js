import GoldenLayout from "golden-layout";
import React from "react";
import ReactDOM from "react-dom";
import { Search } from "components/DataEntry";

window.React = React;
window.ReactDOM = ReactDOM;



class HogeA extends React.PureComponent {
  render() {
    return (
      <div id="hogeA">
        <h2>hogeA</h2>
        <Search width={100} onSearch={this.props.onSearch} />
      </div>
    );
  }
}

class HogeB extends React.PureComponent {
  render() {
    return (
      <div id="hogeB">
        <h2>hogeB</h2>
        <Search width={100} onSearch={this.props.onSearch} />
      </div>
    );
  }
}

export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.setNode = this.setNode.bind(this);
    this.node = React.createRef();
    
  }
  componentDidMount() {
    const config = {
      content: [
        {
          type: "row",
          content: [
            {
              type: "stack",
              width: 60,
              content: [
                {
                  title: "A react component",
                  type: "react-component",
                  component: "HogeA",
                },
                {
                  title: "Another react component",
                  type: "react-component",
                  component: "HogeB",
                }
              ]
            }
          ]
        }
      ]
    };
    /* you can pass config as prop, or use a predefined one */
    const instance = new GoldenLayout(
      config,
      document.getElementById("golden-root")
    );
    instance.registerComponent("HogeA", HogeA);
    instance.registerComponent("HogeB", HogeB);
    /* register components or bind events to your new instance here */
    instance.init();
    this.instance = instance;
    let addMenuItem = (title, text) => {
        var element = document.createElement('li');
        element.textContent = text;
        console.log(element)
        document.getElementById("menuContainer").append(element);
      
        var newItemConfig = {
          title: title,
          type: "react-component",
          component: "HogeA",
        };

        element.addEventListener('click', () => {
            console.log(this.instance)
          this.instance.root.contentItems[0].addChild(newItemConfig);
        });
      };
    addMenuItem('HogeA', 'HogeA');
  }

  setNode(node) {
    this.node = node;
  }

  render() {
    return (
      <div>
        <ul id="menuContainer" />
        <div id="golden-root" style={{ height: "2000px", width: "2000px" }}>
          <div ref={this.setNode} />
        </div>
      </div>
    );
  }
}
