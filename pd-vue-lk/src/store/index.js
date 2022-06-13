import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    authToken: localStorage.getItem("authToken") || null,
    errorAlert: {
      isShow: false,
      message: null,
      type: "error",
    },
  },
  getters: {},
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    removeError(state) {
      state.error = null;
    },
    setAuthToken(state, authToken) {
      state.authToken = authToken;
      localStorage.setItem("authToken", authToken);
    },
    removeAuthToken(state) {
      state.authToken = null;
      localStorage.removeItem("authToken");
    },
    logout() {
      this.commit("resetProfile");
      this.commit("removeAuthToken");
    },
  },
  actions: {},
  modules: {
    auth,
  },
});
