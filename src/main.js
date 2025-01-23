import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const app = createApp(App)

app.use(router)

app.mount('#app')

AOS.init({
    duration: 1000, 
    easing: 'ease', 
    once: false, 
  });
  