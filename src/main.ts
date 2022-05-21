import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
import '@styles/index.scss';

declare global {
  interface Window {
    Modernizr: {
      webp: boolean;
    };
  }
}

const app = createApp(App);

app.use(router);
app.mount('#app');
