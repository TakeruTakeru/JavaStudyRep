import { observable, action, decorate } from "mobx";

class uiState {
    
    manager;

    toggleSideBar = () => {
        this.manager.updateSize();
    }

    getSelectedItem = () => {
        return this.manager.getSelectedItem
    }

    setGoldenLayoutManager = (manager) => {
        this.manager = manager;
    }
}

export default decorate(uiState, {
    toggleSideBar: action,
    getSelectedItem: action
})