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
  name: 'VisitChart',
  components: {
    LineChartGenerator
  },
  props: {
    chartId: {
      type: String,
      default: 'line-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          'Aug 2021','Sep 2021','Oct 2021','Nov 2021', 'Dec 2021', 'Jan 2022', 'Feb 2022', 'Mar 2022', 'Apr 2022', 'May 2022'
        ],
        datasets: [
          {
            label: 'Женщины',
            lineTension:0.5,
            backgroundColor: '#E786D7',
            borderColor:'#E786D7',
            data: [123,241,331,453,123,312,345,368,223,334]
          },
          {
            label: 'Мужчины',
            lineTension:0.5,
            backgroundColor: '#7F7FD5',
            borderColor:'#7F7FD5',
            data: [234,241,331,356,369,315,370,390,400,445]
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
