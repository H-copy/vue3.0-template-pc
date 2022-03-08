import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "element-plus/es/components/message/style/css";

const app = createApp(App);
app.use(router).use(createPinia()).mount("#app");
