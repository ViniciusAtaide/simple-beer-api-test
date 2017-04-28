<template lang="pug">
  div#app.container
    h1 Bem-vindo à Taverna Simplista
    router-view
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import 'app'

h1
  font-size: 28px
</style>
