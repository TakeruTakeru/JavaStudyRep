import { action, decorate } from "mobx";

class UiState {
  manager;

  toggleSideBar = () => {
    this.manager.updateSize();
  };

  getSelectedItem = () => {
    return this.manager.getSelectedItem;
  };

  setGoldenLayoutManager = manager => {
    this.manager = manager;
  };

  closeAll = () => {
    this.manager.closeAll();
  };

  openAll = componentsList => {
    this.manager.openAll(componentsList);
  };

  getHeight = () => {
    return this.manager.getHeight();
  };
}

export default decorate(UiState, {
  toggleSideBar: action,
  getSelectedItem: action,
  closeAll: action,
  openAll: action
});
