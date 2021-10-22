<template>
  <div>
    <h1>context学习</h1>
  </div>
</template>

<script>
import Urls from '@/http/url'
export default {
  middleware({redirect, store}){
    let accesstoken = store.state.accesstoken
    if(!accesstoken){
      return redirect('/login')
    }
  },
  async asyncData(context){
    // try{
    //   var s = 10;
    //   throw new Error('发生了错误-德福')
    // }catch(err){
    //   context.error({
    //     message: err.message,
    //     statusCode: 500
    //   })
    // }

    const id = 10
    try {
      // Using the nuxtjs/http module here exposed via context.app
      const post = await context.app.$http.$get(
        `https://api.nuxtjs.dev/posts/${id}`
      )
      return { post }
    } catch (e) {
      context.error(e) // Show the nuxt error page with the thrown error
    }
  }
}
</script>
