<template>
    <div id="app">
        <div>
            <button id="firstBtn" @click="testClick()" ref="aa">{{ testMsg }}</button>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      testMsg: '原始值'
    }
  },
  methods: {
    testClick () {
      this.testMsg = '修改后的值'
      //   console.log(this.$refs.aa.innerHTML) // 原始值
      this.$nextTick(() => {
        console.log(this.$refs.aa.innerHTML) // 修改后的值
      })
    //   注意: Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新
    //   在修改数据之后使用 $nextTick，则可以在回调中获取更新后的 DOM（这句话非常重要！！！）
    }
  }
}
</script>

<style>
</style>
