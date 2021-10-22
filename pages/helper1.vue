<template>
  <div>
    <h1>helper学习</h1>
    <div>
      秒数： {{content}}
    </div>
    <div>加载来源： {{renderOn}}</div>
    <div>
      <button type="button" @click="refresh">刷新</button>
    </div>
  </div>
</template>

<script>
import Urls from '@/http/url'
export default {
  asyncData(){
    return {
      content: new Date().getSeconds() + ' seconds',
      renderOn: process.client ? 'client' : 'server'
    }
  },
  methods: {
    refresh(){
      this.$nuxt.refresh();
    }
  },
  mounted(){
    // 加载进度条
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.$nuxt.$loading.finish()
      }, 5000)
    })
  }
}
</script>
