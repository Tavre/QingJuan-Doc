# 更新日志

这里记录青卷各版本面向用户的主要变化。GitHub 公开 Release 记录从 v1.1.0 开始；日期按中国标准时间列出，只有已创建 Git 标签和 GitHub Release 的版本才标记为“已发布”。

## v1.7.0（发布候选）

源码版本为 `1.7.0+21`，更新于 2026-08-19。[查看发布 PR #35](https://github.com/qingscroll/QingJuan/pull/35)

::: warning 尚未正式发布
当前稳定版仍是 v1.6.0。v1.7.0 的代码和跨平台 CI 已就绪，但 GitHub 尚未创建 `v1.7.0` 标签、Release 和正式安装包。
:::

### Android 阅读产品界面

- 非阅读器页面改为清澈蓝、纯白表面和冷浅灰背景，减少渐变、玻璃模糊和装饰性头图；Windows 继续保持 Fluent / Mica 桌面布局；
- 底部导航固定为“书架、搜索、书源、任务、我的”，“我的”集中设备偏好、服务器连接与关于入口；
- 新增共享移动端底部面板，统一处理键盘、安全区、返回关闭、焦点与减少动态效果；
- 调整书架、搜索、作品详情、听书、阅读器、任务和设置在手机宽度下的层级、触控尺寸及亮暗主题表现。

### 搜索与站点解析器

- 搜索页新增“书源、夸克、番茄、起点”引擎选择；切换引擎会清空旧结果，并保留每条结果的实际来源；
- 新增夸克小说匿名公开搜索、作品信息、目录和免费完整章节解析，不接入付费章节、Cookie、账号书架或试读回退；
- 拷贝漫画增加公开作品搜索、详情、分组目录和漫画页解析，不接入账号能力；
- 新增 COMICORES 公开搜索和元数据预览，不解析登录后网盘、付费资源，也不伪造可读章节；
- 番茄与起点增加匿名公开搜索，并保留原有账号书架流程和受限章节边界；
- 内置解析器总数由 20 个增加到 22 个。

### 后端、安全与升级

- 补齐内置书源的稳定站点 ID、能力说明和插件注册信息，停用插件时会在网络请求前阻断搜索、预览和章节抓取；
- 统一作品链接、搜索结果与脱敏错误，不向客户端或日志暴露签名参数、上游会话、Cookie 和原始响应；
- 数据库初始化会更新可识别的内置书源定义，同时保留已有启停选择、书籍、阅读进度和其他用户数据；
- 可直接读取 v1.6.0 的 Windows 本机或 Linux 后端数据，升级前仍建议备份数据目录；
- Android 仍只连接 Linux 远程后端；Windows 仍可明确选择本机后端或 Linux 远程后端。

### 发布验证

- 固定 Flutter 3.24.3 下通过格式检查、Analyzer 和 123 项 Flutter 测试；Python Ruff、Compileall 和完整 Pytest 套件通过；
- 发布 PR 的 Flutter、Python、React 管理界面、Linux 原生部署、Android APK 和 Windows x64 六项检查均已通过；
- 正式 Windows ZIP、签名 Android APK 与 SHA-256 文件要等合并并推送 `v1.7.0` 标签后生成。

## v1.6.0

发布于 2026-08-17。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.6.0)

- 将番茄、起点、Kakuyomu、Yanmaga 等 20 个内置解析器统一为可声明域名、作品类型、能力和启停状态的插件；
- Windows 本机模式在客户端管理插件，Linux 远程后端在管理界面管理，Android 由服务器管理员维护；
- 番茄与起点支持扫码登录和一键添加当前账号书架，番茄还提供 Cookie 登录回退；
- 账号书架导入支持跨分组和分页去重、跳过已有作品、进度与结果统计，并以“边看边下”添加文字作品；
- Windows 增加自绘标题栏、可折叠和可调宽导航栏、键盘快捷键与本机插件配置；Android 保持触控优先布局；
- 统一页面切换、按压、选择和阅读控制层动效，并减少无效模糊与重复重绘；
- FastAPI 和 React 管理界面增加插件清单、启停、登录、书架预览与异步导入；
- 正式 Release 提供 Windows x64 ZIP、Android APK 和两份 SHA-256 文件；
- 可直接读取 v1.5.0 数据；未独立发布的 v1.5.1 改动已合并到本版本。

## v1.5.0

发布于 2026-08-13。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.5.0)

- Windows ZIP 恢复随包本机 FastAPI 后端，可在“本机后端”和“Linux 远程后端”之间明确选择；
- 本机模式固定监听 `127.0.0.1:19453`，无需 Linux、连接 Token 或单独安装 Python；
- 本机与远程连接档案独立保存，Windows 本机数据与 Linux 数据不会自动同步；
- Android 继续作为远程客户端，不包含或启动 Python 后端；
- 新增随后端提供的 React 管理界面、系统诊断、脱敏报告、结构化日志与翻译模型自检；
- Windows 发布包重新包含 `backend/qingjuan-desktop.exe`，并增加版本、静态资源和敏感文件检查。

## v1.4.0

发布于 2026-08-12。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.4.0)

