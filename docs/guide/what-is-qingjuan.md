# 青卷是什么

<span class="qj-kicker">产品概览</span>

青卷是一套面向小说与漫画的开源工具。Windows ZIP 自带本机 FastAPI 后端，可以在一台电脑上独立使用；Windows 也可以切换到 Linux 远程后端。Android 是远程客户端，需要连接 Linux 后端。

因此，**只在 Windows 上使用青卷时无需部署或连接 Linux 服务器**。只有使用 Android，或希望 Windows 与 Android 共用书库时，才需要部署 Linux 服务。

## 工作方式

| 层级 | 负责什么 | 不负责什么 |
| --- | --- | --- |
| Windows 客户端与本机后端 | 书架、搜索、阅读、SQLite、下载、OCR、翻译、任务、管理界面 | 本机数据不会自动同步到 Linux |
| Android 客户端 | 书架、搜索、阅读、文件选择、设备 TTS、主题与阅读偏好 | 不包含或启动 Python 后端 |
| Linux FastAPI 服务 | 为 Windows 远程模式和 Android 保存书库、执行任务并提供管理界面 | Windows 单机使用时不是必需项 |
| 外部服务 | 作品来源、OpenAI 兼容翻译接口 | 不应收到连接 Token、管理密码或无关数据 |

Windows 本机模式的工作方式：

1. 在设置中选择“本机后端”。
2. 客户端按需启动 ZIP 内的 `backend/qingjuan-desktop.exe`。
3. 本机后端固定监听 `http://127.0.0.1:19453`，不需要连接 Token。
4. 书库、任务和设置保存在解压目录的 `backend/data/`。

远程模式下，Windows 或 Android 使用地址与 Bearer Token 连接 Linux 服务。多个客户端连接同一服务时，可以共用书库、任务和阅读进度。

## 平台界面

Windows 与 Android 共享业务能力，但不共用同一套顶层布局：

- Windows 保持 Fluent / Windows 仿原生桌面风格，使用自绘标题栏、可调宽侧栏和键鼠优先控件；
- Android v1.7.0 使用清澈蓝、纯白表面和冷浅灰背景，底部导航固定为“书架、搜索、书源、任务、我的”；
- Android 的导入、插件配置和设置使用同一套移动端底部面板，统一处理键盘、安全区、返回关闭和减少动态效果；
- 调整窗口宽度只会改变当前平台内部的排版，不会把 Windows 界面切换成 Android 布局。

v1.7.0 包含 22 个可独立启停的内置解析器，新增夸克小说和 COMICORES，并在搜索页提供书源、夸克、番茄、起点四种引擎。Windows 本机模式在客户端 **插件配置** 中管理；Linux 远程模式在服务器管理界面的 **插件管理** 中管理，Android 不显示本地插件入口。完整清单见[内置解析器](./parsers/)。

::: info 版本状态
当前可下载的稳定版是 v1.7.0。v1.7.1+22 正在构建发布，重点修复 Android 安全区与窄屏布局、夸克导入稳定性和阅读流畅度；正式 Release 资产完成前仍应下载 v1.7.0。
:::

## 适合谁

青卷既适合只想在一台 Windows 电脑上直接使用的人，也适合愿意维护 Linux 主机、希望在 Windows 与 Android 之间共用书库的人。

“无需 Linux”不等于所有功能都完全离线：从网站下载内容和调用翻译模型仍需要网络，但后端可以完全运行在当前 Windows 电脑上。

## 支持的平台

| 平台 | 当前范围 |
| --- | --- |
| Windows | Windows 10 / 11 x64；支持随包本机后端或 Linux 远程后端 |
| Android | Android 8.0（API 26）或更高版本的手机和平板客户端 |
| Linux | 可选的 x86_64、systemd、Python 3.11+ 单用户远程服务端 |

目前不支持 iOS、macOS 客户端、Android 本地后端、面向读者的 Web/PWA 客户端、集群或多用户隔离。

## 从哪里开始

- Windows 单机使用：跟随[五分钟开始](./quick-start.md#windows-单机使用-无需-linux)安装并选择本机后端。
- Android 或跨设备使用：完成[Linux 服务端部署](../server/deploy.md)，再查看[选择与连接后端](./connect-server.md)。
- 负责运维：从[准备服务器](../server/requirements.md)开始。
- 想参与开发：先读[开发概览](../development/overview.md)和源码仓库中的权威开发规范。

::: warning 使用边界
第三方站点规则可能随时变化。请遵守目标站点条款、robots 约定、版权要求和所在地法律，只保存你有权访问的内容。
:::
