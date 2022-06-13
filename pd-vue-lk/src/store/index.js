import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import users from "@/store/modules/users";
import books from "@/store/modules/books";
import genres from "@/store/modules/genres";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: null,
    authToken:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8wMWYxLTk1LTI5LTE2MS0yMjIubmdyb2suaW9cL2FwaVwvdjFcL2xvZ2luIiwiaWF0IjoxNjU1MTIzMjk2LCJleHAiOjE2NTYzMzI4OTYsIm5iZiI6MTY1NTEyMzI5NiwianRpIjoiNzdoQnQzVEduakoxUGpxdiIsInN1YiI6MSwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.fc6S8VG7E0rXn9g-4UTccIKhcvoUfORtmjTraV0a_6g",
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
    users,
    books,
    genres,
  },
});
