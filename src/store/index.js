import uiState from 'store/uistate';
import example from 'store/example';

const store = {
    uiState: new uiState(),
    example: new example()
};

export default store;