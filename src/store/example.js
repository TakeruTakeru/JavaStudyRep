import { observable, action, computed, decorate } from "mobx";

class Example {

    isProcessing = false;
    who = {
        name: 'hoge',
        desc: 'iam example stete class'
    }
    
    startProcessing() {
        this.isProcessing = true;
    }

    stopProcessing() {
        this.isProcessing = false;
    }

    get whoAmI() {
        const state = this.isProcessing ? 'Processing' : 'Sleeping'
        return `name <${this.who.name}> : description ${this.who.desc} ${state}`
    }

}

export default decorate(Example, {
    isProcessing: observable,
    startProcessing: action,
    stopProcessing: action,
    whoAmI: computed
})