import user from "@/network/modules/user";
import prepareData from "@/mixins/prepareData";
import exception from "@/mixins/exception";

export default {
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    username: localStorage.getItem("username") || null,
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUsername(state, username) {
      state.user = username;
      localStorage.setItem("username", username);
    },
    removeUsername(state) {
      state.username = null;
      localStorage.removeItem("username");
    },
    resetProfile() {
      this.commit("removeUser");
      this.commit("removeUsername");
    },
  },
  actions: {
    /** Авторизация пользователя */
    async getUserInfo({ rootState, commit, dispatch }) {
      try {
        const response = await user.getUserInfo(rootState.authToken);

        if (response.status === 200) {
          const user = prepareData.user(response.body.data);
          commit("setUser", user);
          commit("setUsername", user.username);
        }
      } catch (e) {
        await exception.exceptionRender(e, commit, dispatch);
      }
    },
  },
};
