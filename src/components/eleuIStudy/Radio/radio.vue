<template>
    <div>
        <el-radio v-model="radio" label="haha">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>
    <!-- label可以是String、Number或Boolean。 -->
</template>

<script>
export default {
    data () {
        return {
            radio: 'haha'
        };
    }
}
</script>

<style lang="">
</style>