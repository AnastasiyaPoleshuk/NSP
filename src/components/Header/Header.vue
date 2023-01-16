<template>
  <header class="header__container">
    <div class="header__logo">
      <router-link to="/">Независимый партнер</router-link>
    </div>
    <nav>
      <ul class="header__list" >
        <li class="header__item">
          <router-link :to="routs.WHYNSP">Об НСП</router-link>
        </li>
        <li class="header__item">
          <router-link :to="routs.ABOUT_COMPANY">О компании</router-link>
        </li>
        <li class="header__item">
          <router-link :to="routs.CATALOG">Каталог</router-link>
        </li>
        <li class="header__item">
          <router-link :to="routs.CONTACTS">Контакты</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import constants from '../../utils/constants';
const HeaderComponent = {
  data() {
    return {
      routs: constants.ROUTS,
    }
  },
}
export default HeaderComponent;
</script>

<style lang="scss">
@import '../../App.variables.scss';

.header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
}

.header__logo {
  background-image: url(../../assets/nsp.png);
  background-repeat: no-repeat;
  background-position: left, top;
  background-size: 45px, 45px;
}

.header__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
}

.header__item {}
</style>