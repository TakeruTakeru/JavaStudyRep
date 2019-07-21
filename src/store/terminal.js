import { action, observable, decorate, computed } from "mobx";

class Terminal {
  histories = [];

  get getHistories() {
    const length = this.histories.length;
    return (
      this.histories.slice(length < 20 ? 0 : length - 20, length) ||
      this.histories
    );
  }

  onEnterKeyDown = line => {
    this.histories.push(line);
  };

  clearHistories = () => {
    this.histories = [];
  };
}

export default decorate(Terminal, {
  histories: observable,
  getHistories: computed,
  onEnterClick: action,
  clearHistories: action
});
