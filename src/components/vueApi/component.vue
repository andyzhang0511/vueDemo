<template>
    <div>
        <div id="app-test-one">
            <h1>{{title}}</h1>
            <my-component />
        </div>
        <div id="app-test-two">
            <h1>{{title}}</h1>
            <my-component />
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.component('my-component', {
  template: `
  <div>
        <h2>Hello</h2>
        <p>{{name}}</p>
        <button @click='changeName()'>changeName</button>
  </div>`,
  data () {
    return {
      name: 'Vue'
    }
  },
  methods: {
    changeName () {
      this.name = 'qwe'
    }
  }
})

// 构建两个Vue实例
const one = new Vue({
  el: '#app-test-one',
  data: {
    title: 'ONE'
  }
})
const two = new Vue({
  el: '#app-test-two',
  data: {
    title: 'TWO'
  }
})

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
</style>
