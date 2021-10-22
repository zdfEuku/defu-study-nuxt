<template>
  <div>
    keyword的值： {{keyword}}
  </div>
</template>

<script>
export default {
  async asyncData({app}){
    let res = await app.$myFetch('https://t2.toolmall.com/merchant/back/default/getDefaultKeyword')
    return {
      keyword: res.data.keyword
    }
  },
}
</script>
