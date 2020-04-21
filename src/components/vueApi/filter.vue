<template>
    <div>
        <p>{{ message | filterA | filterB}}</p>
    </div>
</template>

<script>

export default {
  filters: {
    filterA: function (value) {
      return value + '年'
    },
    filterB: function (value) {
      return value + 'Hello World'
    }
  },
  data () {
    return {
      message: '2018'
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style>
</style>
