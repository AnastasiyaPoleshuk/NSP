<template>
  <main class="main-view__container">
    {{ text }}
  </main>
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