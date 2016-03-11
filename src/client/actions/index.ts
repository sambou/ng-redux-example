export const LOADING_REPOS       = 'LOADING_REPOS';
export const LOADED_REPOS        = 'LOADED_REPOS';
export const ERROR_LOADING_REPOS = 'ERROR_LOADING_REPOS';

type Repo = {name: string, id: number, url: string};

interface GitHubAPIResponse {
  repos: Array<Repo>,
};

type AsyncAction<T> = (dispatch: (a: Action) => void, getState: () => any) => Promise<T>;

export function loadGitHubRepos(text): AsyncAction<GitHubAPIResponse> {
  return (dispatch, getState) => {

    dispatch(loadingRepos());

    let p = fetch(`https://api.github.com/repositories?since=${Math.floor(Math.random() * 100000)}`);

    return p
      .then(
        (res): Promise<GitHubAPIResponse> => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong.');
          }
        }
      )
      .then(
        repos => {
          dispatch(loadedRepos(repos));
          return repos;
        },
        e => dispatch(errorLoadingRepos(e.toString()))
      );
  };
}

export function loadingRepos() {
  return {type: LOADING_REPOS};
}

export function loadedRepos(repos) {
  return {type: LOADED_REPOS, repos};
}

export function errorLoadingRepos(error: string) {
  return {type: ERROR_LOADING_REPOS, error};
}
