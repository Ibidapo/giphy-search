import {createStore} from 'redux';

import {searchReducer} from '../reducers';

export const store = createStore(searchReducer);
