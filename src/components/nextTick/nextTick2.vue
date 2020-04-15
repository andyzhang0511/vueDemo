<template>
    <section>
        <h1 ref="hello">{{value}}</h1>
        <el-button type="danger" @click="get">点击</el-button>
    </section>
</template>
<script>
export default {
    data () {
        return {
            value: 'Hello World2 ~'
        }
    },
    methods: {
        get () {
            this.value = '你好啊';
            console.log(this.$refs['hello'].innerText)
            this.$nextTick(() => {
                console.log(this.$refs['hello'].innerText)
            })
        }
    },
    mounted() {
        
    },
    created() {
        
    },
}
</script>

<style lang=""  scoped>
</style>