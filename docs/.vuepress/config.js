const path = require('path')

module.exports = {
  base: '/dingtalk-plugin/',
  port: 8888,
  dest: 'docs-dist',
  title: '钉钉机器人插件',
  description: '在 Jenkins 中使用钉钉机器人发送消息',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../')
      }
    }
  },
  markdown: {
    anchor: { permalink: true }
  },
  themeConfig: {
    docsDir: 'docs',
    repo: 'jenkinsci/dingtalk-plugin',
    sidebarDepth: 1,
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '发布记录',
        link: 'https://github.com/jenkinsci/dingtalk-plugin/releases'
      }
    ],
    sidebar: [
      {
        title: '指南',
        path: '/guide/getting-started',
        collapsable: false,
        children: [
          '/guide/getting-started',
          '/guide/freestyle',
          '/guide/pipeline'
        ]
      },
      {
        title: '进阶',
        path: '/advance/getting-started',
        collapsable: false,
        children: ['/advance/user-property', '/advance/markdown']
      },
      {
        title: '示例',
        path: '/examples/freestyleAdvanced',
        collapsable: false,
        children: [
          '/examples/freestyleAdvanced',
          '/examples/text',
          '/examples/link',
          '/examples/markdown',
          '/examples/actionCardSingle',
          '/examples/actionCardMultiple'
        ]
      }
    ]
  }
}
