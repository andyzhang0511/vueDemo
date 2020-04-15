<template>
  <div class="fillcontain mainContain">
    <h3>负载均衡</h3>
    <div class="echartContainer" v-loading="loading">
      <div class="charts">
        <div id="upSpeedChart">
          <pie-chart :color="['#00B17D', '#D2D2D2']" :chartData="25" subTitle="CPU" />
        </div>
        <div id="downSpeedChart">
          <pie-chart
            :color="['#158FC5', '#D2D2D2']"
            :chartData="25"
            title="12000MB/1600"
            subTitle="内存"
          />
        </div>
        <div id="downSpeedChart">
          <pie-chart :color="['#22BBB6', '#D2D2D2']" :chartData="25" title="2MB/S" subTitle="内存" />
        </div>
        <div id="charts-mes" style="text-align: left">
          <p>服务状态:正常</p>
          <p>端口:1001</p>
          <p>IP:192.168.1.180</p>
          <p>转码服务连接数:2</p>
          <p>流媒体服务连接数:16</p>
        </div>
      </div>
    </div>

    <div class="tableContainer">
      <h3>
        流媒体服务（在线：
        <span>16</span>）
      </h3>
      <el-table
        stripe
        class="tableClass"
        width="100%"
        height="245"
        :data="transList"
        :header-cell-style="headStyle"
        :row-style="tableRowClass"
      >
        <el-table-column prop label="IP"></el-table-column>
        <el-table-column prop label="端口"></el-table-column>
        <el-table-column prop label="编号"></el-table-column>
        <el-table-column prop label="上行路数"></el-table-column>
        <el-table-column prop label="下行路数"></el-table-column>
        <el-table-column prop label="上行速率"></el-table-column>
        <el-table-column prop label="下行速率"></el-table-column>
      </el-table>
    </div>
    <div class="tableContainer">
      <h3>
        转码服务（在线：
        <span>12</span>）
      </h3>
      <el-table
        stripe
        class="tableClass"
        width="100%"
        height="245"
        :data="transList"
        :header-cell-style="headStyle"
        :row-style="tableRowClass"
      >
        <el-table-column prop label="IP"></el-table-column>
        <el-table-column prop label="端口"></el-table-column>
        <el-table-column prop label="编号"></el-table-column>
        <el-table-column prop label="上行路数"></el-table-column>
        <el-table-column prop label="下行路数"></el-table-column>
        <el-table-column prop label="上行速率"></el-table-column>
        <el-table-column prop label="下行速率"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import pieChart from "./components/pieChart";
import lineChart from "./components/lineChart";
export default {
  data() {
    return {
      loading: true,
      GPUStateList: [],
      transList: [],
      headStyle: {
        background: "#232323",
        color: "white",
        font: "13px"
      },
      tableRowClass: {
        height: "35px"
      },
      GPUSeries: [],
      speedSeries: [],
      countSeries: []
    };
  },
  components: {
    pieChart,
    lineChart
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    for (let i = 0; i <= 7; i++) {
      this.GPUStateList.push({ test: i });
      this.transList.push({ test: i });
    }
  },
  beforeDestroy() {},
  methods: {}
};
</script>
<style lang="less" scoped>
// @import "../../assets/style/mixin";
h3 {
  width: 200px;
  height: 14px;
  font-size: 15px;
  padding: 15px 0;
  font-family: Microsoft YaHei;
  font-weight: bold;
}
.mainContain {
  padding: 63px 73px;
}
.echartContainer {
  margin: 0 auto;
  height: 248px;
  background: rgba(238, 238, 238, 1);
  border-radius: 12px;
  position: relative;
  h3 {
    position: relative;
    top: 13px;
    left: 21px;
    width: 280px;
    height: 16px;
    font-size: 15px;
    font-family: Microsoft YaHei;
    font-weight: bold;
  }
  .charts {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0 200px;
    & div {
      justify-content: flex-start;
      width: 20%;
      min-width: 200px;
      height: 196px;
      text-align: center;
    }
  }
  #charts-mes {
    margin-top: 45px;
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    line-height: 36px;
  }
}
.tableContainer {
  border-radius: 12px;
}
.lineChartContain {
  width: 1523px;
  h3 {
    width: 100%;
  }
  .lineChart {
    margin-right: 18px;
    padding: 0 80px 20px 40px;
    text-align: center;
    width: 490px;
    height: 247px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(191, 191, 191, 1);
    border-radius: 12px;
    &:nth-of-type(3) {
      margin-right: 0;
    }
  }
}
</style>
