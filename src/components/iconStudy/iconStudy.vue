<template>
    <div>
        <el-row class="tac">
            <el-col :span="12">
                <h5>默认颜色111</h5>
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="iconfont iconhtmal5icon06"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">
                                <i class="iconfont iconhtmal5icon06"></i>分组一
                            </template>
                            <el-menu-item index="1-1">
                                <i class="iconfont iconliuliangyunpingtaitubiao08"></i>选项1
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <i class="iconfont iconguanliyuan_guanliyuanliebiao"></i>选项2
                            </el-menu-item>
                        </el-menu-item-group>

                        <el-menu-item-group>
                            <template slot="title">
                                <i class="iconfont iconhtmal5icon06"></i>分组一
                            </template>
                            <el-menu-item index="1-1">
                                <i class="iconfont iconliuliangyunpingtaitubiao08"></i>选项1
                            </el-menu-item>
                            <el-menu-item index="1-2">
                                <i class="iconfont iconguanliyuan_guanliyuanliebiao"></i>选项2
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">导航二</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">导航三</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting"></i>
                        <span slot="title">导航四</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style lang=""  scoped>
</style>