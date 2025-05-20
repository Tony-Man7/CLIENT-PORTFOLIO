import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Brand Icons
import { faLinkedin, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';

// Solid Icons
import { faPhone, faEnvelope, faLocationDot, faBriefcase } from '@fortawesome/free-solid-svg-icons';

// Regular Icons
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

// Add icons to the library
library.add(faLinkedin, faTelegram, faWhatsapp, faCheckCircle, faPhone, faEnvelope, faLocationDot, faBriefcase);

const app = createApp(App);

app.use(VueSplide);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('Splide', Splide);
app.component('SplideSlide', SplideSlide);

app.use(router);
app.mount('#app');
