import React from "react";
import { LoginForm } from "components/DataEntry";

class Login extends React.PureComponent {
  onSubmit = e => {
    this.props.store.updateUserInfo(e.username, e.password);
  };

  render() {
    const { username, status } = this.props.store;
    const title = `Hello ${username || ""}!!`;
    const stats =
      status === "fine"
        ? "You look good today!!"
        : status === "soso"
        ? "Have a nice day!"
        : "";
    return (
      <div style={{ textAlign: "center", fontSize: "1.3rem" }}>
        <div
          style={{
            width: "250px",
            textAlign: "center",
            margin: "auto",
            marginTop: "200px"
          }}
        >
          <h3 style={{ color: "white" }}>{title}</h3>
          <p style={{ color: "white", margin: "0px" }}>{stats}</p>
          <LoginForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

export default Login;
