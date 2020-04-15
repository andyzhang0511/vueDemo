<template>
    <div id="main" style="height:300px"></div>
</template>

<script>
import { parseTime } from '@/tool/time.js'

export default {
  name: 'EchartMove',
  data () {
    return {
      upLoad: '',
      randomData: [],
      randomData1: [],
      date: [],
      timer: null
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    let init = this.$echarts.init
    this.upLoad = init(document.getElementById('main'))
    console.log(this.upLoad)
    this.timer = setInterval(() => {
      this.practise()
    }, 1000)
    window.addEventListener('resize', () => {
      this.upLoad.resize()
    })
  },
  destroyed () {
    clearInterval(this.timer)
  },
  methods: {
    practise () {
      this.date.push(parseTime(new Date(), '{h}:{i}:{s}'))
      this.randomData.push(Math.floor(Math.random() * 100))
      this.randomData1.push(Math.floor(Math.random() * 100))

      if (this.date.length > 10) {
        this.date.shift()
        this.randomData.shift()
        this.randomData1.shift()
      }
      // 指定图表的配置项和数据
      const option = {
        xAxis: {
          type: 'category',
          data: this.date
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: this.randomData,
            type: 'line',
            lineStyle: {
              width: 1,
              color: 'green'
            }
          },
          {
            data: this.randomData1,
            type: 'line',
            lineStyle: {
              width: 1,
              color: 'blue'
            }
          }
        ]
      }
      // window.onresize = this.upLoad.resize
      // $("#main").resize(this.upLoad.resize)

      // 使用刚指定的配置项和数据显示图表。
      this.upLoad.setOption(option)
    }
  }
}
</script>

<style lang="">
</style>
