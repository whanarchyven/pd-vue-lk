<template>
  <div class="menu-sidebar">
    <div class="menu-sidebar-link-container">
      <div class="menu-sidebar-title"><p>Панель управления</p></div>
      <div
        class="menu-sidebar-link-block-active"
        v-if="currentTab == 'dashboard'"
      >
        <router-link class="menu-sidebar-link" to="/dashboard">
          <span>Мониторинг</span>
          <img
            src="../assets/sidebar/monitoring-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img src="../assets/sidebar/monitoring-black.svg" alt="Icon" v-else />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('dashboard')"
      >
        <router-link class="menu-sidebar-link" to="/dashboard">
          <span>Мониторинг</span>
          <img src="../assets/sidebar/monitoring.svg" alt="Icon" />
        </router-link>
      </div>

      <div class="menu-sidebar-link-block-active" v-if="currentTab == 'books'">
        <router-link class="menu-sidebar-link" to="/books">
          <span>Книги</span>
          <img
            src="../assets/sidebar/books-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img src="../assets/sidebar/books-black.svg" alt="Icon" v-else />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('books')"
      >
        <router-link class="menu-sidebar-link" to="/books">
          <span>Книги</span>
          <img src="../assets/sidebar/books.svg" alt="Icon" />
        </router-link>
      </div>

      <div class="menu-sidebar-link-block-active" v-if="currentTab == 'genres'">
        <router-link class="menu-sidebar-link" to="/genres">
          <span>Жанры</span>
          <img
            src="../assets/sidebar/genres-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img src="../assets/sidebar/genres-black.svg" alt="Icon" v-else />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('genres')"
      >
        <router-link class="menu-sidebar-link" to="/genres">
          <span>Жанры</span>
          <img src="../assets/sidebar/genres.svg" alt="Icon" />
        </router-link>
      </div>

      <div
        class="menu-sidebar-link-block-active"
        v-if="currentTab == 'associations'"
      >
        <router-link class="menu-sidebar-link" to="/associations">
          <span>Ассоциации</span>
          <img
            src="../assets/sidebar/associations-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img
            src="../assets/sidebar/associations-black.svg"
            alt="Icon"
            v-else
          />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('associations')"
      >
        <router-link class="menu-sidebar-link" to="/associations">
          <span>Ассоциации</span>
          <img src="../assets/sidebar/associations.svg" alt="Icon" />
        </router-link>
      </div>

      <div class="menu-sidebar-link-block-active" v-if="currentTab == 'users'">
        <router-link class="menu-sidebar-link" to="/users">
          <span>Пользователи</span>
          <img
            src="../assets/sidebar/users-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img src="../assets/sidebar/users-black.svg" alt="Icon" v-else />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('users')"
      >
        <router-link class="menu-sidebar-link" to="/users">
          <span>Пользователи</span>
          <img src="../assets/sidebar/users.svg" alt="Icon" />
        </router-link>
      </div>

      <div class="menu-sidebar-link-block-active" v-if="currentTab == 'bot'">
        <router-link class="menu-sidebar-link" to="/bot">
          <span>Настройки бота</span>
          <img
            src="../assets/sidebar/bot-settings-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img
            src="../assets/sidebar/bot-settings-black.svg"
            alt="Icon"
            v-else
          />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('bot')"
      >
        <router-link class="menu-sidebar-link" to="/bot">
          <span>Настройки бота</span>
          <img src="../assets/sidebar/bot-settings.svg" alt="Icon" />
        </router-link>
      </div>

      <div
        class="menu-sidebar-link-block-active"
        v-if="currentTab == 'statistic'"
      >
        <router-link class="menu-sidebar-link" to="/statistic">
          <span>Статистика</span>
          <img
            src="../assets/sidebar/statistics-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img src="../assets/sidebar/statistics-black.svg" alt="Icon" v-else />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('statistic')"
      >
        <router-link class="menu-sidebar-link" to="/statistic">
          <span>Статистика</span>
          <img src="../assets/sidebar/statistics.svg" alt="Icon" />
        </router-link>
      </div>

      <div class="menu-sidebar-link-block-active" v-if="currentTab == 'series'">
        <router-link class="menu-sidebar-link" to="/series">
          <span>Книжные серии</span>
          <img
            src="../assets/sidebar/book-series-active.svg"
            alt="Icon"
            v-if="$vuetify.theme.dark"
          />
          <img
            src="../assets/sidebar/book-series-black.svg"
            alt="Icon"
            v-else
          />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block"
        v-else
        @click="changeCurrentTab('series')"
      >
        <router-link class="menu-sidebar-link" to="/series">
          <span>Книжные серии</span>
          <img src="../assets/sidebar/book-series.svg" alt="Icon" />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block-active exit-btn"
        v-if="currentTab == 'exit'"
      >
        <router-link class="menu-sidebar-link" to="/exit">
          <span>Войти</span>
          <img src="../assets/sidebar/exit.svg" alt="Icon" />
        </router-link>
      </div>
      <div
        class="menu-sidebar-link-block exit-btn"
        v-else
        @click="changeCurrentTab('series')"
      >
        <router-link class="menu-sidebar-link" to="/exit">
          <span>Выход</span>
          <img src="" alt="" />
          <img src="../assets/sidebar/exit.svg" alt="Icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSideBar",
  data() {
    return {
      currentTab: "dashboard",
    };
  },
  methods: {
    changeCurrentTab(newTab) {
      this.$data.currentTab = newTab;
    },
  },
};
</script>

<style scoped lang="scss">
.menu-sidebar {
  width: 308px;
  min-width: 308px;
  background: #272936;
  height: 100vh;
  padding-top: 27px;
}

.menu-sidebar-link {
  display: flex;
  align-items: center;
  text-align: left;
  padding-left: 60px;
  font-weight: 500;
  font-size: 19px;
  line-height: 22px;
  color: #7c7e8f;
  img {
    display: none;
  }
}

.menu-sidebar-link-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.menu-sidebar-link-block {
  flex: 1;
  width: 100%;
  height: 52px;
  min-height: 52px;
  max-height: 52px;
  font-size: 19px;
  color: #7c7e8f;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-sidebar-title {
  width: 100%;
  font-size: 25px;
  color: #7c7e8f;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
  margin-bottom: 40px;
}

.menu-sidebar-link-block-active {
  flex: 1;
  width: 100%;
  height: 52px;
  min-height: 52px;
  max-height: 52px;
  font-size: 19px;
  background: rgba(184, 186, 203, 0.6);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-sidebar-link-block-active > a {
  color: #d7d7d7;
}

a {
  color: #7c7e8f;
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.exit-btn {
  margin-top: auto;
}

.theme--light {
  .menu-sidebar {
    color: #7c7e8f;
    background-color: #ffffff;
  }
  .menu-sidebar-link-block-active > a {
    color: #000000;
  }
}

@media screen and (max-width: 1200px) {
  .menu-sidebar {
    width: 52px;
    min-width: 52px;
    padding-top: 110px;
  }
  .menu-sidebar-link {
    padding-left: 0;
    justify-content: center;
    span {
      display: none;
    }
    img {
      display: block;
    }
  }
  .menu-sidebar-title {
    display: none;
  }
  .menu-sidebar {
    height: 100%;
  }
}
</style>
