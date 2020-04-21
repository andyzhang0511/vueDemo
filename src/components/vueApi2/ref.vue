<template>
    <div id="app">
        <h1 ref="h1Ele">这是H1</h1>
        <button @click="getref">获取H1元素</button>
    </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getref () {
      // 表示从$refs对象中，获取ref属性值为: h1Ele  DOM元素或组件
      console.log(this.$refs.h1Ele.innerHTML)
      this.$refs.h1Ele.style.color = 'red'
    }
  }
}
</script>
