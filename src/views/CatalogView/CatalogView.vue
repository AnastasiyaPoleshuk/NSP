<template>
  <main class="main-view__container">
    {{ text }}
  </main>
</template>

<script>
const CatalogView = {
  data() {
    return {
      text: 'CatalogView'
    }
  },
}
export default CatalogView;
</script>

<style lang="scss">
@import '../../App.variables.scss';
</style>