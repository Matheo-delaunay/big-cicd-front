import {createApp} from 'vue';
import {createPinia} from 'pinia'
import App from './App.vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import router from "./router";

createApp(App)
    .use(PrimeVue)
    .use(createPinia())
    .use(router)
    .mount('#app');