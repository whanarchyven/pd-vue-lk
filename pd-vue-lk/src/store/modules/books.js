import books from "@/network/modules/books";
// import exception from "@/mixins/exception";
// import prepareData from "@/mixins/prepareData";

export default {
  state: {
    books: {
      readied: [],
      wished: [],
      recommended: [],
    },
  },
  getters: {
    books: (state) => state.books,
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
  },
  actions: {
    async getBooks({ rootState, commit, dispatch }, params) {
      try {
        const response = await books.loadBooks(rootState.authToken, params);

        if (response.status === 200) {
          const books = response.body.data;
          // const books = [data];
          commit("setBooks", {
            readied: [...books],
            wished: [...books],
            recommended: [...books],
          });
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
