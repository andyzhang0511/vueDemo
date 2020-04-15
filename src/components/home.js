// 样式抽离
export const commonEchartStyle = {
    grid: {
        width: "35%",
        left: '22%', //图表距离左边的距离 
    },
    legendCommon: {
        orient: "vertical", //纵向布局
        // data: ["上行 :", "下行 :"],
        icon: "rect",
        itemWidth: 20,
        itemHeight: 2,
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
    xAxisOption: {
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
    yAxisOption: {
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
    seriesUpOption: {
        name: "上行 :",
        type: "line",
        smooth: true,
        symbol: "none", //去掉曲线上的点点标记
    },
    seriesDownOption: {
        name: "下行 :",
        type: "line",
        smooth: true,
        symbol: "none"
    },
    seriesdevOption: {
        type: "line",
        smooth: true,
        symbol: "none"
    },
    seriesCorDevOption: ["#D02114", "#EB6C0F", "#1496D0", "#00B17D"],
}