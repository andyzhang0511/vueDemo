<template>
    <div id="mainCenterBottom1"></div>
</template>

<script>


export default {
    name: 'EchartChange',
    data () {
        return {
            bieshu: [120, 132, 101, 134, 90, 230, 210],
            gongyu: [220, 182, 191, 234, 290, 330, 310],
            zhuzhai: [150, 232, 201, 154, 190, 330, 410],
            legend: [
                {   name: '平均值',
                    icon: 'pin'//修改图例样式
                }, {
                    name: '2017年',
                    icon: 'pin'
                },
                {   name: '2018年',
                    icon: 'pin'
                }
            ],
            date:['1','2','3','4','5','6','7']
        }
    },
    mounted () {
        // // 基于准备好的dom，初始化echarts实例
        // let init = this.$echarts.init
        // this.upLoad = init(document.getElementById('main'))
        // this.timer = setInterval(() => {
        //     this.practise();
        // }, 1000)
        // // window.onresize = function () {
        // //     main.resize();
        // // }
        // window.addEventListener("resize", function () {
        //     main.resize();
        // });
        var myChart7 = this.$echarts.init(document.getElementById('mainCenterBottom1'));

    },
    
    methods: {
        // practise () {
        //     this.date.push(parseTime(new Date(), '{h}:{i}:{s}'));
        //     this.randomData.push(Math.floor(Math.random() * 100));
        //     this.randomData1.push(Math.floor(Math.random() * 100));

        //     if (this.date.length > 10) {
        //         this.date.shift()
        //         this.randomData.shift()
        //         this.randomData1.shift()
        //     }
        //     // 指定图表的配置项和数据
        //     const option = {
        //         xAxis: {
        //             type: 'category',
        //             data: this.date
        //         },
        //         yAxis: {
        //             type: 'value'
        //         },
        //         series: [
        //             {
        //                 data: this.randomData,
        //                 type: 'line',
        //                 lineStyle: {
        //                     width: 1,
        //                     color: 'green'
        //                 }
        //             }
        //             ,
        //             {
        //                 data: this.randomData1,
        //                 type: 'line',
        //                 lineStyle: {
        //                     width: 1,
        //                     color: 'blue'
        //                 }
        //             }
        //         ]
        //     };
        //     // 使用刚指定的配置项和数据显示图表。
        //     this.upLoad.setOption(option);
        // }
    },
}
</script>

<style lang="">
</style>
