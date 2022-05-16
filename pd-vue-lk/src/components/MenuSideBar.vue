<template>
  <div class="menu-sidebar">
    <div class="menu-sidebar-link-container">
      <div class="menu-sidebar-title"><p>Панель управления</p></div>
      <div class="menu-sidebar-link-block-active" v-if="currentTab=='dashboard'"><router-link class="menu-sidebar-link" to="/dashboard">Мониторинг</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('dashboard')"><router-link class="menu-sidebar-link" to="/dashboard">Мониторинг</router-link></div>

      <div class="menu-sidebar-link-block-active" v-if="currentTab=='books'"><router-link class="menu-sidebar-link" to="/books">Книги</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('books')"><router-link class="menu-sidebar-link" to="/books">Книги</router-link></div>


      <div class="menu-sidebar-link-block-active" v-if="currentTab=='genres'"><router-link class="menu-sidebar-link" to="/genres">Жанры</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('genres')"><router-link class="menu-sidebar-link" to="/genres">Жанры</router-link></div>


      <div class="menu-sidebar-link-block-active" v-if="currentTab=='associations'"><router-link class="menu-sidebar-link" to="/associations">Ассоциации</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('associations')"><router-link class="menu-sidebar-link" to="/associations">Ассоциации</router-link></div>


      <div class="menu-sidebar-link-block-active" v-if="currentTab=='users'"><router-link class="menu-sidebar-link" to="/users">Пользователи</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('users')"><router-link class="menu-sidebar-link" to="/users">Пользователи</router-link></div>


      <div class="menu-sidebar-link-block-active" v-if="currentTab=='bot'"><router-link class="menu-sidebar-link" to="/bot">Настройки бота</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('bot')"><router-link class="menu-sidebar-link" to="/bot">Настройки бота</router-link></div>


      <div class="menu-sidebar-link-block-active" v-if="currentTab=='statistic'"><router-link class="menu-sidebar-link" to="/statistic">Статистика</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('statistic')"><router-link class="menu-sidebar-link" to="/statistic">Статистика</router-link></div>


      <div class="menu-sidebar-link-block-active" v-if="currentTab=='series'"><router-link class="menu-sidebar-link" to="/series">Книжные серии</router-link></div>
      <div class="menu-sidebar-link-block" v-else @click="changeCurrentTab('series')"><router-link class="menu-sidebar-link" to="/series">Книжные серии</router-link></div>


    </div>
  </div>
</template>

<script>
export default {
  name: "MenuSideBar",
  data(){
    return {
      currentTab:'dashboard',
    }
  },
  methods:{
    changeCurrentTab(newTab){
      this.$data.currentTab=newTab;
    }
  }
}
</script>

<style scoped>
.menu-sidebar{
  position: fixed;
  left: 0;
  top:0;
  width: 20vw;
  background: #272936;
  height: 100vh;
}
.menu-sidebar-link{
  display: block;
  text-align: left;
  padding-left: 3vw;
  padding-top: 1vh;
  font-family: Roboto;
}
.menu-sidebar-link-container{
  flex-direction: column;
  justify-content: space-between;
  height: 60vh;
}
.menu-sidebar-link-block{
  flex:1;
  width: 100%;
  height: 5vh;
  font-size: 19px;
  color: #7C7E8F;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-sidebar-title{
  flex:1;
  width: 100%;
  height: 10vh;
  font-size: 25px;
  color: #7C7E8F;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1vw;
}


.menu-sidebar-link-block-active{
  flex:1;
  width: 100%;
  height: 5vh;
  font-size: 19px;
  background: rgba(184, 186, 203, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.menu-sidebar-link-block-active>a{
  color: #D7D7D7;
}

a{
  color: #7C7E8F;
  text-decoration: none;
  width: 100%;
  height: 100%;
}
</style>