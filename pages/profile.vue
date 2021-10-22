<template>
  <div>
    <h2>profile</h2>
    <nuxt-link to="/profile/user">user</nuxt-link>
    <nuxt-link to="/profile/score">score</nuxt-link>
    <nuxt-child/>
  </div>
</template>

<style>
.page-enter-active, .page-leave-active{
  transition: opacity 0.5s;
}
.page-enter, .page-leave-to{
  opacity: 0;
}
.slide-enter-active, .slide-leave-active{
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to{
  transform: translateY(150px);
  opacity: 0;
}
</style>
