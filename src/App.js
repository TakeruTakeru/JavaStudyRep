import React from 'react';
import { Home } from 'panels/Home';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="fit">
      <Home ref={React.createRef()}/>
    </div>
  );
}

export default App;
