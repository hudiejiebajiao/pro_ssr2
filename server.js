// const Vue = require("vue");
const exp = require("express");
const express = exp();
const renderer = require("vue-server-renderer").createRenderer();
const createApp = require("./dist/bundle.server.js")["default"];

// 设置静态文件目录
express.use("/", exp.static(__dirname + "/dist"));

const clentBundleFileUrl = "/bundle.client.js";

// 创建Vue实例
// const app = new Vue({
//   template: "<div>hello world</div>",
// });

// 响应路由请求
express.get("*", (req, res) => {
  const context = { url: req.url };

  // 创建vue实例，传入请求路由信息
  createApp(context).then(
    (app) => {
      renderer.renderToString(app, (err, html) => {
        if (err) {
          return res.state(500).end("运行时错误");
        }
        res.send(`
                    <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <title>SSR渲染页面</title>
                            <script src="${clentBundleFileUrl}"></script>
                        </head>
                        <body>
                            <div id="app">${html}</div>
                        </body>
                    </html>
                `);
      });
    },
    (err) => {
      if (err.code === 404) {
        res.status(404).end("所请求的页面不存在");
      }
    }
  );
});

// 服务器监听地址
express.listen(8080, () => {
  console.log("服务器已启动！");
});
