import { action, observable, decorate, computed } from "mobx";

class Terminal {
  histories = [];
  responses = [];
  isProcessing = false;
  adapter;

  setAdapter = adapter => {
    this.adapter = adapter;
  };

  get getAdapterName() {
    return this.adapter ? this.adapter._name : "";
  }

  get getHistories() {
    const length = this.histories.length;
    return (
      this.histories.slice(length < 10 ? 0 : length - 10, length) ||
      this.histories
    );
  }

  get getResponses() {
    const length = this.responses.length;
    const parsedResponses =
      this.responses.slice(length < 10 ? 0 : length - 10, length) ||
      this.responses;
    return parsedResponses.map((res, idx) => {
      return this.parse(res, idx);
    });
  }

  addReponse = res => {
    this.responses.push(res);
  };

  parse = (res, idx) => {
    return this.adapter.parse(res, idx);
  };

  switchProcessingState = bool => {
    this.isProcessing = bool;
  };

  onEnterKeyDown = async line => {
    const result = await this._sendRequest(line);
    this.histories.push(line);
    return result;
  };

  handleAction = idx => {
    this.actionEvents[idx]["func"]();
  };

  _clearAll = () => {
    this._clearHistories();
    this._clearResponses();
  }

  _clearHistories = () => {
    this.histories = [];
  };

  _clearResponses = () => {
    this.responses = [];
  }

  _reCallHistory = idx => {
    console.log("Wait for release...");
  };

  _sendRequest = async cmd => {
    const result = await this.adapter.get(cmd);
    this._receive(cmd, result);
    return result;
  };

  _receive = (cmd, res) => {
    console.log(res);
    this.addReponse({ cmd: cmd, response: res });
  };

  actionEvents = [
    {title: "Clear All", func: this._clearAll},
    { title: "Clear Text Console", func: this._clearHistories },
    { title: "Clear Result Console", func: this._clearResponses},
    { title: "Recall", func: this._reCallHistory }
  ];
}

export default decorate(Terminal, {
  histories: observable,
  responses: observable,
  adapter: observable,
  isProcessing: observable,
  getAdapterName: computed,
  getHistories: computed,
  onEnterClick: action,
  handleAction: action,
  setAdapter: action,
  addReponse: action,
  switchProcessingState: action
});
