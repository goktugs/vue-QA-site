import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/app.css';
import appAxios from '@/axios/appAxios';
import helperMixins from './mixins/helperMixins';
import { quillEditor } from 'vue3-quill';
import AppAlert from '@/components/AppShared/AppAlert';

const app = createApp(App);
app.config.globalProperties.$appAxios = appAxios;
app.component('AppAlert', AppAlert);
app.mixin(helperMixins);
app.use(store);
app.use(router);
app.use(quillEditor);
app.mount('#app');
// global olarak  diye erişmek için
