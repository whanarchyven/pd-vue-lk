import user from "@/network/modules/users";
// import prepareData from "@/mixins/prepareData";
// import exception from "@/mixins/exception";

export default {
  state: {
    users: [],
  },
  getters: {
    users: (state) => state.users,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    // Временно получает только одного авторизированного пользователя
    async getUsers({ rootState, commit, dispatch }) {
      try {
        const response = await user.getUsers(rootState.authToken);
        if (response.status === 200) {
          const data = response.body.data;
          const users = [
            {
              id: data.id,
              name: data.first_name,
              mail: data.email,
              readied: 12,
              email_verified_at: data.email_verified_at,
              "registration-date": data.created_at,
            },
          ];
          commit("setUsers", users);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
