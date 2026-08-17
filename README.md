# 青卷文档站

这是 [青卷 QingJuan](https://github.com/Tavre/QingJuan) 的中文 VitePress 文档站，内容覆盖 Windows 本机模式、Linux 远程服务、Android 客户端、运维和贡献开发。

## 本地运行

需要 Node.js 20 或更高版本。

```powershell
npm install
npm run docs:dev
```

构建静态站点：

```powershell
npm run docs:build
```

构建产物位于 `docs/.vitepress/dist/`。

## 部署到 Cloudflare Pages

推荐在 Cloudflare Dashboard 的 **Workers & Pages** 中导入此 Git 仓库。构建设置如下：

| 配置项 | 值 |
| --- | --- |
| Framework preset | `VitePress` |
| Root directory | `/` |
| Build command | `npm run docs:build` |
| Build output directory | `docs/.vitepress/dist` |
| Node.js | 由 `.node-version` 固定为 `22.16.0` |

仓库根目录的 `wrangler.jsonc` 同时支持本机直传。首次使用先登录 Cloudflare，然后执行：

```powershell
npx wrangler login
npm run cf:deploy
```

Wrangler 会读取项目名 `qingjuan-docs` 和构建目录。若 Cloudflare 中使用了其他 Pages 项目名，请先修改 `wrangler.jsonc` 的 `name`。

需要在发布前模拟 Cloudflare Pages 静态服务时运行：

```powershell
npm run cf:preview
```

Cloudflare Pages 会为生产分支生成 `*.pages.dev` 地址。自定义域名可在 Pages 项目的 **Custom domains** 中绑定。

## 内容来源

文档以青卷源码仓库的 `README.md`、`docs/development/`、发布说明和当前实现为依据。涉及版本、部署脚本或平台边界的改动，应先在源码仓库更新权威开发文档，再同步到本站。
