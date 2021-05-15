export const state = () => ({
  repos: [],
  totalCount: 0
});

export const mutations = {
  SET_REPOS: (state, repos) => (state.repos = repos),
  SET_TOTAL_COUNT: (state, totalCount) => (state.totalCount = totalCount),
};

export const actions = {
  // load git repos
  async loadRepos({ commit }, query) {
    let response = { data: { items: [], totalCount: 0 } };

    // if query is valid, send request to github
    if (query) {
      response = await this.$api.github.getRepositories(query);
    }

    const data = response.data;
    // set repos
    commit('SET_REPOS', data.items);
    // set total count
    commit('SET_TOTAL_COUNT', data.total_count);
  },
};
