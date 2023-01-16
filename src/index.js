import * as Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import './index.html';
import './reset.css';
import './index.scss';

const app = Vue.createApp(App);

app.use(router);
app.mount('#root')