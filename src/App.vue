<template lang="pug">
  div
    top-menu
    div#app.container
      div.row
        h1 Bem-vindo à Taverna Simplista
        router-view
</template>

<script>  
  import TopMenu from './components/TopMenu.vue'

  export default {
    name: 'app',
    components: {
      TopMenu
    }
  }
</script>

<style lang="sass">
  @import 'app'
</style>
