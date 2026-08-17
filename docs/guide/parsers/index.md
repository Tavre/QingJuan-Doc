# 内置解析器

青卷 v1.6.0 随后端提供 20 个内置站点解析器。每个解析器都有独立的稳定 ID、匹配域名、作品类型、能力和启停状态；它们与用户导入的 Legado / 阅读 App JSON 书源相互独立。

## 解析器清单

| 类型 | 解析器 | 插件 ID | 匹配域名 | 额外能力 |
| --- | --- | --- | --- | --- |
| 小说 | [番茄小说](./fanqie.md) | `fanqie` | `fanqienovel.com` | 搜索、按需下载、扫码 / Cookie 登录、账号书架 |
| 小说 | [起点中文网](./qidian.md) | `qidian` | `qidian.com` | 按需下载、扫码登录、账号书架 |
| 小说 | [Kakuyomu](./kakuyomu.md) | `kakuyomu` | `kakuyomu.jp` | 搜索 |
| 小说 | [Syosetu](./syosetu.md) | `syosetu` | `syosetu.com` | 公开作品目录与章节 |
| 小说 | [Novel18](./novel18.md) | `novel18` | `novel18.syosetu.com` | 年龄限制站点的公开内容 |
| 小说 | [Hameln](./hameln.md) | `hameln` | `syosetu.org` | 同人小说目录与章节 |
| 小说 | [Novelup](./novelup.md) | `novelup` | `novelup.plus` | 目录与章节诊断 |
| 小说 | [Alphapolis](./alphapolis.md) | `alphapolis` | `alphapolis.co.jp` | 目录与章节 |
| 轻小说 | [Linovelib / Bilinovel](./linovelib.md) | `linovelib` | `linovelib.com`、`bilinovel.com` | 分卷与插图章节 |
| 小说 / 插画 | [Pixiv](./pixiv.md) | `pixiv` | `pixiv.net` | 小说、系列与多页插画 |
| 漫画 | [18Comic](./18comic.md) | `18comic` | `18comic.vip` | 搜索 |
| 漫画 | [Bika Web App](./bika.md) | `bika` | `bikawebapp.com` | 搜索；需要站点凭据 |
| 漫画 | [Pixiv Comic](./pixiv-comic.md) | `pixiv-comic` | `comic.pixiv.net` | 公开章节与图片 |
| 漫画 | [Yanmaga](./yanmaga.md) | `yanmaga` | `yanmaga.jp` | 匿名公开章节 |
| 漫画 | [Webtoons](./webtoons.md) | `webtoons` | `webtoons.com` | 通用漫画页适配 |
| 漫画 | [Mangabz](./mangabz.md) | `mangabz` | `mangabz.com` | 通用漫画页适配 |
| 漫画 | [漫画柜](./manhuagui.md) | `manhuagui` | `manhuagui.com` | 通用漫画页适配 |
| 漫画 | [CopyManga](./copymanga.md) | `copymanga` | `copymanga.com`、`copymanga.site` | 通用漫画页适配 |
| 漫画 | [动漫之家](./dmzj.md) | `dmzj` | `dmzj.com` | 通用漫画页适配 |
| 通用 | [通用网页](./generic-web.md) | `generic-web` | 任意 HTTP / HTTPS 地址 | 无专用插件时最后回退 |

## 能力是什么意思

- **预览**：读取作品标题、作者、封面和目录等可用元数据；
- **章节**：读取当前网络和账号有权访问的章节正文或图片；
- **搜索**：可直接在青卷搜索页查询该站点；没有搜索能力的解析器仍可通过作品链接导入；
- **按需下载**：先保存目录，阅读时缓存当前章节并预取后续章节；
- **账号登录 / 书架导入**：当前仅番茄与起点支持，详见[账号书架流程](../sources-and-search.md#番茄与起点账号书架)。

## 管理入口

| 使用方式 | 解析器管理位置 |
| --- | --- |
| Windows 本机后端 | 客户端左侧导航的 **插件配置** |
| Windows 连接 Linux | Linux 管理界面的 `/admin/#plugins` |
| Android | 由所连接 Linux 服务的管理员在 `/admin/#plugins` 管理 |

停用解析器后，后端会在新的第三方请求发出前拒绝对应的预览、搜索和章节抓取；已缓存到当前书库的章节仍可阅读。

::: warning 使用边界
解析器不会绕过登录、购买、年龄、地区或版权限制。站点页面结构和公开策略可能变化；请只保存你有权访问的内容。
:::
