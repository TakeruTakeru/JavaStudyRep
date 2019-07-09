import React from "react";
import { Search } from "components/DataEntry";
class HogeA extends React.PureComponent {
    render() {
      return (
        <div id="panel" className="fit">
          <h2>hogeA</h2>
          <Search width={100} onSearch={this.props.onSearch} />
        </div>
      );
    }
  }
  
  class HogeB extends React.PureComponent {
    render() {
      return (
        <div id="panel" className="fit">
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

export { ItemConfig };