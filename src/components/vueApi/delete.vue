<template>
<div>

</div>
</template>

<script>

const a = [1, 2, 3, 4]
delete a[1]
console.log(a) // [1, empty, 3, 4]
const b = [1, 2, 3, 4]

export default {
  data () {
    return {
      nameList: {
        id: 1,
        name: '钱学森'
      }
    }
  },
  mounted () {
    this.$delete(b, 1)
    this.$delete(this.nameList, 'name')
    console.log(b) // [1, 3, 4]
    console.log(this.nameList) // nameList: { id:1 }
  },
  methods: {
    /**
       *1.delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。
       *2.Vue.delete 直接删除了数组 改变了数组的键值
      */
  }
}
</script>

<style>
</style>
