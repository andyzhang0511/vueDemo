<template>
    <div>
        <input type="text" v-model="name" />
        <span v-show="isShow">请输入3-6个字符</span>
        <br>
        <input type="text" v-model="todoName" />
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'zs',
            todoName: 'is'
        }
    },
    computed: {
        isShow () {
            //当this.name的长度小于3或者大于6的时候，显示提示内容（我根据name的变化而变化，别人影响了我）
            if (this.name.length >= 3 && this.name.length <= 6) {
                return false
            } else {
                return true
            }
        }
    },
    watch: {
        //监听data中的name,如果发生了变化，就把变化的值给data中的todoName（我影响了别人）
        name (newVal) {
            this.todoName = newVal
            console.log(this.todoName)//输入框中输入name的值，todoname跟着变化
        }
    },
    methods: {

    }
}
</script>

<style lang="" scoped>
/* computed：计算属性
    computed用来监控自己定义的变量，该变量不在data里面声明，直接在computed里面定义，
    然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理
    computed比较适合对多个变量或者对象进行处理后返回一个结果值，
    也就是说多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化，
    举例：购物车里面的商品列表和总金额之间的关系，只要商品列表里面的商品数量发生变化，或减少或增多或删除商品，总金额都应该发生变化。
    这里的这个总金额使用computed属性来进行计算是最好的选择

    1.计算属性是由data中的已知值，得到的一个新值
    2.这个新值只会根据已知值的变化而变化，其它不相关的数据的变化不会影响该值
    3.计算属性不在dta中
    4.别人变化影响我自己 */

/* watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象
    watch一般用于监控路由、input输入框的值)特殊处理等等，它比较适合的场景是一个数据影响多个数据。
    （去哪儿网里处理过根据input框里输入的数据选择城市） */

/* computed，watch和methods的关系 */
    /*  1. computed和watch都是以Vue的依赖追踪机制为基础的，它们都试图处理这样一件事情：
       当某一个数据（称它为依赖数据）发生变化的时候，所有依赖这个数据的“相关”数据“自动”发生变化，
       也就是自动调用相关的函数去实现数据的变动
        2. 对methods:methods里面是用来定义函数的，它需要手动调用才能执行。而不像watch和computed那样，
       “自动执行”预先定义的函数
        3.computed和watch各自处理的数据关系场景不同
        3-1 computed擅长处理的场景：一个数据受多个数据影响
        3-2 wacth擅长处理的场景：一个数据影响多个数据 */
</style>