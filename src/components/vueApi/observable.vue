<template>
    <div>
        <el-button @click="toSave">保存</el-button>
    </div>
</template>

<script>
import {state, mutations} from './store.js'
export default {
  name: 'table_form',
  computed: {
    screenCars () {
      return state.screenCars
    }
  },
  methods: {
    setTest: mutations.updateScreenCars,
    toSave () {
      this.setTest({a: 1})
      console.log(this.setTest)
    }
  }
}
</script>
