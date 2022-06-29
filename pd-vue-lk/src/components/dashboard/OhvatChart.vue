<template>
  <LineChartGenerator
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
  />
</template>

<script>
import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
)

export default {
  name: 'OhvatChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      default: 'line-chart'
    },
    datasetIdKey: {
      default: 'label'
    },
    width: {
      default: 400
    },
    height: {
      default: 400
    },
    cssClasses: {
      default: '',
    },
    styles: {
      default: () => {}
    },
    plugins: {
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          '31/01','01/02','02/02','03/02','04/02','05/02','06/02',
        ],
        datasets: [
          {
            label: 'Всего',
            lineTension:0.5,
            backgroundColor: '#7F7FD5',
            borderColor:'#7F7FD5',
            data: [300,324,333,290,256,340,300]
          },
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,

      }
    }
  }
}
</script>
