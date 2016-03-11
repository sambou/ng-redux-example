import { createStore, applyMiddleware, compose } from 'redux';
import * as thunkMiddleware             from 'redux-thunk';
import appReducer                       from '../reducers/index.ts';
import logger                           from '../middleware/logger.ts';

export default (reducer: Redux.Reducer = appReducer): Redux.Store => {
  let createStoreWithMiddleware = compose(
    applyMiddleware(thunkMiddleware, logger),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f
  )(createStore);

  return createStoreWithMiddleware(reducer);
};
