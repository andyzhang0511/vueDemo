<template>
  <div id="app">
      <p>demo1</p>
      <p>应用场景:需要在视图更新之后，基于新的视图进行操作。</p>
      <p ref="myWidth" v-if="showMe">{{ message }}</p>
      <button @click="getMyWidth">获取p元素宽度</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: '',
      showMe: false
    }
  },
  methods: {
    getMyWidth () {
      this.showMe = true
      //   this.message = this.$refs.MyWidth.offsetWidth
      //   console.log(this.message) // 报错 TypeError: this.$refs.myWidth is undefined
      this.$nextTick(() => {
        // DOM 更新了
        // dom元素更新后执行，此时能拿到p元素的属性
        this.message = this.$refs.myWidth.offsetWidth
        console.log(this.message)
      })
    }
  }
}
</script>

<style>

</style>
