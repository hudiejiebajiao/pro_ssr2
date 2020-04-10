import { createApp } from "../src/main";

export default (context) => {
  return new Promise((resolve, reject) => {
    const app = createApp();

    // 更改路由
    app.$router.push(context.url);

    // 获取相应路由下的组件
    const matchComponents = app.$router.getMatchedComponents();

    // 如果没有组件说明该路由不存在
    if (!matchComponents.length) return reject({ code: 404 });
    resolve(app);
  });
};
