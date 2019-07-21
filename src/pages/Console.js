import React from "react";
import { ConsoleLine } from "components/TextDisplayer";
import { ActionPullDown } from "components/DataEntry";

class Console extends React.PureComponent {
  onEnterKeyDown = e => {
    const { user, terminal } = this.props;

    if (e.keyCode === 13) {
      const text = e.target.value;
      terminal.onEnterKeyDown(text !== "" ? text : " ");
      e.target.value = "";
    }
  };

  actionHandler = e => {
    const { terminal } = this.props;
    const actionEvents = {
      delete: terminal.clearHistories
    };
    actionEvents[e.key]();
  };

  render() {
    const { user, terminal } = this.props;
    const histories = terminal.getHistories.map((text, idx) => {
      return (
        <li key={idx}>
          <ConsoleLine text={text} name={user.username} />
        </li>
      );
    });

    return (
      <div>
        <div className="console-header">
          <ActionPullDown
            title={"ACTION"}
            menuList={["delete"]}
            handleMenuClick={this.actionHandler}
          />
        </div>
        <ul className="console-list">
          {histories}
          <li key={1}>
            <ConsoleLine
              onEnterKeyDown={this.onEnterKeyDown}
              name={user.username}
            />
          </li>
        </ul>
      </div>
    );
  }
}

export default Console;
