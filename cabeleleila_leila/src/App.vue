<template>
  <div id="app">

    <router-view />

  </div>
</template>

<script>

export default {
  components: {

  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

body {
  margin: 0px;
}

footer {
  margin-top: auto;
}
</style>
