<template>
  <div id="app">
    <div class="container">
      <vsd-wizard></vsd-wizard>
    </div>
  </div>
</template>

<script>
  import VsdWizard from './components/vsd-wizard.vue'

  export default {
    name: 'app',
    components: {
      "vsd-wizard": VsdWizard
    }
  }
</script>

<style>
  #app {
    background: #2c3e50;
  }
</style>
