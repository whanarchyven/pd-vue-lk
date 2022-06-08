import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

const opts = {
  theme: {
    options: {
      customProperties: true,
      themeCache: {
        get: (key) => localStorage.getItem(key),
        set: (key, value) => localStorage.setItem(key, value),
      },
    },
  },
};
Vue.use(Vuetify, opts);

export default new Vuetify(opts);
