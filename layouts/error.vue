<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>
      <span v-if="!error.message">{{error.message}}</span>
      <span v-else>{{error.message}}</span>
    </h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'blog' // you can set a custom layout for the error page
  }
</script>
