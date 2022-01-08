import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import numberoll from "./components/numberoll/index";

const app = createApp(App);

app.use(store).use(router).use(numberoll);

app.mount("#app");
