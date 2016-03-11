import MainController from './main-controller.ts';

let mainContainer = {
  template: `${require('./template.html')}`,
  controllerAs: 'ctrl',
  controller: MainController
};

export default mainContainer;
