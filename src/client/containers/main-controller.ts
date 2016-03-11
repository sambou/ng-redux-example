import { loadGitHubRepos } from '../actions';

class MainController {
  private rdx
  constructor($ngRedux, $scope) {
    let unsubscribe = $ngRedux.connect(this.mapStateToThis, { loadGitHubRepos })(this);
    $scope.$on('$destroy', unsubscribe);
  }

  mapStateToThis(state) {
    return {
      loading: state.loading,
      repos: state.repos,
    };
  }

}

export default MainController;
