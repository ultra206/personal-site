import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import { es } from "primelocale/js/es.js";
import router from "./router";
import { i18n } from "./i18n";

import "./style.css";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue, {
  license: import.meta.env.VITE_PRIMEVUE_LICENSE_KEY,
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
  locale: es,
});

app.mount("#app");
