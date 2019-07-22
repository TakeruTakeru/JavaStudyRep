import React from "react";
import { ConsoleLine, ResponseLine } from "components/TextDisplayer";
import { ActionPullDown } from "components/DataEntry";
import { PageLoader } from "components/Loader";
import { GithubAdapter, LocalAdapter } from "api/client";

const adapterMapper = [
  { title: "Github", key: GithubAdapter },
  { title: "Localhost", key: LocalAdapter }
];
class Console extends React.PureComponent {
  componentDidMount() {
    const { terminal } = this.props;
    terminal.setAdapter(adapterMapper[0].key);
  }

  onEnterKeyDown = e => {
    const { user, terminal } = this.props;

    if (e.keyCode === 13) {
      terminal.switchProcessingState(true);
      const text = e.target.value;
      terminal.onEnterKeyDown(text !== "" ? text : " ").then(() => {
        terminal.switchProcessingState(false);
      });
      e.target.value = "";
    }
  };

  adapterHandler = e => {
    const { terminal } = this.props;
    terminal.setAdapter(adapterMapper[e.key].key);
  };

  actionHandler = e => {
    const { terminal } = this.props;
    terminal.handleAction(e.key);
  };

  render() {
    const { user, terminal, uiState } = this.props;
    const histories = terminal.getHistories.map((text, idx) => {
      return (
        <li key={idx}>
          <ConsoleLine idx={idx} text={text} name={user.username} />
        </li>
      );
    });
    const ResponseList = terminal.getResponses.map((res, idx) => {
      return (
        <li key={idx}>
          <ResponseLine text={res} />
        </li>
      );
    });

    return (
      <div>
        <div className="console-header">
          <h3 style={{ color: "white" }}>Adapter: {terminal.getAdapterName}</h3>
          <ActionPullDown
            title={"ADAPTER"}
            menuList={adapterMapper}
            handleMenuClick={this.adapterHandler}
          />
          <ActionPullDown
            title={"ACTION"}
            menuList={terminal.actionEvents}
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
        <div>
          <PageLoader spinning={terminal.isProcessing} />
          <ul
            style={{ maxHeight: uiState.getHeight() / 3 }}
            className="response-console"
          >
            {ResponseList}
          </ul>
        </div>
      </div>
    );
  }
}

export default Console;
