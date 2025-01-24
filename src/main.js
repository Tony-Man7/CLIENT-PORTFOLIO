import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(faFacebook, faLinkedin, faTwitter, faGithub);

const app = createApp(App);

app.use( VueSplide );
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('Splide', Splide);
app.component('SplideSlide', SplideSlide);

app.use(router);
app.mount('#app');

AOS.init({
  duration: 1000,
  easing: 'ease',
  once: false,
});
