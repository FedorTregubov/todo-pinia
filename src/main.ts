import { createApp, h } from "vue";
import { createPinia } from "pinia";
import App from "./app-root.vue";
import "@/assets/stylesheets/main.scss";

const app = createApp({
  render: () => h(App),
});

app.use(createPinia());

app.mount("#app");
