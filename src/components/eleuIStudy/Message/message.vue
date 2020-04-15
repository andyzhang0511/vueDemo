<template>
    <div>
        <el-button :plain="true" @click="open">打开消息提示</el-button>
        <el-button :plain="true" @click="openVn">VNode</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods:{
        open() {
            this.$message('这是一条消息提示')
        }
    }
}
</script>

<style lang="">

</style>