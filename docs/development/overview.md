# 开发概览

青卷是一个多技术栈仓库：Windows Flutter 客户端可使用随包本机 FastAPI 后端或 Linux 远程后端，Android 只连接 Linux；两端共享业务能力但保持独立的平台界面，React 管理界面随当前后端以静态资源发布。当前稳定版是 `1.7.4+25`。v1.7.4 统一小说段落缩进和两端对齐，调整 Android 阅读器系统栏，完善音量键滑动、翻页与 Token 显式粘贴。

## 完整开发规范

本站已经同步 `D:\Code\QingJuan\docs\development` 当前本地工作树中的完整开发规范：

- [开发规范总览](./README.md)
- [原则与架构](./01-principles-and-architecture.md)
- [UI、交互与可访问性](./02-ui-and-accessibility.md)
- [Flutter 客户端开发规范](./03-frontend.md)
- [后端、管理界面与客户端集成规范](./04-backend-and-android.md)
- [质量与测试](./05-quality-and-testing.md)
- [工作流、发布与迁移](./06-workflow-and-migration.md)

源码仓库的 [`docs/development/`](https://github.com/qingscroll/QingJuan/tree/main/docs/development) 仍是工程规范的唯一权威来源；本站副本用于发布和阅读。发生冲突时，以源码仓库当前文档和实现为准。

架构或依赖方向发生变化时，应先更新权威开发文档，再编写实现和同步本站。

## 技术栈

| 范围 | 技术 | 运行位置 |
| --- | --- | --- |
| 客户端 | Flutter、Dart、`fluent_ui` | Windows 10/11、Android 8.0+ |
| 后端 | Python、FastAPI、SQLite | Windows 随包回环进程或 Linux x86_64 systemd 服务 |
| 管理界面 | React、TypeScript、Ant Design | 构建为静态资源，由 FastAPI 提供 |
| OCR | RapidOCR、ONNX Runtime | 当前 Windows 本机或 Linux 远程后端 |
| 文档站 | VitePress | 静态站点 |

`fluent_ui` 是 Flutter 社区组件库，不是 Microsoft React Fluent UI，也不表示应用使用 WinUI 3。

## 目录入口

```text
QingJuan/
├─ lib/                    Flutter 客户端
│  ├─ app/                 应用装配、主题、依赖
│  ├─ core/                API、模型和跨功能状态
│  ├─ features/            书架、搜索、阅读、任务、设置等功能
│  └─ shared/              共享视觉与反馈组件
├─ test/                   Dart 与 Widget 测试
├─ python-backend/         FastAPI、领域服务和 Python 测试
│  └─ app/site_plugins/    内置站点解析插件注册表与处理器
├─ admin-web/              React 管理界面
├─ android/                Android Runner 与原生配置
├─ windows/                Windows Runner 与原生配置
├─ deploy/linux/           安装、更新、systemd 与卸载脚本
├─ tool/                   构建和发布辅助脚本
└─ docs/development/       权威开发规范
```

## 贡献流程

1. 阅读与改动范围相关的权威规范；
2. 先写能复现行为的测试；
3. 以最小实现通过测试，再整理结构；
4. 运行静态、行为和产物三层验证；
5. 同步用户文档、迁移说明和发布说明；
6. 确认 `git status` 不含凭据、缓存、数据库、构建产物或个人数据；
7. 提交 Pull Request，并清楚列出真实执行过的检查。

源码与问题跟踪位于 [qingscroll/QingJuan](https://github.com/qingscroll/QingJuan)。安全问题请通过 GitHub **Security → Report a vulnerability** 私密报告。
