import { action, observable, decorate, computed } from "mobx";

class Terminal {
  histories = [];
  adapter;

  setAdapter = adapter => {
    this.adapter = adapter;
  };

  get getAdapterName () {
    return this.adapter ? this.adapter._name : '';
  };

  get getHistories() {
    const length = this.histories.length;
    return (
      this.histories.slice(length < 20 ? 0 : length - 20, length) ||
      this.histories
    );
  }

  onEnterKeyDown = line => {
    this._sendRequest(line);
    this.histories.push(line);
  };

  handleAction = idx => {
    this.actionEvents[idx]["func"]();
  };

  _clearHistories = () => {
    this.histories = [];
  };

  _reCallHistory = idx => {
    console.log('Wait for release...');
  };

  _sendRequest = async cmd => {
    const result = await this.adapter.get(cmd);
    this._receive(result);
  };

  _receive = res => {
    console.log(res);
  };

  actionEvents = [
    { title: "Clear Console", func: this._clearHistories },
    { title: "Recall", func: this._reCallHistory }
  ];
}

export default decorate(Terminal, {
  histories: observable,
  adapter: observable,
  getAdapterName: computed,
  getHistories: computed,
  onEnterClick: action,
  handleAction: action,
  setAdapter: action
});
