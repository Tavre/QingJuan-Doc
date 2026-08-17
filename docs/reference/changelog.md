# 版本记录

## v1.5.1（开发中）

当前源码版本为 `1.5.1+19`，尚未发布 GitHub Release。最新稳定下载仍为 `v1.5.0`。

### 设置与平台界面

- Flutter 设置页按主题、设备 TTS、后端连接和翻译模型状态拆分为独立区域；
- Windows 与 Android 共享业务能力，但分别保持 Fluent 桌面界面与触控优先移动界面；
- 保留 Windows 本机 / Linux 远程双连接档案、Android 远程边界和远程失败不回退规则。

### 当前源码增量

- 内置站点解析器按插件注册，公开稳定 ID、版本、域名、作品类型、能力和启停状态；
- Windows 本机模式在客户端 **插件配置** 中管理，Linux 远程模式在 `/admin/#plugins` 管理；
- 外部 Legado 书源继续由 **书源管理** 维护，不与内置插件混用；
- 当前只支持启停随版本发布的插件，不提供插件市场、安装、卸载或任意代码加载。

## v1.5.0

发布于 2026-08-13（中国标准时间）。[查看 Release](https://github.com/Tavre/QingJuan/releases/tag/v1.5.0)

### Windows 本机与 Linux 远程双后端

- Windows ZIP 恢复随包本机 FastAPI 后端，可在“本机后端”和“Linux 远程后端”之间显式选择；
- 本机模式固定监听 `127.0.0.1:19453`，无需 Linux 服务器、连接 Token 或单独安装 Python；
- 本机与远程连接档案独立保存，切换模式不会覆盖远程地址与 Token；
- Windows 本机数据与 Linux 数据不会自动同步；
- Android 继续保持远程客户端边界，不包含或启动本机 Python 后端。

### 管理与构建

- 新增随后端同源提供的 React 管理界面、系统诊断、脱敏报告、结构化日志和翻译模型自检；
- Windows 发布包重新包含 `backend/qingjuan-desktop.exe`，并检查版本、管理静态资源和敏感文件边界；
- 从 v1.4 升级的 Windows 用户会保留既有远程配置，需要单机使用时可在设置中手动选择“本机后端”。

## v1.4.0

发布于 2026-08-12（中国标准时间）。[查看 Release](https://github.com/Tavre/QingJuan/releases/tag/v1.4.0)

### Windows 与 Android 共用远端后端

- 新增 Flutter Android 客户端；
- Windows 与 Android 共用 Linux 书库、任务和 API；
- 客户端不再启动本地 Python；
- 新增远端地址校验、连接状态和安全 Token 存储。

### 阅读器与界面

- 新增左右分页、连续滚动、章节预取和多种翻页效果；
- 增加纸张、护眼、淡蓝和夜间配色；
- 支持字号、行距、原文/译文、章节目录和进度跳转；
- Android 增加系统文件保存、TTS 声线扫描、音量键阅读和沉浸式系统栏；
- 统一 Windows/Android 的阅读产品视觉，并覆盖窄屏、长标题、200% 文字缩放和减少动态效果。

### 构建与迁移

- CI 同时检查和构建 Windows、Android 与 Linux 远端后端；
- 正式发布提供 Windows ZIP、Android APK 和两份 SHA-256；
- 本次不修改 Linux 数据库结构和书籍数据格式；
- 升级后必须配置 Linux 后端，不提供本地 Python 回退。

## v1.3.4

- 改进漫画气泡安全区域、超长译文精简和完整缩放；
- 修复 OCR 容器恢复、竖排分列合并和旁白框判定；
- 增加溢出、压缩比例和字体诊断。

## 更早版本

v1.3.1 至 v1.3.3 曾支持 Windows 本机 / Linux 远程双模式；v1.4.0 改为纯远程客户端；v1.5.0 恢复随包本机后端。旧版本安装说明可能已经过时，新安装请使用当前[五分钟开始](../guide/quick-start.md)。

完整历史、资产和校验文件见 [GitHub Releases](https://github.com/Tavre/QingJuan/releases)。
