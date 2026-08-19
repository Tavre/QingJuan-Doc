# 支持范围

本页汇总当前用户可见的站点、导入、导出和平台边界。第三方站点支持会随页面结构、访问策略和地区条件变化。

## 内置站点

| 类型 | v1.7.0 起的内置解析器 |
| --- | --- |
| 小说与插画 | [番茄小说](../guide/parsers/fanqie.md)、[起点中文网](../guide/parsers/qidian.md)、[夸克小说](../guide/parsers/quark.md)、[Kakuyomu](../guide/parsers/kakuyomu.md)、[Syosetu](../guide/parsers/syosetu.md)、[Novel18](../guide/parsers/novel18.md)、[Hameln](../guide/parsers/hameln.md)、[Novelup](../guide/parsers/novelup.md)、[Alphapolis](../guide/parsers/alphapolis.md)、[Linovelib / Bilinovel](../guide/parsers/linovelib.md)、[Pixiv](../guide/parsers/pixiv.md) |
| 漫画 | [18Comic](../guide/parsers/18comic.md)、[Bika Web App](../guide/parsers/bika.md)、[Pixiv Comic](../guide/parsers/pixiv-comic.md)、[Yanmaga](../guide/parsers/yanmaga.md)、[Webtoons](../guide/parsers/webtoons.md)、[Mangabz](../guide/parsers/mangabz.md)、[漫画柜](../guide/parsers/manhuagui.md)、[拷贝漫画](../guide/parsers/copymanga.md)、[COMICORES 漫核](../guide/parsers/comicores.md)、[动漫之家](../guide/parsers/dmzj.md) |
| 通用回退 | [通用网页](../guide/parsers/generic-web.md) |
| 自定义规则 | Legado / 阅读 App JSON 书源 |

“支持”表示代码中存在相应解析或协议适配，不代表绕过登录、购买、地区或版权限制。无法合法访问的章节不会因为青卷而变得可访问。

v1.7.0 起包含 22 个可启停解析插件：Windows 本机模式在客户端 **插件配置** 中管理；Linux 远程模式在 `/admin/#plugins` 管理；Android 由服务器管理员统一维护。番茄与起点支持账号登录和书架导入；夸克仅处理匿名免费完整章节；COMICORES 只提供公开搜索和元数据，不提供章节。插件随版本发布，目前不支持在线安装、卸载或上传任意代码。

主搜索页在 v1.7.0 中直接提供 **书源、夸克、番茄、起点** 四种引擎。切换引擎会清空旧结果，并在新结果中保留实际来源。

## 本地导入

| 格式 | 内容类型 | 上限 |
| --- | --- | --- |
| `TXT` / `TEXT` | 小说 | 64 MB |
| `DOCX` | 小说 | 256 MB |
| `EPUB` | 小说 | 256 MB |
| `PDF` | 漫画 | 1 GB、5000 页 |

不支持旧版二进制 `.doc`，请先转换为 DOCX。格式识别会同时检查后缀与内部结构。

## 导出

| 内容 | 支持格式 |
| --- | --- |
| 单章小说 | TXT/TEXT、DOCX、EPUB |
| 多章小说 | 合并后的 TXT/TEXT、DOCX、EPUB |
| 单章或多章漫画 | 多页 PDF、图片 ZIP |

存在有效译文或译图时优先导出翻译内容，否则使用原始内容。

## 平台

- Windows 10 / 11 x64 客户端与随包本机后端；
- Android 8.0（API 26）或更高版本客户端；
- 可选的 Linux x86_64、systemd、Python 3.11+ 远程服务端。

Windows 可在不连接 Linux 的情况下使用本机后端；Android 必须连接 Linux。当前不支持 iOS、面向读者的 Web/PWA 客户端、Android 本地 Python 后端、Docker 官方部署、多用户或集群。

## 站点异常

遇到搜索为空、目录缺失或章节下载失败时：

1. 在浏览器确认目标内容仍可从相同网络合法访问；
2. 查看书源最近检查状态；
3. 降低并发并稍后重试；
4. 收集站点名、阶段、状态码和脱敏错误；
5. 在 [GitHub Issues](https://github.com/qingscroll/QingJuan/issues) 搜索相同问题。

不要上传正文、付费内容、账号 Cookie 或完整页面存档。
