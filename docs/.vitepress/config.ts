// const sidebar = {
//   "/": [
//     { text: "快速开始", link: "/", items: [] },
//     {
//       text: "通用",
//       items: [{ text: "Button 按钮", link: "/components/button/", items: [] }]
//     },
//     { text: "导航", items: [] },
//     { text: "反馈", items: [] },
//     { text: "数据录入", items: [] },
//     { text: "数据展示", items: [] },
//     { text: "布局", items: [] }
//   ]
// };

const sidebar = {
  "/": [
    { text: "快速开始", link: "/" },
    {
      text: "通用",
      children: [{ text: "Button 按钮", link: "/components/button/" }]
    },
    { text: "导航" },
    { text: "反馈" },
    { text: "数据录入" },
    { text: "数据展示" },
    { text: "布局" }
  ]
};


const config = {
  themeConfig: {
    sidebar
  },
  markdown: {
    config(md) {
      // 这里可以使用markdown-it插件
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    }
  }
};

export default config;
