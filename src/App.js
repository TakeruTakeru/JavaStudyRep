import React from 'react';
import { Home } from 'panels/Home';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      Hello React
      <Home ref={React.createRef()}/>
    </div>
  );
}

export default App;
