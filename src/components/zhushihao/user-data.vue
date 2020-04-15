<template>
  <div class="user-data-page">
    <el-row class="card-row-box">
      <el-col :span="24">
        <el-card shadow="never">
          <el-row middle>
            <el-col :span="12"></el-col>
            <el-col class="text-r" :span="12">
              <div class="numbox">
                <p class="titledatanum">{{statisticalData.cNum + statisticalData.joinNum || 0}}</p>
                <p class="titledataname">课堂</p>
              </div>
              <div class="numbox">
                <p
                  class="titledatanum"
                >{{statisticalData.cRaceNum + statisticalData.joinRaceNum || 0}}</p>
                <p class="titledataname">竞赛</p>
              </div>
              <div class="numbox">
                <p class="titledatanum">0</p>
                <p class="titledataname">考试</p>
              </div>
              <!-- <div class="numbox">
                                <p class="titledatanum">0</p>
                                <p class="titledataname">试卷</p>
                            </div>
                            <div class="numbox">
                                <p class="titledatanum">0</p>
                                <p class="titledataname">题库</p>
              </div>-->
              <div class="numbox">
                <p class="titledatanum">0</p>
                <p class="titledataname">习题</p>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="card-row-box" v-if="isTeacher || isAdmin">
      <el-col :span="18">
        <el-row class="text-c card-row-box">
          <el-col :span="6">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">发布课堂数</p>
                <p class="titledatanum">{{statisticalData.cNum || 0}}</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">发布竞赛数</p>
                <p class="titledatanum">{{statisticalData.cRaceNum || 0}}</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">发布作业数</p>
                <p class="titledatanum">{{statisticalData.cTaskNum || 0}}</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="6">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">发布实验数</p>
                <p class="titledatanum">{{statisticalData.cexpNum ||0}}</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-card shadow="never">
          <div class="transverse numbox">
            <p class="titledataname">发布考试数</p>
            <p class="titledatanum">0</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="card-row-box" v-if="isStudent">
      <el-col :span="17">
        <el-row class="text-c card-row-box">
          <el-col :span="8">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">待提交作业</p>
                <p class="titledatanum">0</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">待提交实验(竞赛)</p>
                <p class="titledatanum">2</p>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="never">
              <div class="numbox">
                <p class="titledataname">待提交实验(课堂)</p>
                <p class="titledatanum">2</p>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="7">
        <el-card shadow="never">
          <div class="transverse numbox">
            <p class="titledataname">待参加考试</p>
            <p class="titledatanum">7</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="card-row-box">
      <el-col :span="24">
        <el-card class="login_study-card" shadow="never">
          <div class="login_study-chartBox" ref="loginStudy">loginStudy</div>
        </el-card>
      </el-col>
      <!-- <el-col :span="7">
                <el-row class="card-row-box">
                    <el-col :span="24">
                        <el-card shadow="never">
                            <div class="visit-chartBox" ref="visit">visit</div>
                        </el-card>
                    </el-col>
                    <el-col :span="24">
                        <el-card shadow="never">
                            <div class="score-chartBox" ref="score">score</div>
                        </el-card>
                    </el-col>
                </el-row>
      </el-col>-->
    </el-row>

    <el-row class="card-row-box">
      <el-col :span="24">
        <el-card class="contesthead-card" shadow="never">
          <el-row middle>
            <el-col class="contesthead" :span="2">
              <strong>竞赛</strong>
            </el-col>
            <el-col :span="22">
              <el-row middle>
                <el-col :span="16">
                  <el-row>
                    <div class="numbox">
                      <p class="titledataname">最高分</p>
                      <p class="titledatanum">{{statisticalData.raceStatistics.max}}</p>
                    </div>
                    <div class="numbox">
                      <p class="titledataname">最低分</p>
                      <p class="titledatanum">{{statisticalData.raceStatistics.min}}</p>
                    </div>
                    <div class="numbox">
                      <p class="titledataname">平均分</p>
                      <p class="titledatanum" v-text="statisticalData.raceStatistics.avg"></p>
                    </div>
                  </el-row>
                </el-col>
                <el-col class="text-r" :span="8">
                  <el-row>
                    <el-col :span="12">
                      <div class="race-partake" ref="racePartake">racePartake</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="race-pass" ref="racePass">racePass</div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>

    <el-row class="card-row-box">
      <el-col :span="24">
        <el-card class="lessonhead-card" shadow="never">
          <el-row middle>
            <el-col class="lessonhead" :span="2">
              <strong>课堂</strong>
            </el-col>
            <el-col :span="22">
              <el-row middle>
                <el-col :span="16">
                  <el-row>
                    <div class="numbox">
                      <p class="titledataname">最高分</p>
                      <p class="titledatanum">{{statisticalData.lessonStatistics.max}}</p>
                    </div>
                    <div class="numbox">
                      <p class="titledataname">最低分</p>
                      <p class="titledatanum">{{statisticalData.lessonStatistics.min}}</p>
                    </div>
                    <div class="numbox">
                      <p class="titledataname">平均分</p>
                      <p class="titledatanum">{{statisticalData.lessonStatistics.avg}}</p>
                    </div>
                  </el-row>
                </el-col>
                <el-col class="text-r" :span="8">
                  <el-row>
                    <el-col :span="12">
                      <div class="lesson-partake" ref="lessonPartake">lessonPartake</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="lesson-pass" ref="lessonPass">lessonPass</div>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getUserStatistical } from "@/api/lab/lesson";
