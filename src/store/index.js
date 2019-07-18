import UiState from 'store/uistate';
import Example from 'store/example';
import User from 'store/user';

const store = {
    uiState: new UiState(),
    example: new Example(),
    user: new User(),
};

export default store;