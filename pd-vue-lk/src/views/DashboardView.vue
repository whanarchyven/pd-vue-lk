<template>
  <div class="home" data-app>
    <bread-crumbs-line page="dashboard"/>
    <v-theme-provider root>
      <div class="content">
        <div class="wrapper">
          <div class="stat-tab">
            <h3>Пользователи</h3>
            <h2>234</h2>
            <img src="../assets/dashboard/users.svg">
            <div>
              <img src="../assets/dashboard/increase.svg">
              <p>1320</p>
            </div>
          </div>
          <div class="stat-tab">
            <h3>Книги</h3>
            <h2>234</h2>
            <img src="../assets/dashboard/books.svg">
            <div>
              <img src="../assets/dashboard/increase.svg">
              <p>1320</p>
            </div>
          </div>
          <div class="stat-tab">
            <h3>Авторы</h3>
            <h2>234</h2>
            <img src="../assets/dashboard/authors.svg">
            <div>
              <img src="../assets/dashboard/increase.svg">
              <p>1320</p>
            </div>
          </div>
          <div class="stat-tab">
            <h3>Обращения (запросы)</h3>
            <h2>234</h2>
            <img src="../assets/dashboard/requests.svg">
            <div>
              <img src="../assets/dashboard/increase.svg">
              <p>1320</p>
            </div>
          </div>
          <div class="stat-tab">
            <h3>Сообщения</h3>
            <h2>234</h2>
            <img src="../assets/dashboard/messages.svg">
            <div>
              <img src="../assets/dashboard/increase.svg">
              <p>1320</p>
            </div>
          </div>
          <div class="stat-graph">
            <LineChart/>
          </div>
          <div class="side">
            <div class="side-tab">
              <p><strong>Количество ошибок</strong></p>
              <div class="side-tab-errors">
                <div>
                  <img src="../assets/dashboard/error_increase.svg">
                  <p>168</p>
                </div>
                <p>384</p>
              </div>
            </div>
            <div class="side-errors">

            </div>
          </div>
        </div>
      </div>
    </v-theme-provider>
  </div>
</template>

<script>
import BreadCrumbsLine from "@/components/BreadCrumbsLine";
import Line from "@/components/dashboard/LineChart";
import LineChart from "@/components/dashboard/LineChart";

export default {
  name: "DashboardView",
  components: {
    BreadCrumbsLine,
    LineChart,
    Line,

  },
};
</script>
<style scoped lang="scss">

.home{
  padding: 12px;
  overflow-y: scroll;
  max-height: 100vh;
}

//.content{
//  display: grid;
//  grid-gap: 1em;
//  grid-template-columns: 3fr 1fr;
//}

.wrapper{
  display: grid;
  grid-template-columns: repeat(6,1fr);
  grid-template-rows: repeat(4,224px);
  grid-gap: 1em;
}

.side{
  grid-column: 5/7;
  grid-row: 1/7;
}

.side-tab{
  background: #272936;
  padding: 1em;
  color: white;
  border-radius: 0.5em;
}

.side-tab-errors>div{
  background: #4DAD51;
  display: inline;
  padding: 0.5em;
  border-radius: 0.5em;
  color: black;
  vertical-align: middle;
}
.side-tab-errors>div>*{
  display: inline;
  vertical-align: middle;
  margin-left: 0.2em;
  margin-right: 0.2em;
}

.side-tab-errors>p{
  display: inline;
  margin-left: 1em;
  font-size: 1.5em;
  vertical-align: middle;
}

.stat-graph{
  border-radius: 0.5em;
  grid-column: 1/4;
  grid-row: 2/4;
  background: #272936;
}

.stat-tab{
  border-radius: 0.5em;
  background: #272936;
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  color: white;
}
.stat-tab>h3{
  width: 100%;
  text-align: center;
}
.stat-tab>h2{
  width: 100%;
  text-align: center;
}
.stat-tab>div{
  width: 100%;
  display: flex;
  justify-content: center;
}
.stat-tab>div>*{
  display: inline-block;
  margin-right: 0.5em;
  margin-left: 0.5em;
  vertical-align: middle;
  margin-bottom: 0;
}

.theme--light {
  .stat-tab{
    background: white !important;
    color: black !important;
  }
  .stat-graph{
    background: white !important;
  }
  .side-tab{
    background: #FFF;
    color: black;
  }
  .side-tab-errors>div{
    color: #FFF;

  }
}

@media screen and (max-width: 1200px) {
  .users {
    padding: 0;
  }
  .wrapper{
    grid-template-columns: repeat(3,1fr) !important;
  }
  .side{
    grid-column: auto;
  }
  .stat-graph{
    grid-column: 1/3;
    grid-row: 2/4;
  }
  .side-tab-errors >p{
    font-size: 1.2em;
    margin-left: 0;
    padding-left: 0.2em;
  }
  .content{
    grid-template-columns: 1fr 1fr;
  }
}


@media screen and (max-width: 420px) {
  .wrapper{
    grid-template-columns: repeat(2,1fr) !important;
    grid-template-rows: 100px;
  }
  .side{
    grid-column: 2;
    grid-row: 2/7;
  }
  .stat-tab>img{
    display: none;

  }
  .stat-graph{
    display: none;
  }
}
</style>