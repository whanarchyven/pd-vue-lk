import auth from "@/network/modules/auth";

export default {
  actions: {
    /** Авторизация пользователя */
    async login({ commit, dispatch }, userData) {
      try {
        const response = await auth.login(userData);
        commit("setAuthToken", response.headers.authorization);
      } catch (e) {
        commit("setError", e.response.body.error.errors);
        throw e;
      }
    },
  },
};
