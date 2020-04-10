import Vue from "vue";
import createRouter from "./route";
import App from "./App.vue";

// 创建vue实例
export function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: (h) => h(App),
  });
  return app;
}
