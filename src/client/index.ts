require('./style.scss');

import * as angular         from 'angular';
import { combineReducers }  from 'redux';
import * as thunkMiddleware from 'redux-thunk';
import ngRedux              from 'ng-redux';
import logger               from './middleware/logger';
import appReducer           from './reducers/index.ts';
import mainContainer        from './containers/main-container.ts';

angular.module('app', [ngRedux])
.config(($ngReduxProvider) => {
    let reducer = combineReducers(appReducer);
    $ngReduxProvider.createStoreWith(appReducer, [logger, thunkMiddleware]);
  })
.component('mainContainer', mainContainer);

document.addEventListener('DOMContentLoaded', () => {
  angular.bootstrap(document.getElementById('app-hook'), ['app']);
});
