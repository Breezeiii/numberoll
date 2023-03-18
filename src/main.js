import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// import Numberoll from "@lib";
import Numberoll from "/dist/numberoll";
import "/dist/style.css";

createApp(App).use(Numberoll).mount("#app");
