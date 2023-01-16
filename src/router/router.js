import { createRouter, createWebHistory } from 'vue-router';
import constants from '../utils/constants';
import AboutCompanyView from '../views/AboutCompanyView/AboutCompanyView.vue';
import CatalogView from '../views/CatalogView/CatalogView.vue';
import ContactsView from '../views/ContactsView/ContactsView.vue';
import MainView from '../views/MainView/MainView.vue';
import WhyNspView from '../views/WhyNspView/WhyNspView.vue';
import NotFoundView from '../views/NotFoundView/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      component: MainView,
    },
    {
      path: `${constants.ROUTS.WHYNSP}`,
      component: WhyNspView,
    },
    {
      path: `${constants.ROUTS.CONTACTS}`,
      component: ContactsView,
    },
    {
      path: `${constants.ROUTS.CATALOG}`,
      component: CatalogView,
    },
    {
      path: `${constants.ROUTS.ABOUT_COMPANY}`,
      component: AboutCompanyView,
    },
    {
      path: `${constants.ROUTS.NOT_FOUND}`,
      component: NotFoundView,
    },
  ],
})

export default router;
