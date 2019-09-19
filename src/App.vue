<template>
    <router-view />
</template>

<style lang="scss">
  body {
    margin: 0;
  }
</style>

<script>
    export default {
        updated () {
            window.Pegasus.init()
        }
    }
</script>
