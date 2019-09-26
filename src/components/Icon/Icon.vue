<template>
    <span class="c-icon" :class="icon && `c-icon--${icon}`"></span>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: undefined
            }
        }
    }
</script>

<style lang="scss">
  .toro {
    color: red;
  }
</style>
