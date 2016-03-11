import { LOADING_REPOS, LOADED_REPOS, ERROR_LOADING_REPOS } from '../actions/index.ts';

let initialState = {
  sampleText: []
};

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_REPOS:
      return Object.assign({}, state, {
        loading: true,
      });

    case LOADED_REPOS:
      return Object.assign({}, state, {
        loading: false,
        repos: action.repos,
      });

    case ERROR_LOADING_REPOS:
      return Object.assign({}, state, {
        loading: false,
      });

    default:
      return state;
  }

};

export default appReducer;
