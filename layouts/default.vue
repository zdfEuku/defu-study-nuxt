<template>
<div>
  <div v-if="$nuxt.isOffline">断网了</div>
  <div>默认layout</div>
  <Header/>
  <nuxt />
</div>
</template>
