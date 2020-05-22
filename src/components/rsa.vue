<template>
    <div>
        <button @click="getRSApass('hello')">测试</button>
    </div>
</template>

<script>
import JSEncrypt from 'JSEncrypt'
export default {
  data () {
    return {}
  },
  methods: {
    getRSApass (password) {
      const jse = new JSEncrypt()
      console.log(password)
      // 公钥
      var publicString = '-----BEGIN PUBLIC KEY-----\n' +
            'MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBALP4E6ON8d7TkrlxJlEgPgZCZnsGq35Z4saZSQhx7b1K41b1POT6tDetlsabERyIviAba7IzVYqFT5Mag/60PXcCAwEAAQ==\n' +
            '-----END PUBLIC KEY-----'
      jse.setPublicKey(publicString)
      // 加密内容
      let encrypted = jse.encrypt(password)
      console.log(encrypted) // hello转成的base64
      return encrypted
    }

  }
}
</script>

<style lang="">

</style>
