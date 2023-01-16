<template>
  <section class="main-view__container">
    {{ text }}
  </section>
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