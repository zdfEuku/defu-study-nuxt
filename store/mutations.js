export default {
  saveAccessToken(state, value){
    state.accesstoken = value;
  },
  saveUserInfo(state, value){
    state.userInfo = value;
  },
  saveCartCount(state, value){
    state.cartCount = value;
  },
  loginOut(state, value){
    state.accesstoken = "";
    state.userInfo = null;
    state.cartCount = 0;
  }
}
