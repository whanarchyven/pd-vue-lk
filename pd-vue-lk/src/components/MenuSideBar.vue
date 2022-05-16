<template>
  <div class="menu-sidebar">
    <router-link class="menu-sidebar-link" to="/dashboard">Мониторинг</router-link>
    <router-link class="menu-sidebar-link" to="/books">Книги</router-link>
    <router-link class="menu-sidebar-link" to="/genres">Жанры</router-link>
    <router-link class="menu-sidebar-link" to="/associations">Ассоциации</router-link>
    <router-link class="menu-sidebar-link" to="/users">Пользователи</router-link>
    <router-link class="menu-sidebar-link" to="/bot">Настройки бота</router-link>
    <router-link class="menu-sidebar-link" to="/statistic">Статистика</router-link>
    <router-link class="menu-sidebar-link" to="/bookseries">Книжные серии</router-link>
  </div>
</template>

<script>
export default {
  name: "MenuSideBar"
}
</script>

<style scoped>
.menu-sidebar{
  position: fixed;
  left: 0;
  top:0;
  width: 25vw;
}
.menu-sidebar-link{
  display: block;
  text-align: left;
  margin-left: 1vw;
  margin-top: 1vh;
}

</style>