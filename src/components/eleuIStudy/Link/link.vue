<template>
    <div>
        <!-- 基础用法 -->
        <!-- <el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
        <el-link type="primary">主要链接</el-link>
        <el-link type="success">成功链接</el-link>
        <el-link type="warning">警告链接</el-link>
        <el-link type="danger">危险链接</el-link>
        <el-link type="info">信息链接</el-link> -->

        <!-- 文字链接下划线 -->
        <el-link :underline="false" href="https://blog.csdn.net/qq_29301417/article/details/78684649">无下划线</el-link>
        <el-link>有下划线</el-link>

        <!-- 图标 带图标的文字链接可增强辨识度。 -->
        <el-link icon="el-icon-edit">编辑</el-link>
        <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="">
</style>