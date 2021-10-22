<template>
  <div>
    <!-- <Header/> -->
    <p>
      <button type="button" @click="loginout">退出登录</button>
    </p>
  </div>
</template>

<script>
import Urls from '@/http/url';
import md5 from "js-md5";
import QS from 'qs';
export default {
  async asyncData(context) {
  },
  data() {
    return {
    }
  },
  methods: {
    async loginout(){
      let res = await this.$axios.get(Urls.Logouturl, {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.accesstoken
        }
      });
      debugger
      if(res.data.code == '0000'){
        this.$store.commit('loginOut')
        this.$message.success('退出登录成功')
      }
    },

  }
}
</script>
