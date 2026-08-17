# 测试与质量

青卷采用三层验证：静态检查、行为测试、真实产物。只执行其中一层不能证明跨平台发布可用。

## Flutter

在仓库根目录：

```powershell
dart format --output=none --set-exit-if-changed lib test
flutter analyze
flutter test
flutter build apk --release
```

Windows 发布构建：

```powershell
.\tool\build_windows.ps1
```

Widget 测试需要分别覆盖 Android 五入口底部导航与 Windows `NavigationPane`，证明窗口宽度变化不会让两种平台界面互相切换；同时覆盖加载/空/错误状态、长中文标题、文字缩放、深色主题和减少动态效果。

## Python

在 `python-backend`：

```powershell
python -m ruff check app tests
python -m pytest
python -m compileall -q app
```

抓取器测试使用固定 Fixture 或 Mock，不把不稳定公网作为 CI 前置条件。API 测试必须覆盖认证、路径边界、导入导出、任务恢复、站点插件注册与禁用拦截，以及敏感信息不泄露。

## React 管理界面

在 `admin-web`：

```powershell
npm ci
npm run typecheck
npm test
npm run build
```

测试覆盖登录失败、会话失效、数据加载、写请求 CSRF、插件筛选与启停、空状态和破坏性操作确认。生产构建必须与提交到后端的静态资源一致。

## Linux 部署

涉及后端或部署时，还要验证：

- Bash 语法；
- `systemd-analyze verify`；
- 原生虚拟环境与单 worker 启动；
- `/healthz` 和 Bearer 认证；
- 可写数据目录；
- 安装、更新、改密、卸载与保留数据路径；
- 日志和进程参数不出现原始 Token。

## 真实设备

完整发布需要在 Windows 分别验证随包本机后端和真实 Linux 后端，并让 Android 至少连接一次真实 Linux 后端，完成：

1. 未配置、正确/错误 Token、断网和重连；
2. 搜索或本地导入；
3. 阅读、章节切换和进度保存；
4. 下载或翻译任务；
5. 系统文件导出；
6. Android TTS、系统返回和前后台切换；
7. 亮色/深色、手机/平板和 150%/200% 文字缩放。

## 完成定义

交付说明只列实际完成的检查。已经启动但没有拿到最终退出结果的命令，必须标记为未验证。`git status` 中不应出现缓存、生成物、数据库、个人配置或无关改动。
