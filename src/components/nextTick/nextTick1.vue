<template>
    <section>
        <div ref="hello">
            <h1>Hello World ~</h1>
        </div>
        <el-button type="danger" @click="get">点击</el-button>
    </section>
</template>
<script>
export default {
    methods: {
        get () {

        }
    },
    mounted () {
        console.log(333);
        console.log(this.$refs['hello']);
        this.$nextTick(() => {
            console.log(444);
            console.log(this.$refs['hello'])
        })
    },
    created () {
        console.log(111);
        console.log(this.$refs['hello']);
        this.$nextTick(() => {
            console.log(222);
            console.log(this.$refs['hello'])
        })
    },
    // 可以根据打印的顺序看到，在created()钩子函数执行的时候DOM 其实并未进行任何渲染，
    // 而此时进行DOM操作并无作用，而在created()里使用this.$nextTick()可以等待dom生成以后再来获取dom对象
}
</script>

<style lang=""  scoped>
</style>