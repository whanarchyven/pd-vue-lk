<template>
  <div class="home" data-app>
    <bread-crumbs-line page="statistic"/>
    <v-theme-provider root>
      <div class="content">
        <div class="wrapper">
          <div class="left-top-chart">
            <h2>Количество посещений</h2>
            <VisitChart v-bind:height="360"></VisitChart>
          </div>
          <div class="right-top-chart">
            <h2>Охват по устройствам</h2>
            <PieChart v-bind:height="300"></PieChart>
          </div>
          <div class="bottom-left-chart">
            <h2>Охват аудитории</h2>
            <OhvatChart v-bind:height="220"></OhvatChart>
          </div>
          <div class="bottom-right-chart">
            <h2>Пользователи <span>Пол/Возраст</span></h2>
            <BarChart v-bind:height="220"></BarChart>
          </div>
        </div>
      </div>
    </v-theme-provider>
  </div>
</template>

<script>

import BarChart from "@/components/dashboard/BarChart";
import BreadCrumbsLine from "@/components/BreadCrumbsLine";
import LineChart from "@/components/dashboard/LineChart";
import PieChart from "@/components/dashboard/PieChart";
import VisitChart from "@/components/dashboard/VisitChart";
import OhvatChart from "@/components/dashboard/OhvatChart";
export default {
  name: "StatisticView",
  components: {
    OhvatChart,
    VisitChart,
    PieChart,
    LineChart,
    BarChart,
    BreadCrumbsLine,

  },
  data(){
    return{
      height:242
    }
  }
};
</script>


<style scoped lang="scss">

.home{
  padding: 2em;
  max-height: 100vh;
}

//.content{
//  display: grid;
//  grid-gap: 1em;
//  grid-template-columns: 3fr 1fr;
//}

.wrapper{
  display: grid;
  grid-template-columns: repeat(8,1fr);
  grid-template-rows: 390px 290px;
  grid-gap: 1em;
}

.wrapper>div>h2{
  font-size: 20px;
  color: white;
  padding-left: 10px
}
.wrapper>div{
  padding: 20px;
  background: #272936;
  border-radius: 0.5em;
}

.left-top-chart{
  grid-column: 1/6;
}

.right-top-chart{
  grid-column: 6/9;
}

.bottom-left-chart{
  grid-column: 1/5;
}

.bottom-right-chart{
  grid-column: 5/9;
}

.theme--light {
  .wrapper>div>h2{
    color: black;
  }
  .wrapper>div{
    background: #FFFFFF;
  }
}

@media screen and (max-width: 1200px) {
  .home{
    overflow-y: scroll;
  }
  .users {
    padding: 0;
  }
  .wrapper{
    grid-template-columns: repeat(3,1fr) !important;
    grid-template-rows: 390px 390px 290px 290px;
  }
  .side{
    grid-column: auto;
  }
  .wrapper>div{
    grid-column: 1/4;
  }
}


@media screen and (max-width: 420px) {
  .wrapper{
    grid-template-columns: repeat(3,1fr) !important;
  }
}
</style>