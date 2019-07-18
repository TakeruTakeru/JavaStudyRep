import { action, observable, computed, decorate } from "mobx";

class User {

    username;
    status;

    updateUserInfo(username, status) {
        this.username = username;
        this.status = status;
    }

    get getUserInfo() {
        return `NAME: ${this.username} STATUS: ${this.status}`;
    }
}

export default decorate(User, {
    username: observable,
    status: observable,
    updateUserInfo: action,
    getUserInfo: computed
});