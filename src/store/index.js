import UiState from 'store/uistate';
import Example from 'store/example';
import User from 'store/user';
import Terminal from 'store/terminal';


const store = {
    uiState: new UiState(),
    example: new Example(),
    user: new User(),
    terminal: new Terminal(),
};

export default store;