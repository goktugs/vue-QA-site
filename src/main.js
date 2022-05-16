import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/app.css';
import appAxios from '@/axios/appAxios';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
// global olarak zıng diye erişmek için

app.config.globalProperties.$appAxios = appAxios;
