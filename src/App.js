import React from 'react';
import { Home } from 'panels/Home';
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-dark-theme.css";
import "react-splitter-layout/lib/index.css";
import 'antd/dist/antd.css';
import 'index.css';
import store from 'store';
import { observer } from 'mobx-react';

observer(Home)

function App() {
  return (
    <div className="fit">
      <Home store={store} ref={React.createRef()}/>
    </div>
  );
}

export default App;
