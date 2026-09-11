import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '青卷文档',
  titleTemplate: ':title | 青卷文档',
  description: '青卷 QingJuan 的 Windows 本机模式、PC 局域网共享、Linux 远程部署、Android 客户端与开发文档。',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#f4f8fc' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/logo.png',
    siteTitle: '青卷 QingJuan',
    nav: [
      {
        text: 'Docs',
        link: '/guide/quick-start',
        activeMatch: '^/(guide|server|development)/|^/reference/(supported-sites|commands|faq)'
      },
      { text: '更新日志', link: '/reference/changelog', activeMatch: '^/reference/changelog' },
      { text: 'GitHub', link: 'https://github.com/qingscroll/QingJuan' },
      { text: '下载应用', link: 'https://github.com/qingscroll/QingJuan/releases/latest' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '认识青卷',
          items: [
            { text: '青卷是什么', link: '/guide/what-is-qingjuan' },
            { text: '界面展示', link: '/guide/interface-showcase' },
            { text: '五分钟开始', link: '/guide/quick-start' },
            { text: '安装客户端', link: '/guide/install-client' },
            { text: '选择与连接后端', link: '/guide/connect-server' }
          ]
        },
        {
          text: '使用客户端',
          items: [
            { text: '书架与导入', link: '/guide/library-and-import' },
            { text: '账号与安全', link: '/guide/account-and-security' },
            { text: '书源、插件与搜索', link: '/guide/sources-and-search' },
            { text: '阅读与听书', link: '/guide/reading-and-tts' },
            { text: '翻译', link: '/guide/translation' },
            { text: '任务与导出', link: '/guide/tasks-and-export' }
          ]
        },
        {
          text: '内置解析器',
          collapsed: true,
          items: [
            { text: '解析器总览', link: '/guide/parsers/' },
            { text: '番茄小说', link: '/guide/parsers/fanqie' },
            { text: '起点中文网', link: '/guide/parsers/qidian' },
            { text: '夸克小说', link: '/guide/parsers/quark' },
            { text: '笔趣阁', link: '/guide/parsers/biqvge' },
            { text: '刺猬猫阅读', link: '/guide/parsers/ciweimao' },
            { text: 'SF 轻小说', link: '/guide/parsers/sfacg' },
            { text: '少年梦阅读', link: '/guide/parsers/shaoniandream' },
            { text: 'Kakuyomu', link: '/guide/parsers/kakuyomu' },
            { text: 'Syosetu', link: '/guide/parsers/syosetu' },
            { text: 'Novel18', link: '/guide/parsers/novel18' },
            { text: 'Hameln', link: '/guide/parsers/hameln' },
            { text: 'Novelup', link: '/guide/parsers/novelup' },
            { text: 'Alphapolis', link: '/guide/parsers/alphapolis' },
            { text: 'Linovelib / Bilinovel', link: '/guide/parsers/linovelib' },
            { text: 'Pixiv', link: '/guide/parsers/pixiv' },
            { text: '18Comic', link: '/guide/parsers/18comic' },
            { text: 'Bika Web App', link: '/guide/parsers/bika' },
            { text: 'E-Hentai', link: '/guide/parsers/ehentai' },
            { text: 'Pixiv Comic', link: '/guide/parsers/pixiv-comic' },
            { text: 'Yanmaga', link: '/guide/parsers/yanmaga' },
            { text: 'Webtoons', link: '/guide/parsers/webtoons' },
            { text: 'Mangabz', link: '/guide/parsers/mangabz' },
            { text: '漫画柜', link: '/guide/parsers/manhuagui' },
            { text: '拷贝漫画', link: '/guide/parsers/copymanga' },
            { text: 'COMICORES 漫核', link: '/guide/parsers/comicores' },
            { text: '动漫之家', link: '/guide/parsers/dmzj' },
            { text: '通用网页', link: '/guide/parsers/generic-web' }
          ]
        }
      ],
      '/server/': [
        {
          text: '部署',
          items: [
            { text: '准备服务器', link: '/server/requirements' },
            { text: '安装服务端', link: '/server/deploy' },
            { text: '管理界面', link: '/server/admin-console' },
            { text: '用户与注册', link: '/server/users-and-registration' },
            { text: '网络与安全', link: '/server/network-and-security' }
          ]
        },
        {
          text: '运维',
          items: [
            { text: '更新与维护', link: '/server/maintenance' },
            { text: '备份与迁移', link: '/server/backup-and-restore' },
            { text: '故障排查', link: '/server/troubleshooting' }
          ]
        }
      ],
      '/development/': [
        {
          text: '完整开发规范',
          items: [
            { text: '开发规范总览', link: '/development/README' },
            { text: '原则与架构', link: '/development/01-principles-and-architecture' },
            { text: 'UI、交互与可访问性', link: '/development/02-ui-and-accessibility' },
            { text: 'Flutter 客户端', link: '/development/03-frontend' },
            { text: '后端与客户端集成', link: '/development/04-backend-and-android' },
            { text: '质量与测试', link: '/development/05-quality-and-testing' },
            { text: '工作流、发布与迁移', link: '/development/06-workflow-and-migration' }
          ]
        },
        {
          text: '贡献速览',
          collapsed: true,
          items: [
            { text: '开发概览', link: '/development/overview' },
            { text: '架构摘要', link: '/development/architecture' },
            { text: '搭建环境', link: '/development/setup' },
            { text: '测试摘要', link: '/development/testing' },
            { text: '发布摘要', link: '/development/release' },
            { text: '站点插件规范', link: '/development/07-site-plugin-spec' },
            { text: '客户端更新与安装包', link: '/development/08-client-updates' },
            { text: '移动端重构规范', link: '/design/mobile-redesign' }
          ]
        }
      ],
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '支持范围', link: '/reference/supported-sites' },
            { text: '常用命令', link: '/reference/commands' },
            { text: '常见问题', link: '/reference/faq' },
            { text: '更新日志', link: '/reference/changelog' },
            { text: 'v2.2.0', link: '/releases/v2.2.0' },
            { text: 'v2.1.1', link: '/releases/v2.1.1' },
            { text: 'v2.1.0', link: '/releases/v2.1.0' }
          ]
        }
      ],
      '/releases/': [
        {
          text: '更新日志',
          items: [
            { text: '全部版本', link: '/reference/changelog' },
            { text: 'v2.2.0', link: '/releases/v2.2.0' },
            { text: 'v2.1.1', link: '/releases/v2.1.1' },
            { text: 'v2.1.0', link: '/releases/v2.1.0' },
            { text: 'v2.0.2', link: '/releases/v2.0.2' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '没有找到相关内容',
            resetButtonTitle: '清除搜索',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    outline: {
      level: [2, 3],
      label: '本页目录'
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '文档导航',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})
