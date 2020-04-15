<template>
    <div class="home">
        <!-- 控制按钮 -->
        <div class="control-Button">
            <div class="control-Button-item">
                <el-row>
                    <el-button round>注册</el-button>
                    <el-button round>修改</el-button>
                    <el-button round>删除</el-button>
                    <el-button round>重启</el-button>
                    <el-button round>上线</el-button>
                    <el-button round>离线</el-button>
                </el-row>
            </div>
        </div>
        <!-- 概况 -->
        <div class="loadMessage">
            <el-row>
                <el-col :span="4">
                    <div id="detail">概况</div>
                </el-col>
                <el-col :span="4">
                    <div id="upLoad" :style="{width: '200px',height:'200px'}"></div>
                </el-col>
                <el-col :span="4">
                    <div id="downLoad" :style="{width: '200px',height:'200px'}"></div>
                </el-col>
                <el-col :span="4">
                    <div id="LoadMessage-left">
                        <p>上行路数 :<span style="color:#00B17D">10</span></p>
                        <p>行流量 :<span style="color:#00B17D">250GB</span></p>
                        <p>负载均衡 :<span>在线</span></p>
                        <p>转码服务 :<span style="color:#EA3030">1/2</span></p>
                        <p>流媒体服务 :<span style="color:#00B17D">16/23</span></p>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div id="LoadMessage-right">
                        <p>下行路数:<span style="color:#00B17D">15</span></p>
                        <p>下行速率:<span style="color:#00B17D">1000GB</span></p>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 负载路数统计/负载速率统计 -->
        <div class="loadControl">
            <el-row>
                <el-col :span="12" class="loadControl-way">
                    <div id="loadControl-way-chart" :style="{width: '600px',height:'220px'}"></div>
                </el-col>
                <el-col :span="12" class="loadControl-speed">
                    <div id="loadControl-speed-chart" :style="{width: '600px',height:'220px'}"></div>
                </el-col>
            </el-row>
        </div>

        <!-- 终端设备/前端设备 -->
        <div class="device">
            <el-row>
                <el-col :span="12" class="device-end">
                    <div id="device-end-chart" :style="{width: '600px',height:'220px'}"></div>
                </el-col>
                <el-col class="device-font">
                    <div id="device-font-chart" :style="{width: '600px',height:'220px'}"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: "EchartTest",
    data () {
        return {
            statisticalData: []
        };
    },
    mounted () {
        this.$nextTick(() => {
            this.charData();
        })
    },
    methods: {
        charData () {
            // 基于准备好的dom，初始化echarts实例
            let init = this.$echarts.init
            // 上行负载环形圈
            const upLoad = init(document.getElementById("upLoad"));
            // 下行负载环形圈
            const downLoad = init(document.getElementById("downLoad"));
            // 负载数路统计
            const loadControlWay = init(document.getElementById("loadControl-way-chart"));
            // 负载速率统计
            const loadControlSpeed = init(document.getElementById("loadControl-speed-chart"));
            //终端设备
            const deviceEnd = init(document.getElementById("device-end-chart"));
            //前端设备
            const deviceFont = init(document.getElementById("device-font-chart"));

            //图表配置模块
            //上行负载配置
            const upLoadOption = {
                title: {
                    text: "45MB/S",
                    textStyle: {
                        color: "#00B17D",
                        fontSize: 13,
                        fontFamily: "Microsoft YaHei",
                        fontWeight: "bold"
                    },
                    subtext: "上行负载",
                    left: "center",
                    bottom: -5,
                    subtextStyle: {
                        fontWeight: "bold",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 15,
                        color: "#000000"
                    }
                },
                tooltip: {
                    show: false //是否显示提示框组件，包括提示框浮层和 axisPointer
                },
                series: [
                    {
                        name: "",
                        type: "pie",
                        radius: ["30%", "50%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                                formatter: "{d}%",
                                fontSize: 20,
                                fontWeight: "bold"
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {
                                value: 50,
                                name: "",
                                itemStyle: { color: "#D2D2D2" }
                            },
                            {
                                value: 50,
                                name: "",
                                label: { show: true },
                                itemStyle: { color: "#00B17D" }
                            }
                        ],
                        cursor: "pointer",
                        hoverOffset: 0 //高亮扇区的偏移距离。
                    }
                ]
            };
            //下行负载配置
            const downLoadOption = {
                title: {
                    text: "60MB/S",
                    textStyle: {
                        color: "#00B17D",
                        fontSize: 13,
                        fontFamily: "Microsoft YaHei",
                        fontWeight: "bold"
                    },
                    subtext: "下行负载",
                    left: "center",
                    bottom: -5,
                    subtextStyle: {
                        fontWeight: "bold",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 15,
                        color: "#000000"
                    }
                },
                tooltip: {
                    show: false //是否显示提示框组件，包括提示框浮层和 axisPointer
                },
                series: [
                    {
                        name: "",
                        type: "pie",
                        radius: ["30%", "50%"],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: "center",
                                formatter: "{d}%",
                                fontSize: 20,
                                fontWeight: "bold"
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: [
                            {
                                value: 35,
                                name: "",
                                itemStyle: { color: "#D2D2D2" }
                            },
                            {
                                value: 65,
                                name: "",
                                label: { show: true },
                                itemStyle: { color: "#00B17D" }
                            }
                        ],
                        cursor: "pointer",
                        hoverOffset: 0 //高亮扇区的偏移距离。
                    }
                ]
            };
            //负载路数统计
            const loadControlWayOption = {
                //主标题
                title: {
                    text: "负载路数统计"
                },
                //grid 直角坐标系内绘图网格
                grid: {
                    width: "50%"
                },
                //图列
                legend: {
                    orient: "vertical", //纵向布局
                    // data: ["上行 :", "下行 :"],
                    formatter: function (name) {
                        var index = 0;
                        var clientlabels = ["上行 :", "下行 :"];
                        var clientcounts = [9, 1];
                        clientlabels.forEach(function (value, i) {
                            if (value == name) {
                                index = i;
                            }
                        });
                        return name + "  " + clientcounts[index];
                    },
                    icon: "rect",
                    itemWidth: 20,
                    itemHeight: 2,
                    right: 150,
                    top: 50,
                    itemGap: 20,
                    textStyle: {
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 12,
                        color: "rgba(0,0,0,1)"
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: true,
                    axisLabel: {
                        interval: 2
                    },
                    data: ["6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"],
                    offset: 15, //X 轴相对于默认位置的偏移
                    splitLine: {
                        show: true,
                        interval: 0
                    },
                    axisTick: {
                        inside: false
                    }
                },
                yAxis: {
                    name: "(路)",
                    nameTextStyle: {
                        color: "#000000",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Microsoft YaHei"
                    },
                    nameGap: 10, //坐标轴名称与轴线之间的距离
                    type: "value"
                },

                tooltip: {
                    //移动鼠标显示实时数据
                    // show: true,
                    // trigger: "axis"
                },
                series: [
                    {
                        //上行
                        name: "上行 :",
                        data: [8, 9, 10, 20, 22, 24, 30, 32, 34, 65],
                        type: "line",
                        smooth: true,
                        symbol: "none" //去掉曲线上的点点标记
                    },
                    //下行
                    {
                        name: "下行 :",
                        data: [15, 9, 10, 12, 22, 24, 26, 32, 34, 75],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    }
                ],
                color: ["#1496D0", "#00B17D"]
            };
            //负载速率统计
            const loadControlSpeedOption = {
                title: {
                    text: "负载速率统计"
                },
                grid: {
                    width: "50%"
                },
                legend: {
                    orient: "vertical", //纵向布局
                    // data: ["上行 :", "下行 :"],
                    formatter: function (name) {
                        var index = 0;
                        var clientlabels = ["上行 :", "下行 :"];
                        var clientcounts = [64, 25];
                        clientlabels.forEach(function (value, i) {
                            if (value == name) {
                                index = i;
                            }
                        });
                        return name + "  " + clientcounts[index];
                    },
                    icon: "rect",
                    itemWidth: 20,
                    itemHeight: 2,
                    right: 80,
                    top: 50,
                    itemGap: 20,
                    textStyle: {
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 12,
                        color: "rgba(0,0,0,1)"
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: true,
                    axisLabel: {
                        interval: 2
                    },
                    data: ["6:00", "8:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "24:00"],
                    offset: 15, //X 轴相对于默认位置的偏移
                    splitLine: {
                        show: true,
                        interval: 0
                    },
                    axisTick: {
                        inside: false
                    }
                },
                yAxis: {
                    name: "(MB/S)",
                    nameTextStyle: {
                        color: "#000000",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Microsoft YaHei"
                    },
                    nameGap: 10, //坐标轴名称与轴线之间的距离
                    type: "value"
                },
                series: [
                    {
                        //上行
                        name: "上行 :",
                        data: [8, 9, 10, 20, 22, 24, 30, 32, 34, 65],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    //下行
                    {
                        name: "下行 :",
                        data: [15, 9, 10, 12, 22, 24, 26, 32, 34, 75],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    }
                ],
                color: ["#1496D0", "#00B17D"]
            };
            //终端设备
            const deviceEndOption = {
                title: {
                    text: "终端设备"
                },
                grid: {
                    width: "40%" //grid 组件的宽度
                },
                legend: {
                    orient: "vertical", //纵向布局
                    data: ["云视讯/WINDOWS :", "云视讯/ANDROID :", "控制中心 :", "LED :"],
                    formatter: function (name) {
                        var index = 0;
                        var clientlabels = ["云视讯/WINDOWS :", "云视讯/ANDROID :", "控制中心 :", "LED :"];
                        var clientcounts = [9, 1, 9, 1];
                        clientlabels.forEach(function (value, i) {
                            if (value == name) {
                                index = i;
                            }
                        });
                        return name + "  " + clientcounts[index];
                    },
                    icon: "rect",
                    itemWidth: 20,
                    itemHeight: 2,
                    right: 80,
                    top: 50,
                    itemGap: 20,
                    textStyle: {
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 12,
                        color: "rgba(0,0,0,1)"
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["6:00", "12:00", "18:00", "24:00"],
                    offset: 15 //X 轴相对于默认位置的偏移
                },
                yAxis: {
                    name: "(个)",
                    nameTextStyle: {
                        color: "#000000",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Microsoft YaHei"
                    },
                    nameGap: 10, //坐标轴名称与轴线之间的距离
                    type: "value"
                },
                series: [
                    {
                        //云视讯/WINDOWS
                        name: "云视讯/WINDOWS :",
                        data: [20, 14, 36, 12],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    //云视讯/ANDROID
                    {
                        name: "云视讯/ANDROID :",
                        data: [15, 12, 26, 75],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    //控制中心
                    {
                        name: "控制中心 :",
                        data: [40, 25, 35, 20],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    //LED
                    {
                        name: "LED :",
                        data: [40, 25, 40, 25],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    }
                ],
                color: ["#D02114", "#EB6C0F", "#1496D0", "#00B17D"]
            };
            //前端设备
            const deviceFontOption = {
                title: {
                    text: "前端设备"
                },
                grid: {
                    width: "50%" //grid 组件的宽度
                },
                legend: {
                    orient: "vertical", //纵向布局
                    data: ["4G执法仪 :", "智能眼镜 :", "虚拟设备 :", "外部信号 :"],
                    formatter: function (name) {
                        var index = 0;
                        var clientlabels = ["4G执法仪 :", "智能眼镜 :", "虚拟设备 :", "外部信号 :"];
                        var clientcounts = [9, 1, 9, 1];
                        clientlabels.forEach(function (value, i) {
                            if (value == name) {
                                index = i;
                            }
                        });
                        return name + "  " + clientcounts[index];
                    },
                    icon: "rect",
                    itemWidth: 20,
                    itemHeight: 2,
                    right: 80,
                    top: 50,
                    itemGap: 20,
                    textStyle: {
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontFamily: "Microsoft YaHei",
                        fontSize: 12,
                        color: "rgba(0,0,0,1)"
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: ["6:00", "12:00", "18:00", "24:00"],
                    offset: 15 //X 轴相对于默认位置的偏移
                },
                yAxis: {
                    name: "(个)",
                    nameTextStyle: {
                        color: "#000000",
                        fontStyle: "normal",
                        fontWeight: "bold",
                        fontSize: 12,
                        fontFamily: "Microsoft YaHei"
                    },
                    nameGap: 10, //坐标轴名称与轴线之间的距离
                    type: "value"
                },
                series: [
                    {
                        name: "4G执法仪 :",
                        data: [10, 8, 6, 0],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    {
                        name: "智能眼镜 :",
                        data: [17, 11, 8, 0],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    {
                        name: "虚拟设备 :",
                        data: [20, 13, 11, 10],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    },
                    {
                        name: "外部信号 :",
                        data: [18, 18, 17, 14],
                        type: "line",
                        smooth: true,
                        symbol: "none"
                    }
                ],
                color: ["#D02114", "#EB6C0F", "#1496D0", "#00B17D"]
            };

            // 使用刚指定的配置项和数据显示图表
            upLoad.setOption(upLoadOption);
            downLoad.setOption(downLoadOption);
            loadControlWay.setOption(loadControlWayOption);
            loadControlSpeed.setOption(loadControlSpeedOption);
            deviceEnd.setOption(deviceEndOption);
            deviceFont.setOption(deviceFontOption);
        }
    }
};
</script>

<style lang="" scoped>
.home {
    width: 1439px;
    height: 100%;
    margin: 0 auto;
    /* background-color: pink; */
}
.control-Button {
    width: 1439px;
    height: 70px;
    /* background-color: rgb(196, 247, 196); */
    position: relative;
}
.control-Button-item {
    position: absolute;
    right: 0;
    bottom: 20px;
}
.el-button {
    background: #232323;
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    border: none;
}
.el-button.is-round {
    border-radius: 20px;
    padding: 5px 23px;
}
.loadMessage {
    width: 1439px;
    height: 247px;
    border-radius: 12px;
    background: rgba(238, 238, 238, 1);
    position: relative;
}
#LoadMessage-left,
#LoadMessage-right {
    margin-top: 40px;
    margin-left: 40px;
    font-size: 13px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(0, 0, 0, 1);
    line-height: 36px;
}
.loadControl .loadControl-way,
.loadControl .loadControl-speed,
.device .device-end,
.device-font {
    width: 712px;
    height: 247px;
    /* background: rgba(255, 255, 255, 1); */
    border: 1px solid rgba(191, 191, 191, 1);
    border-radius: 12px;
}
.loadControl .loadControl-way #loadControl-way-chart,
.loadControl .loadControl-speed #loadControl-speed-chart,
.device .device-end #device-end-chart,
.device .device-font #device-font-chart {
    /* background: gray; */
    margin-top: 2%;
    margin-left: 3%;
}
.loadControl .loadControl-speed,
.device-font {
    float: right;
}
.loadControl {
    margin: 16px auto;
}
</style>