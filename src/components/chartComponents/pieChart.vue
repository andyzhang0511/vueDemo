<template>
    <div></div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    color: {
      type: Array,
      default: () => {
        return ['#00B17D', '#D2D2D2']
      }
    },
    chartData: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      chart: null,
      data: [
        {
          value: this.chartData,
          name: '',
          label: {
            show: true
          },
          itemStyle: {
            color: this.color[0]
          }
        },
        {
          value: 100 - this.chartData,
          name: '',
          itemStyle: {
            color: this.color[1]
          }
        }
      ]
    }
  },
  mounted () {
    this.initChart()
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart () {
      const _this = this
      this.chart = this.$echarts.init(this.$el)
      this.chart.setOption({
        title: {
          text: _this.title,
          left: 'center',
          bottom: -5,
          textStyle: {
            fontSize: 13,
            color: _this.color[0],
            fontWeight: 'bold'
          },
          subtext: _this.subTitle,
          subtextStyle: {
            fontWeight: 'bold',
            fontSize: 15,
            color: '#000'
          }
        },
        color: _this.color,
        tooltip: {
          show: false
        },
        label: {
        },
        series: [{
          name: '',
          type: 'pie',
          radius: ['30%', '50%'],
          avoidLableOverLap: false,
          label: {
            normal: {
              show: false,
              position: 'center',
              formatter: `{d}%`,
              fontSize: 13,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          clockwise: false,
          legendHoverLinK: false,
          name: _this.name + '占比',
          data: _this.data
        }]
      })
    }
  }
}
</script>
