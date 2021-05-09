export interface Action { 
  type: 'SET_SEARCH';
  payload: string;
}

export const setSearch = (search: string): Action => ({
  type: 'SET_SEARCH',
  payload: search,
});
