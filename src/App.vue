<template>
  <div class="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';


  const App = {
    data() {
        return {
          text: 'test'
        }
    },
    components: {
      Header,
      Footer
    }
      
  }
  export default App;
</script>

<style lang="scss">
@import './App.variables.scss';

  .app {
    display: flex;
    flex-direction: column;
    max-width: $main-width;
    margin: 0 auto;
  }
</style>