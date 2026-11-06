import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementPlus from 'element-plus';
import '@/assets/style/index.scss';
import 'element-plus/dist/index.css';
import '@/assets/lib/tagcanvas.js';

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .mount('#app');
