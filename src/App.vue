<template>
  <HeaderComponent />
  <main class="main">
    <router-view></router-view>
  </main>
  <FooterComponent />
</template>

<script>

import HeaderComponent from './components/Header/Header.vue';
import FooterComponent from './components/Footer/Footer.vue';


const App = {
  data() {
    return {
      text: 'test'
    }
  },
  components: {
    HeaderComponent,
    FooterComponent,
  }

}
export default App;
</script>

<style lang="scss">
@import './App.variables.scss';
</style>