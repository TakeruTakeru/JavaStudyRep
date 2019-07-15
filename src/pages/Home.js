import React from "react";
import { Button } from "antd";

class Home extends React.PureComponent {
  render() {
    const { example } = this.props.store;
    const isProcessing = example.isProcessing ? <div><p>Now Loading...</p></div> : <p>Sleeping.</p>
    return (
      <div style={{ color: "white" }}>
        <div>
          <h3>Home Menu</h3>
        </div>
        <div>
          <h5>Example Usages</h5>
          <Button onClick={() => example.startProcessing()}>Start</Button>
          <Button onClick={() => example.stopProcessing()}>Stop</Button>
          <div>
            {isProcessing}
            <p>{example.whoAmI}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
