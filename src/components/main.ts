import * as components from "@/components";
import { App } from "@vue/runtime-core";

const plugin = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};

export default plugin;
