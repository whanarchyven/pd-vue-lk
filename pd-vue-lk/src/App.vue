<template>
    <v-app id="app">
      <menu-side-bar></menu-side-bar>
      <div class="container">
        <router-view />
      </div>
      <theme-changer />
    </v-app>
</template>

<style lang="scss">
#app {
  position: relative;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #1b1d2c;
  &.theme--light {
    color: #7C7E8F;
    background-color: #EFF3F9;
  }
  .v-application--wrap {
    display: flex;
    flex-direction: row;
  }
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
@media screen and (max-width: 1200px) {
  .container {
    max-width: unset !important;
    width: 95% !important;
  }
}
</style>

<script>
import MenuSideBar from "@/components/MenuSideBar";
import ThemeChanger from "@/components/ThemeChanger";
export default {
  components: { MenuSideBar, ThemeChanger },
};
</script>
