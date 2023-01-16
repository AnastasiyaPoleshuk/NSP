<template>
  <main class="main main-view__container">
    {{ text }}
  </main>
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