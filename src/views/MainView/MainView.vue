<template>
  <section class="main-view__container">
    {{ text }}
  </section>
</template>

<script>
const MainView = {
  data() {
    return {
      text: 'MainView'
    }
  },
}
export default MainView;
</script>

<style lang="scss">
@import '../../App.variables.scss';
</style>