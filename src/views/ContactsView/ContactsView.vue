<template>
  <section class="main-view__container">
    {{ text }}
  </section>
</template>

<script>
const ContactsView = {
  data() {
    return {
      text: 'ContactsView'
    }
  },
}
export default ContactsView;
</script>

<style lang="scss">
@import '../../App.variables.scss';
</style>