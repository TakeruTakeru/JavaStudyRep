import React from "react";
import { Search } from "components/DataEntry";

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

const ItemConfig = [
  { title: "Hoge_A", type: "react-component", key: "hogeA", component: HogeA },
  { title: "Hoge_B", type: "react-component", key: "hogeB", component: HogeB }
];

function registerComponent(instance) {
  ItemConfig.forEach(config => {
    instance.registerComponent(config.key, config.component);
  });
  console.log("Successfully registered components!");
}

function openPanel(instance, component) {
  let newItemConfig = {
    title: component,
    type: "react-component",
    component: component
  };
  let lastItem = instance.root.contentItems;
  console.log(lastItem)
  if (lastItem.length < 1) {
      console.log(instance)
    instance["cotent"] = [
      {
        type: "row",
        content: []
      }
    ];
    lastItem = instance.root.contentItems;
  }
  lastItem[0].addChild(newItemConfig);
}

export { registerComponent, openPanel };
