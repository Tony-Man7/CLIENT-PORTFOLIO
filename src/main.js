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
import { faFacebook, faLinkedin, faTwitter,  } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'; 


// Add icons to the library
library.add(faFacebook, faLinkedin, faTwitter, faCheckCircle, faPhone, faEnvelope, faLocationDot);

const app = createApp(App);

app.use( VueSplide );
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.component('Splide', Splide);
app.component('SplideSlide', SplideSlide);

app.use(router);
app.mount('#app');
