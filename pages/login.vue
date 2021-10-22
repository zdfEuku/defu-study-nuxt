<template>
  <div>
    <!-- <Header/> -->
    <p>
      用户名： <input v-model="userName" />
    </p>
    <p>
      密码 <input v-model="password" />
    </p>
    <p>
      <button type="button" @click="submit">登录</button>
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
      userName: '',//用户名
      password: '',//密码
    }
  },
  methods: {
    async submit() {
      let params = {
        userName: this.userName,
        password: md5(this.password),
      };
      let response = await this.$axios.post(Urls.Loginurl, QS.stringify(params));
      debugger
      if (response.data.code != '0000') {
        alert('登录失败')
        return
      }
      this.$store.commit('saveAccessToken', response.data.data)
      alert('登录成功')
      this.getUserInfo();
      this.getCartNum();
    },

    async getUserInfo(){
      let res = await this.$axios.get(Urls.UserInfoUrl, {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.accesstoken
        }
      });
      debugger
      if(res.data.code == '0000'){
        this.$store.commit('saveUserInfo', res.data.data)
      }
    },

    async getCartNum(){
      let res = await this.$axios.get(Urls.GetCartListUrl, {
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.accesstoken
        }
      });
      debugger
      if(res.data.code == '0000'){
        let cartCount = 0;
        if (res.data.data && res.data.data.cartModels && res.data.data.cartModels.length > 0) {
          for (let cartItem of res.data.data.cartModels) {
            cartCount += cartItem.num;
          }
        }
        this.$store.commit('saveCartCount', cartCount)
      }
    }

  }
}
</script>
