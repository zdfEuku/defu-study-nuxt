<template>
  <div style="background: cyan;">
    token的值： <span style="color: blue;">{{token}}</span>
    <span style="margin-left: 15px;">
      用户名： <span style="color: blue;">{{userName}}</span>
    </span>
    <span style="margin-left: 15px;">
      购物车数量： <span style="color: blue;">{{cartCount}}</span>
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    token(){
      return this.$store.state.accesstoken
    },
    userName(){
      if(this.$store.state.userInfo){
        return this.$store.state.userInfo.userName;
      }else{
        return ''
      }
    },
    cartCount(){
      return this.$store.state.cartCount
    }
  }
}
</script>
