import React from 'react';
import { Home } from 'panels/Home';
import "golden-layout/src/css/goldenlayout-base.css";
import "golden-layout/src/css/goldenlayout-dark-theme.css";
import "react-splitter-layout/lib/index.css";
import 'antd/dist/antd.css';
import 'index.css';

function App() {
  return (
    <div className="fit">
      <Home ref={React.createRef()}/>
    </div>
  );
}

export default App;
