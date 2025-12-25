import { defineConfig } from 'vitepress'
import markdownItMathjax3 from 'markdown-it-mathjax3'
import { generateSidebar } from 'vitepress-sidebar'; // 引入自动生成插件

export default defineConfig({
  title: "机器学习基础",
  description: "我的个人机器学习讲义花园",
  base: '/ml_course2025/',
  markdown: {
    config: (md) => {
      md.use(markdownItMathjax3)
    }
  },

  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      // 这里可以放一个总入口，比如第一章的第一篇
      { text: '开始学习', link: '/chapter1/intro' },
    ],

    // 【重点！】把原来的手写 sidebar 删掉，换成这个自动生成函数
    sidebar: generateSidebar({
      documentRootPath: 'docs', // 告诉插件文档在哪里
      useTitleFromFileHeading: true, // 核心！自动读取 MD 文件里的 # 一级标题作为目录名
      collapsed: false, // 是否默认折叠章节
      hyphenToSpace: true, // 把文件名里的连字符变成空格
      underscoreToSpace: true,
      
      // 如果你想让不同文件夹显示不同侧边栏（比如 chapter1 只显示 chapter1 的内容）
      // 这里暂时设为 null，表示全站通用一个侧边栏
      // 随着你课程变多，它会自动把文件夹变成一级大标题
    }),

    outline: {
      level: [2, 4], // 显示 h2 到 h4 的大纲
      label: '大纲'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourname/ml-course' }
    ]
  }
})