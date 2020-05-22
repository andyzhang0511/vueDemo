
<template>
    <div>
        <p>ip: <input ref="host" value="192.168.0.187" /></p>
        <p>端口:<input ref="port" value="7681"/></p>
        <button ref="btn" @click="play()">连接</button>
        <button ref="btn" @click="reload1()">刷新</button>
        <video ref="video" style="height: 500px; width: 500px"></video>
    </div>
</template>

<script>
import Wfs from '@/vendor/wfs.js'
export default {
  data () {
    return {
    }
  },
  mounted () {
    // console.log(Wfs)
    this.play()
  },
  methods: {
    // 播放流程:调用后端接口api，获取到C++那边的websocket相关信息 地址和一些参数
    play () {
      if (Wfs.isSupported()) {
        const ip = this.$refs.host.value
        const port = this.$refs.port.value
        const video1 = this.$refs.video1
        const wfs = new Wfs()
        console.log(wfs)
        wfs.initAudio()
        if (!wfs.timer) {
          wfs.setTime()
        }
        wfs.attachMedia(video1, ip, port)
        // console.log(wfs)
      }
    },
    reload1 () {
      window.location.reload()
    }
  }
}
</script>

<style lang=""  scoped>
</style>