export default {
  data() {
    return {
      statisticalData: {
        lessonStatistics: {},
        raceStatistics: {}
      }
    };
  },
  computed: {
    ...mapGetters(["isStudent", "isTeacher", "isAdmin"])
  },
  methods: {
    init() {
      this.initCharts();
    },
    initCharts() {
      this.initLoginStudyChart();
      // this.initVisitChart()
      // this.initScoreChart()
      this.getUserStatisticalList(); //获取基本信息
    },
    initLoginStudyChart() {
      let startDate = "2018-10-17";
      let endDate = "2019-10-17";
      let data = this.getVirtulData(startDate, endDate);
      let { max, min } = this.getBestVal(data);
      let comCalendar = {
        left: "center", // calendar组件离容器左侧的距离
        range: [startDate, endDate], // 必填，日历坐标的范围 支持多种格式
        cellSize: 12, // 日历每格框的大小，可设置单值 或数组 第一个元素是宽 第二个元素是高。 支持设置自适应：auto, 默认为高宽均为20
        splitLine: { show: false }, // 设置日历坐标分隔线的样式
        monthLabel: { nameMap: "cn", position: "end" }, // 设置日历坐标中 月份轴的样式
        dayLabel: { nameMap: "cn" } // 设置日历坐标中 星期轴的样式
      };
      let comSeries = {
        type: "heatmap",
        coordinateSystem: "calendar",
        data
      };
      let dom = this.$refs.loginStudy;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        title: {
          top: 30,
          text: `近10个月登录记录与学习时长及答题数量`,
          left: "center"
        },
        tooltip: {
          trigger: "item"
        },
        visualMap: {
          min,
          max,
          type: "piecewise",
          orient: "horizontal",
          left: "center",
          top: 75,
          textStyle: { color: "#000" },
          precision: 0,
          inRange: {
            // color: [ '#f0f0f0', '#dcf064', '#d2e650', '#bed228', '#a0b40a' ], // 图元的颜色
            color: ["#f0f0f0", "#dcf064", "#d2e650", "#bed228", "#5ab40a"], // 图元的颜色
            colorAlpha: 0.9 // 图元的颜色的透明度
          }
        },
        // 日历坐标系组件
        calendar: [
          {
            ...comCalendar,
            top: 160
          },
          {
            ...comCalendar,
            top: 320
          },
          {
            ...comCalendar,
            top: 480
          }
        ],
        itemStyle: {
          borderWidth: 1,
          borderColor: "white"
        },
        series: [
          {
            ...comSeries,
            name: "登录次数",
            tooltip: {
              formatter: params => {
                return `${params.value[1]} 次登录: ${params.value[0]}`;
              }
            }
          },
          {
            ...comSeries,
            name: "学习时长",
            calendarIndex: 1,
            tooltip: {
              formatter: params => {
                let minutes = params.value[1];
                let src = "";
                let h = parseInt(minutes / 60);
                let m = minutes % 60;
                if (h > 0) {
                  src += `${h} 小时 `;
                }
                if (m > 0) {
                  src += `${m} 分钟`;
                }
                return `学习 ${src}: ${params.value[0]}`;
              }
            }
          },
          {
            ...comSeries,
            name: "答题数量",
            calendarIndex: 2,
            tooltip: {
              formatter: params => {
                return `${params.value[1]}题答题量: ${params.value[0]}`;
              }
            }
          }
        ]
      });
    },
    initVisitChart() {
      let dom = this.$refs.visit;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["年份", "课堂访问", "竞赛访问"],
            ["2016", 43, 85, 93, 25],
            ["2017", 83, 73, 55, 69],
            ["2018", 43, 85, 93, 25],
            ["2019", 83, 73, 55, 69]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        grid: {
          bottom: 30
        },
        series: [
          {
            type: "bar",
            barCategoryGap: "40%",
            itemStyle: { color: "#c23531" }
          },
          {
            type: "bar",
            barCategoryGap: "40%",
            itemStyle: { color: "#61a0a8" }
          }
        ]
      });
    },
    initScoreChart() {
      let dom = this.$refs.score;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ["年份", "课堂得分", "竞赛得分"],
            ["2016", 46, 123, 99, 15],
            ["2017", 24, 98, 62, 109],
            ["2018", 46, 123, 99, 15],
            ["2019", 24, 98, 62, 109]
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        grid: { bottom: 30 },
        series: [
          {
            type: "bar",
            barCategoryGap: "40%",
            itemStyle: { color: "#c23531" }
          },
          {
            type: "bar",
            barCategoryGap: "40%",
            itemStyle: { color: "#61a0a8" }
          }
        ]
      });
    },
    initRacePartake() {
      let dom = this.$refs.racePartake;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        title: {
          subtext: "参与率",
          left: "center",
          top: -10
        },
        tooltip: {
          trigger: "item"
          // formatter: function (params) {
          //     console.log(params)
          //     // return “名称：” +params.name
          // }
        },
        series: [
          {
            name: "参与率",
            type: "pie",
            radius: ["60%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{d}%"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.statisticalData.raceStatistics.join_num,
                name: "参与人数",
                position: "center",
                label: {
                  show: true
                },
                itemStyle: {
                  color: "#41b2ad"
                }
              },
              {
                value:
                  this.statisticalData.raceStatistics.total_num -
                  this.statisticalData.raceStatistics.join_num,
                name: "未参与人数"
              }
            ]
          }
        ]
      });
    },
    initRacePass() {
      let dom = this.$refs.racePass;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        title: {
          subtext: "及格率",
          left: "center",
          top: -10
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            name: "及格率",
            type: "pie",
            radius: ["60%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{d}%"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.statisticalData.raceStatistics.pass_record,
                name: "及格人数",
                position: "center",
                label: {
                  show: true
                },
                itemStyle: {
                  color: "#41b2ad"
                }
              },
              {
                value:
                  this.statisticalData.raceStatistics.total_record -
                  this.statisticalData.raceStatistics.pass_record,
                name: "未及格人数"
              }
            ]
          }
        ]
      });
    },
    initLessonPartake() {
      let dom = this.$refs.lessonPartake;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        title: {
          subtext: "参与率",
          left: "center",
          top: -10
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            name: "参与率",
            type: "pie",
            radius: ["60%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{d}%"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.statisticalData.lessonStatistics.join_num,
                name: "提交",
                position: "center",
                label: {
                  show: true
                },
                itemStyle: {
                  color: "#41b2ad"
                }
              },
              {
                value:
                  this.statisticalData.lessonStatistics.total_user -
                  this.statisticalData.lessonStatistics.join_num,
                name: "未提交"
              }
            ]
          }
        ]
      });
    },
    initLessonPass() {
      let dom = this.$refs.lessonPass;
      let myChart = this.$echarts.init(dom);
      myChart.setOption({
        title: {
          subtext: "及格率",
          left: "center",
          top: -10
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            name: "及格率",
            type: "pie",
            radius: ["60%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{d}%"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: this.statisticalData.lessonStatistics.pass_num,
                name: "提交",
                position: "center",
                label: {
                  show: true
                },
                itemStyle: {
                  color: "#41b2ad"
                }
              },
              {
                value:
                  this.statisticalData.lessonStatistics.sub_num -
                  this.statisticalData.lessonStatistics.pass_num,
                name: "未提交"
              }
            ]
          }
        ]
      });
    },
    getVirtulData(startDate, endDate) {
      let date = +this.$echarts.number.parseDate(startDate);
      let end = +this.$echarts.number.parseDate(endDate);
      let dayTime = 3600 * 24 * 1000;
      let data = [];
      for (let time = date; time <= end; time += dayTime) {
        data.push([
          this.$echarts.format.formatTime("yyyy-MM-dd", time),
          Math.floor(Math.random() * 1000)
        ]);
      }
      return data;
    },
    getBestVal(data) {
      let max = 0;
      let min = 0;
      data.map(item => {
        if (item[1] > max) {
          max = item[1];
        }
        if (item[1] < min) {
          min = item[1];
        }
      });
      return { max, min };
    },
    async getUserStatisticalList() {
      await getUserStatistical()
        .then(res => {
          this.statisticalData = res;
        })
        .catch(() => {});
      this.initRacePartake();
      this.initRacePass();
      this.initLessonPartake();
      this.initLessonPass();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  }
};
</script>

<style lang="scss">
.user-data-page {
  .login_study-card {
    .el-card__body {
      padding: 0;
    }
  }
  .contesthead-card,
  .lessonhead-card {
    .el-card__body {
      padding: 0 20px 0 0;
    }
    .lessonhead,
    .contesthead {
      height: 200px;
      line-height: 200px;
      font-size: 24px;
      text-align: center;
      color: white;
    }
    .race-partake,
    .race-pass,
    .lesson-partake,
    .lesson-pass {
      height: calc(200px - 40px);
    }
    .lessonhead {
      background-color: rosybrown;
    }
    .contesthead {
      background-color: #8fbcb1;
    }
  }
}
</style>


<style lang="scss" scoped>
.user-data-page {
  .login_study-card {
    .login_study-chartBox {
      height: 600px;
    }
  }
  .visit-chartBox,
  .score-chartBox {
    height: 202px;
  }
}
</style>
