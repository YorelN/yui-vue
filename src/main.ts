import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import YuiPlugin from "@/components/main";

createApp(App).use(YuiPlugin).mount("#app");
