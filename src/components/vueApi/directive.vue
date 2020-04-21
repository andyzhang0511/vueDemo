<template>
<div id="app">
 <span v-hello='color3'>{{ message }}</span>
 <button @click="add">点击开始加1</button>
 <button onclick="jiebang()">解绑</button>
</div>
</template>

<script>
import Vue from 'vue'
// Vue.directive指令(自定义指令)
// el: 指令所绑定的元素，可以用来直接操作DOM
// binding: 一个对象，包含指令的很多信息
// vnode: VUE编译生成的虚拟节点
function jiebang () {
  app.$destroy()
}
// 最主要是这一段
Vue.directive('hello', (el, binding, vnode) => {
  el.style['color'] = binding.value
})
Vue.directive('hello', {
  bind: function (el, binding, vnode) {
    el.style['color'] = binding.value
    console.log('1-bind')
  },
  inserted: function () {
    console.log('2-insert')
  },
  update: function () {
    console.log('3-update')
  },
  componentUpdated: function () {
    console.log('4-componentUpdated')
  },
  unbind: function () {
    console.log('5-unbind')
  }
})
export default {
  data () {
    return {
      message: 10,
      color3: 'red'
    }
  },
  mounted () {

  },
  methods: {
    add () {
      this.message++
      console.log(this.message)
    }
  }
}
</script>

<style>
</style>
