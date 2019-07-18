import React from "react";
import { observer } from 'mobx-react';
import { Search } from "components/DataEntry";
import Home from 'pages/Home';
import Login from 'pages/Login';

import store from 'store';

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
  { title: "Hoge_B", type: "react-component", key: "hogeB", component: HogeB },
  { title: "home", type: "react-component", key: "home", component: observer(Home), props: { store: store } },
  { title: "Login", type: "react-component", key: "login", component: observer(Login), props: { store: store.user } },
];

export { ItemConfig };