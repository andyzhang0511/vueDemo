<template>
  <div :id="id" :style="{height:height,width:width}" />
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '400px'
    },
    height: {
      type: String,
      default: '200px'
    },
    color: {
      type: Array,
      default: ()=>{
        return ['#00B17D','red']
      }
    },
    showArea: {
        type: Boolean,
        default: false,
    },
    series: {
        type: Array,
        default:() => {
            return [{
              name: 'GPU占用',
              data: [14,31,34, 41,51,59,67, 75,87, 100]
            }]
        }
    },
    xAxis: {
        type: Object,
        default:() => {
            return {
                showSplitLine: true,
                data: ['6:00','8:00','10:00','12:00', '14:00','16:00','18:00','20:00','22:00', '24:00']
            }
        }
    },
    yAxis: {
        type: Object,
        default:() => {
            return {
                name: '(%)'
            }
        }
    }
  },
  data() {
    return {
      chart: null,
      option: {
        color: this.color,
        title: {
          top: 20,
          text: this.id,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 15,
            color: '#000'
          },
          left: 0
        },
        // tooltip: {
        //   trigger: 'axis',
        //   axisPointer: {
        //     lineStyle: {
        //       color: '#111B'
        //     }
        //   }
        // },
        grid: {
          top: 80,
          width: 300,
          bottom: '2%',
          containLabel: true
        },
        // legend: {
        //   top: 20,
        //   icon: 'rect',
        //   itemWidth: 14,
        //   itemHeight: 5,
        //   itemGap: 13,
        //   data: ['GPU占用率', 'GPU占用率1'],
        //   right: '4%',
        //   textStyle: {
        //     fontSize: 12,
        //     color: '#000'
        //   }
        // },
        backgroundColor: '#fff',
        tooltip: {
          show: true,
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          boundaryGap:  true,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel:{
            interval:2,
          },
          splitLine: {
            show: this.xAxis.showSplitLine,  //true || false 网格
            interval:0,
          },
          axisTick: {length:5},
          data: this.xAxis.data
        },
        yAxis: {
          type: 'value',
          name: this.yAxis.name,
          nameGap: 15,
          min: 0,
          max: 100,
          splitNumber: 4,
          interval: 25,
          boundaryGap:  true,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
            color: '#000',
              fontSize: 14,
              fontFamily: 'Microsoft YaHe'
            }
          },
          splitLine: {
            lineStyle: {
              color: '#000'
            }
          }
        },
        series: []
      },
    }
  },
  mounted() {
    
    this.$nextTick(()=> {
        this.series.forEach(element => {
        this.option.series.push({
          name: element.name,
          type: 'line',
          smooth: true,
          symbol: 'none',
          data: element.data,
          areaStyle: this.showArea ? {
            color: this.color
          } : null,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          itemStyle: {
            normal: {
            }
          }
        })
    })
        this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(this.$el)
      this.chart.setOption(this.option)
    //     series: [{
    //       name: 'CMCC',
    //       type: 'line',
    //      
    //       symbol: 'circle',
    //       symbolSize: 5,
    //       showSymbol: false,
    //       
    //       data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
    //     }, {
    //       name: 'CTCC',
    //       type: 'line',
    //       smooth: true,
    //       symbol: 'circle',
    //       symbolSize: 5,
    //       showSymbol: false,
    //       lineStyle: {
    //         normal: {
    //           width: 1
    //         }
    //       },
    //       areaStyle: {
    //         normal: {
    //           color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //             offset: 0,
    //             color: 'rgba(0, 136, 212, 0.3)'
    //           }, {
    //             offset: 0.8,
    //             color: 'rgba(0, 136, 212, 0)'
    //           }], false),
    //           shadowColor: 'rgba(0, 0, 0, 0.1)',
    //           shadowBlur: 10
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           color: 'rgb(0,136,212)',
    //           borderColor: 'rgba(0,136,212,0.2)',
    //           borderWidth: 12
    //         }
    //       },
    //       data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
    //     }, {
    //       name: 'CUCC',
    //       type: 'line',
    //       smooth: true,
    //       symbol: 'circle',
    //       symbolSize: 5,
    //       showSymbol: false,
    //       lineStyle: {
    //         normal: {
    //           width: 1
    //         }
    //       },
    //       areaStyle: {
    //         normal: {
    //           color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //             offset: 0,
    //             color: 'rgba(219, 50, 51, 0.3)'
    //           }, {
    //             offset: 0.8,
    //             color: 'rgba(219, 50, 51, 0)'
    //           }], false),
    //           shadowColor: 'rgba(0, 0, 0, 0.1)',
    //           shadowBlur: 10
    //         }
    //       },
    //       itemStyle: {
    //         normal: {
    //           color: 'rgb(219,50,51)',
    //           borderColor: 'rgba(219,50,51,0.2)',
    //           borderWidth: 12
    //         }
    //       },
    //       data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
    //     }]
    //   })
    }
  }
}
</script>