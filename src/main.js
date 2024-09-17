import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import "flowbite";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, fab);

import router from '../router';

const app = createApp(App).use(router);
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
