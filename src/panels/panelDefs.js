import { observer } from 'mobx-react';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Console from 'pages/Console';

import store from 'store';

const ItemConfig = [
  { title: "home", type: "react-component", key: "home", component: observer(Home), props: { store: store } },
  { title: "Login", type: "react-component", key: "login", component: observer(Login), props: { store: store.user } },
  { title: "Terminal", type: "react-component", key: "console", component: observer(Console), props: { user: store.user, terminal: store.terminal } }  
];

export { ItemConfig };