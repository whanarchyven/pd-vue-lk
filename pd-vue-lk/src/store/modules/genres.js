import genres from "@/network/modules/genres";
// import exception from "@/mixins/exception";
// import prepareData from "@/mixins/prepareData";

export default {
  state: {
    genres: [],
  },
  getters: {
    genres: (state) => state.genres,
  },
  mutations: {
    setGenres(state, genres) {
      state.genres = genres;
    },
  },
  actions: {
    async getGenres({ rootState, commit, dispatch }, params = {}) {
      try {
        const response = await genres.loadGenres(rootState.authToken, params);

        if (response.status === 200) {
          const genres = response.body.data;
          // const books = [data];
          commit("setGenres", genres);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
