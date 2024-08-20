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

const app = createApp(App)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount('#app')
