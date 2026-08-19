# 青卷文档站

这是 [青卷 QingJuan](https://github.com/qingscroll/QingJuan) 的中文 VitePress 文档站，内容覆盖 Windows 本机模式、Linux 远程服务、Android 客户端、运维和贡献开发。

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

## 部署到 Cloudflare Workers

本站使用 **Workers Static Assets** 部署，不需要示例 Worker 脚本。Cloudflare Git 构建设置如下：

| 配置项 | 值 |
| --- | --- |
| Root directory | `/` |
| Build command | `npm run docs:build` |
| Deploy command | `npx wrangler deploy` |
| Node.js | 由 `.node-version` 固定为 `22.16.0` |

`wrangler.jsonc` 会把 `docs/.vitepress/dist` 作为静态资源目录，并使用 VitePress 生成的 `404.html`。首次从本机发布时先登录 Cloudflare，然后执行：

```powershell
npx wrangler login
npm run cf:deploy
```

Wrangler 会部署名为 `qingjuan-doc` 的 Worker。若 Cloudflare 中现有 Worker 使用其他名称，请先修改 `wrangler.jsonc` 的 `name`，确保自定义域名绑定到同一个 Worker。

发布前可使用 Workers 本地静态资源服务验证：

```powershell
npm run cf:preview
```

如果域名仍显示 `Hello world`，请在 Cloudflare Dashboard 打开该 Worker 的 **Settings → Domains & Routes**，确认 `qj.tenkavr.com` 绑定的是上述 Worker，并重新触发一次部署。

## 内容来源

文档以青卷源码仓库的 `README.md`、`docs/development/`、发布说明和当前实现为依据。涉及版本、部署脚本或平台边界的改动，应先在源码仓库更新权威开发文档，再同步到本站。
