<template>
  <footer class="footer__container">
    {{ text }}
  </footer>
</template>

<script>
const Footer = {
  data() {
    return {
      text: 'footer'
    }
  },
}
export default Footer;
</script>

<style lang="scss">
@import '../../App.variables.scss';
</style>