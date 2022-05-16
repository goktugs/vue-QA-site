import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/app.css';
import appAxios from '@/axios/appAxios';
import helperMixins from './mixins/helperMixins';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
// global olarak zıng diye erişmek için

app.config.globalProperties.$appAxios = appAxios;

app.mixin(helperMixins);
