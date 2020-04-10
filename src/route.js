import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default function createRouter() {
  let router = new VueRouter({
    //   #后面不会发送到服务器，如果不配置则无法根据路由信息进行服务端渲染
    mode: "history",
    routes: [
      {
        alias: "/",
        path: "/home",
        component: require("./routes/Home.vue"),
      },
      {
        alias: "/",
        path: "/page1",
        component: require("./routes/Page1.vue"),
      },
      {
        alias: "/",
        path: "/page2",
        component: require("./routes/Page2.vue"),
      },
    ],
  });
  return router;
}
