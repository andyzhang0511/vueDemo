<template>
  <div>
    <p>Vue.extend是一个全局的API，实际是创建一个构造器，</p>
    <p>并将其挂载到HTML的元素上(创建一个template标签)。可以通过propsData传参。</p>
    <h1>Vue.extend</h1>
    <hr>
    <div id="element">
        <p>Hello!</p>
    </div>
    <hr>
    <author></author>
    <hr>
    <div id="transmit"></div>
  </div>
</template>

<script>
/**
 * 在 vue 项目中，我们有了初始化的根实例后，所有页面基本上都是通过 router 来管理，
 * 组件也是通过 import 来进行局部注册,所以组件的创建我们不需要去关注,相比 extend 要更省心一些。
 * 但是这样做会有几个缺点：
 * 组件模板都是事先定义好的，如果我要从接口动态渲染组件怎么办？
 * 所有内容都是在 #app下渲染，注册组件都是在当前位置渲染。
 * 如果我要实现一个类似于 window.alert()提示组件要求像调用 JS 函数一样调用它，该怎么办？
 * 这时候，Vue.extend + vm.$mount 组合就派上用场了
*/
import Vue from 'vue'
const Profile1 = Vue.extend({
  template: '<p>My name is {{ Name }}</p>',
  data: function () {
    return {
      Name: 'ElucidatorSky1'
    }
  }
})
const Profile2 = Vue.extend({
  template: '<p>{{ Name }}</p>',
  data: function () {
    return {
      Name: 'ElucidatorSky2'
    }
  }
})
const Profile3 = Vue.extend({
  template: '<p>{{ extendData }} </br>实例传入的数据为:{{ propsExtend }}</p>',
  data: function () {
    return {
      extendData: '这是extend扩展的数据'
    }
  },
  props: ['propsExtend']
})
export default {
  data () {
    return {
    }
  },
  mounted () {
    //   输出Profile实例，在控制台输出为VueComponents{}
    console.log(new Profile1())
    // 创建Profile1实例，并挂载到一个元素上
    new Profile1().$mount('#element')
    // 创建Profile2实例，并挂载到一个元素上
    new Profile2().$mount('author')
    // 创建Profile3实例，并挂载到一个元素上.可以通过propsData传参
    new Profile3({propsData: {propsExtend: '我是实例传入的数据'}}).$mount('#transmit')
  },
  methods: {

  }
}
</script>

<style>
#element h1{
    color: blue;
}
h1 {
    color: red;
}
</style>
