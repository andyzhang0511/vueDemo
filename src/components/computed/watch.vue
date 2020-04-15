<template>
    <div>
        <input type="text" v-model="firstName" />
        <!-- <span v-show="isShow">请输入3-6个字符</span> -->
        <br />
        <input type="text" v-model="lastName" />
    </div>
</template>

<script>
export default {
    data () {
        return {
            firstName: 'zhang',
            lastName: 'fan',
            obj1: {
                a: 0
            }
        }
    },
    computed: {
        // 计算结果并返回，只有当被计算的值发生改变时才会触发
        // (即：计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算)
        fullName () {
            return this.firstName + '' + this.lastName
        }
    },
    watch: {
        // 监听某一个值，当被监听的值发生变化时，执行对应的操作

        //监听firstName,当firstName发生变化时就会执行该函数
        firstName (newVal) {
            //执行需要的操作...
            //注：初始化不会执行。只有当被监听的值（firstName）发生变化时才会执行
            // this.lastName = newVal
        },
        //监听lastName,当lastName发生变化时就会执行该函数
        lastName: {
            handler (newVal, oldVal) {
                //执行需要的操作
                this.firstName = newVal
            },
            immediate: true //true: 初始化时就会先执行一遍该监听对应的操作    
        },
        //监听对象obj1，当obj1发生变化时就执行相应的操作
        obj1: {
            handler () {
                //执行需要的操作
            },
            deep: true//该属性值默认为fasle
            // 当被监听的值是对象,只有deep为true时,对应属性的值(obj1.a)发生变化时才能触发监听事件，但是这样非常消耗性能
        },
        //监听对象具体的属性，deep就不需要设置为true了
        'obj1.a': {
            handler () {
                //执行需要的操作...
            }
        }
    },
    // watch: {
    //     xAxis: {
    //         deep: true,
    //         handler: function (newVal) {
    //             const length = newVal.data.length
    //             let interval = Math.floor(length / 6)
    //             interval = length % 6 === 0 ? interval - 1 : interval
    //             this.chart.setOption({
    //                 xAxis: {
    //                     ...newVal,
    //                     axisLabel: {
    //                         interval
    //                     },
    //                     splitLine: {
    //                         interval
    //                     }
    //                 }
    //             })
    //         }
    //     },
    //     series: {
    //         deep: true,
    //         handler (newVal) {
    //             this.chart.setOption({
    //                 series: newVal
    //             })
    //         }
    //     }
    // },
    methods: {

    }
}
</script>

<style lang="" scoped>
/* 注意： 不要在computed和watch中修改被依赖(或者被监听)的值，这样可能会导致无限循环 */
</style>