- 新增 Flutter Android 客户端，Windows 与 Android 共用 Linux 书库、任务和 API；
- 当时 Windows 客户端改为纯远程模式，不再启动本地 Python；本机后端随后在 v1.5.0 恢复；
- 新增远端地址校验、连接状态和安全 Token 存储；
- 阅读器增加左右分页、连续滚动、章节预取、多种翻页效果、主题、目录和进度跳转；
- Android 增加系统文件保存、TTS 声线扫描、音量键阅读与沉浸式系统栏；
- CI 开始同时检查和构建 Windows、Android 与 Linux 远程后端，并发布 Windows ZIP、Android APK 和校验文件。

## v1.3.4（开发阶段）

整理于 2026-08-10，未创建独立 Git 标签或 GitHub Release，相关改动随后进入 v1.4.0。

- 根据漫画气泡安全区域估算译文容量，超出时要求模型在保留语义的前提下精简措辞；
- 超长译文改为完整绘制后等比缩放到气泡蒙版内，不再跳过翻译或保留未翻译原文；
- 修复本地 OCR 气泡容器恢复、竖排分列合并、旁白框误判和长译文单列问题；
- 漫画渲染缓存升级，旧错误结果会自动失效并重新生成；
- 增加译文超预算、压缩渲染和最小缩放比例诊断。

## v1.3.3

发布于 2026-08-10。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.3.3)

- 漫画译文先在独立图层排版，再通过气泡安全蒙版合成，文字与描边不越过原气泡；
- 无法安全容纳的超长译文保留原图并记录诊断，不再擦除原文或强行溢出；
- 原文清除增加气泡边界约束，并升级缓存使旧越界译图自动失效；
- 缩短顶层工作区与通用控件动效，减少无关状态导致的整页重建；
- 实时日志改为即时跟随，并尊重 Windows“减少动态效果”设置。

## v1.3.2

发布于 2026-08-10。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.3.2)

- 优化本地 OCR 和漫画图片回填，高置信度 RapidOCR 结果不再等待重复的 Windows OCR；
- 漫画文字样式估算、气泡蒙版和背景取色改用更快的向量化处理；
- 翻译任务增加逐页进度，任务页增量展示每页 OCR 原文与译文；
- 增加漫画翻译逐页断点，失败或重启后跳过已完成且校验有效的页面；
- 修复 Windows 听书暂停、停止或退出时的异常，以及构建失败后仍继续打包旧客户端的问题。

## v1.3.1

发布于 2026-08-10。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.3.1)

- Windows 新增“本机后端”和“Linux 远程后端”两种连接模式；
- Linux 后端支持原生 Python 虚拟环境与 systemd 部署，无需 Docker；
- 远程连接使用 Bearer Token，并保存在 Windows 安全凭据中；
- 新增版本化 FastAPI 接口、远程文件上传下载与服务端导出；
- 隐藏服务器本地路径与敏感配置，同时保留下载后直接使用的 Windows 本机模式。

## V1.3.0

发布于 2026-08-10。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/V1.3.0)

- 正式适配番茄小说的目录、正文、受限章节校验与当时的 APP 接口回退；
- 长篇小说可选择“边看边下”或“全部下载”，按需模式阅读当前章时预取后续章节；
- 听书增加多种朗读风格，并优先展示 Natural / Neural 声线；
- 任务页增加状态筛选、更新时间和尝试次数等信息；
- 优化桌面标题栏、窗口管理、主题、页面卡片、键盘导航和 200% 文字缩放；
- 修复 Ubuntu / DejaVu 字体下的漫画文字遮罩误判及 CI 测试问题。

## V1.2.0

发布于 2026-08-05。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/V1.2.0)

- 小说增加 DOCX、EPUB 导入，漫画增加 PDF 导入；
- 支持导出单章、所选章节或全部章节：小说可导出 TXT / TEXT、DOCX、EPUB，漫画可导出 PDF 或顺序图片；
- OCR 升级为 RapidOCR 加 Windows OCR，并支持用纯文本模型翻译漫画、视觉模型可选增强；
- 优化漫画擦字、背景修复、颜色、字号和自适应排版；
- 翻译设置简化为单一 OpenAI 兼容接口；
- 新增 Pixiv Comic 专用解析，并增强 JM 与 Bika 下载。

## v1.1.0

发布于 2026-07-31。[查看 Release](https://github.com/qingscroll/QingJuan/releases/tag/v1.1.0)

- Windows 增加连续 TTS 听书、原文或译文切换、声线选择、试听和持久化；
- 链接解析与导入改为后台任务，可收起和恢复并实时查看进度与日志；
- 扩展 Pixiv 漫画及 Webtoons、漫画柜、Mangabz、拷贝漫画、动漫之家等常见网页漫画解析；
- 增强 18Comic / JM 与 Bika 的重试、线路刷新、图片校验、原子写入和损坏文件重下；
- 修复长漫画标题溢出，并减少链接导入期间的界面阻塞；
- 本版本仅提供 Windows x64 桌面程序。

完整发布资产与校验文件见 [GitHub Releases](https://github.com/qingscroll/QingJuan/releases)。新安装请使用当前[五分钟开始](../guide/quick-start.md)，不要沿用旧版本中的部署说明。
