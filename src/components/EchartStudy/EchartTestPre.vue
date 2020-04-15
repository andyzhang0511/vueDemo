<template>
  <div class="hello">
    <div class="left">
      <img src="@/assets/images/leftPic.png" alt />
    </div>
    <div class="right">
      <div id="ringDiagram" :style="{width: '300px',height:'300px'}"></div>
      <div id="ringDiagramOne" :style="{width: '300px',height:'300px'}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EchartTest",
  data() {
    return {
      msg: "这是一个购物车页面",
      dataList: [
        { value: 700, name: "45MB/S" },
        { value: 310, name: "上行负载" }
      ]
    };
  },
  mounted() {
    this.ringDrag();
  },
  methods: {
    ringDrag() {
      const _dataList = this.dataList;
      //console.log(_dataList)
      // 基于准备好的dom，初始化echarts实例
      const myChart = this.$echarts.init(
        document.getElementById("ringDiagram")
      );
      const myChartOne = this.$echarts.init(
        document.getElementById("ringDiagramOne")
      );
      const option = {
        tooltip: {
          show: true,
          trigger: "item",
          formatter: "{a} <br/>{b}: {c}"
        },
        legend: {
          orient: "vertical",
          left: 8,
          bottom: "2%",
          data: this.dataList.name,
          padding: [0, 10, 0, 0],
          selectedMode: false,
          itemWidth: 10,
          itemHeight: 10,
          icon: "circle",
          textStyle: {
            fontSize: 13,
            width: 160,
            rich: {
              a: {
                align: "center",
                color: "red",
                padding: [0, 0, 0, 10]
              },
              b: {
                align: "right",
                color: "pink"
              },
              c: {
                align: "right",
                color: "blue"
              }
            }
          },
          tooltip: {
            show: true
          },
          formatter: function(name) {
            let _index = 0;
            //console.log(_dataList)
            _dataList.forEach((item, i) => {
              //console.log(item.value,name)
              if (item.name == name) {
                _index = i;
              }
            });
            let arr;
            if (name == "上行负载") {
              arr = [
                "{a|" + name + "}",
                "{b|￥" + _dataList[_index].value + "}"
              ];
            } else {
              arr = [
                "{a|" + name + "}",
                "{c|￥" + _dataList[_index].value + "}"
              ];
            }
            //console.log(_index)
            //console.log(_data1[_index].value)
            // 注意，换行仍是使用 '\n'。
            return arr.join("");
          }
        },
        //1244模块
        graphic: {
          type: "text",
          left: "center",
          top: "25%",
          z: 2,
          zlevel: 100,
          style: {
            text: "1244",
            x: 100,
            y: 100,
            textAlign: "center",
            fill: "blue"
          }
        },
        series: [
          {
            name: "上行负载",
            type: "pie",
            radius: ["50%", "70%"],
            // 绝对位置，相对于容器左侧 10px, 上侧 10 px
            // position: [0, -50],
            center: [100, 100],
            avoidLabelOverlap: false,
            hoverAnimation: true,
            legendHoverLink: true,
            silent: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: params => {
                  //var _total=0;
                  // _total+=params.data.value;
                  // dataTextArry.forEach((item,i)=>{
                  // _total+=item.value
                  // console.log(_total)
                  // });
                  //console.log(1);
                  // console.log(set)
                  return "1111";
                }
              },
              textStyle: {
                fontSize: 50,
                color: "green"
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              color: function(params) {
                //console.log('1',params)
                var colorList = ["#D2D2D2FF","#00B17DFF"];
                return colorList[params.dataIndex];
              }
            },
            data: this.dataList
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      myChartOne.setOption(option);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lane="" scoped>
.hello {
  width: 100%;
  height: 100%;
  position: relative;
}
.hello .left {
  position: absolute;
  left: 0;
  top: 0;
  width: 16.2%;
  height: 856px;
  background-color: greenyellow;
}
.hello .right {
  position: absolute;
  left: 310px;
  width: 83.8%;
  height: 856px;
  /* background-color: rgb(223, 223, 182); */
}
.hello .right #ringDiagram {
  box-sizing: border-box;
  /* background-color: rgb(184, 245, 159); */
  padding: 30px;
  position: relative;
  top: 50px;
  left: 100px;
}
.hello .right #ringDiagramOne {
  box-sizing: border-box;
  /* background-color: rgb(160, 166, 245); */
  padding: 30px;
  position: relative;
  bottom: 250px;
  left: 500px;
}
</style>
