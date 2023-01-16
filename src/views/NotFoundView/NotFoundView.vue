<template>
  <section class="not-found__container">
    {{ text }}
  </section>
</template>

<script>
const NotFoundView = {
  data() {
    return {
      text: 'Page not found'
    }
  },
}
export default NotFoundView;
</script>

<style lang="scss">
@import '../../App.variables.scss';
</style>