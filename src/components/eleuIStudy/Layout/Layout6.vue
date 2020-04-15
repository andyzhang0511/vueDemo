<template>
    <div>
        <!-- 响应式布局 -->
        <!-- <el-row :gutter="10">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                <div class="grid-content bg-purple-light">2</div>
            </el-col>
            <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
                <div class="grid-content bg-purple">3</div>
            </el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
                <div class="grid-content bg-purple-light">4</div>
            </el-col>
        </el-row> -->

        <el-row :gutter="10">
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:8,offset:6}">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:8,offset:6}">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:8,offset:6}">
                <div class="grid-content bg-purple">1</div>
            </el-col>
            <el-col :xs="{span:24,offset:0}" :sm="{span:16,offset:4}" :md="{span:8,offset:6}">
                <div class="grid-content bg-purple">1</div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {

}
</script>

<style lang=""  scoped>
.el-col {
    border-radius: 4px;
}
.bg-purple-dark {
    background: #99a9bf;
}
.bg-purple {
    background: #d3dce6;
}
.bg-purple-light {
    background: #e5e9f2;
}
.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
</style>