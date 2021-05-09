import {Action} from '../actions';

export interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: '',
};

export const searchReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case 'SET_SEARCH':
      return {...state, search: action.payload};
    default: 
      return state;
  };
};
