<template>
<div id="app2">
    <p v-for="item in items" :key="item.id">
        {{item.message}}
    </p>
    <button class="btn" @click="btn2Click()">动态赋值</button><br/>
    <button class="btn" @click="btn3Click()">为data新增属性</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {message: 'Test one', id: '1'},
        {message: 'Test two', id: '2'},
        {message: 'Test three', id: '3'}
      ]
    }
  },
  methods: {
    /**
       * Vue.set(target,key,value)
       * target:要更改的数据源（可以是对象或者数组）
       * key:要更改的具体数据
       * value:重新赋的值
      */
    // Vue.set()修改数据
    btn2Click () {
      this.$set(this.items, 0, {message: 'Change Test', id: '10'})
      console.log(this.items[0]) // message: 'Change Test', id: '10'},
    },
    // Vue.set()添加数据
    btn3Click () {
      const itemLen = this.items.length
      this.$set(this.items, itemLen, {message: 'Test add attr', id: itemLen})
      console.log(this.items)
      /**
       * [
            {message: 'Test one', id: '10'},
            {message: 'Test two', id: '2'},
            {message: 'Test three', id: '3'},
            {message: 'Test three', id: 3}
        ]
      */
    }
  }
}
</script>

<style>
</style>
