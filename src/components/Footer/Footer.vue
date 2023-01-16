<template>
  <footer class="footer__container">
    {{ text }}
  </footer>
</template>

<script>
const FooterComponent = {
  data() {
    return {
      text: 'footer'
    }
  },
}
export default FooterComponent;
</script>

<style lang="scss">
@import '../../App.variables.scss';
</style>