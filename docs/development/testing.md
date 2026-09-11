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

Widget 测试需要分别覆盖 Android 四入口导航与 Windows 桌面 Shell，证明窗口宽度变化不会让两种平台界面互相切换；同时覆盖详情与阅读器、局域网二维码和连接链接、在线更新、禁漫本子号导入、导入插件搜索，以及加载/空/错误状态、长中文标题、文字缩放、深色主题和减少动态效果。

## Python

在 `python-backend`：

```powershell
python -m ruff check app tests
python -m pytest
python -m compileall -q app
```

抓取器测试使用固定 Fixture 或 Mock，不把不稳定公网作为 CI 前置条件。API 测试必须覆盖认证、路径边界、导入导出、任务恢复、27 个内置站点插件的注册与禁用拦截，以及敏感信息不泄露。v2.2.0 还需覆盖插件包预检不执行代码、格式与域名冲突、安装更新回滚、重启恢复、损坏包隔离、SDK 网络边界与超时；笔趣阁镜像聚合、少年梦登录隔离和禁漫本子号归一化也使用固定响应验证。

## React 管理界面

在 `admin-web`：

```powershell
npm ci
npm run typecheck
npm test
npm run build
```

测试覆盖管理登录失败、会话失效、数据加载、写请求 CSRF、插件筛选与启停、站点扫码 / Cookie 登录、账号书架任务、空状态和破坏性操作确认。Cookie 输入提交后必须立即清空，任何公开响应和浏览器存储都不得出现站点凭据。生产构建必须与提交到后端的静态资源一致。

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

完整发布需要在 Windows 分别验证随包本机后端和真实 Linux 后端，并让 Android 分别连接一次 PC 局域网共享和真实 Linux 后端，完成：

1. 未配置、正确/错误 Token、断网和重连；
2. 搜索或本地导入；
3. 阅读、章节切换和进度保存；
4. 下载或翻译任务；
5. 系统文件导出；
6. Android TTS、系统返回和前后台切换；
7. 亮色/深色、手机/平板和 150%/200% 文字缩放。

v1.7.x 的发布级验证还应在可访问的真实网络中检查夸克、番茄、起点、拷贝漫画和 COMICORES 的公开流程，并分别检查番茄与起点扫码登录和账号书架导入。若目标站点 TLS、地区或网络条件不可用，只能报告该项未验证，不能以 Mock 测试替代真实站点结论。

`1.7.2+23` 在固定 Flutter 3.24.3 下通过 Dart 格式、Analyzer、132 项 Flutter 测试与 Android Release 构建，并通过 Python Ruff、Compileall、232 项 Pytest、管理端类型检查、25 项测试和生产构建。`1.7.3+24` 的主分支 CI 与标签发布工作流均已成功，正式 Release 的 Windows ZIP、Android APK 和两份 SHA-256 资产已验证。

`1.7.4+25` 的 PR 验证通过版本一致性、Dart 格式、Analyzer、141 项 Flutter 测试、233 项 Pytest、25 项管理端测试、管理端生产构建和 Android Debug 构建；PR、合并后的主分支 CI 与标签发布工作流均成功，正式 Release 的 Windows ZIP、Android APK 和两份 SHA-256 资产已验证。

`1.7.5+26` 的 PR 验证通过 142 项 Flutter 测试，并以实际字形坐标覆盖固定两字布局占位；Android 与 Windows 版本检查、两端正式产物构建和标签发布工作流均成功。

`1.7.6+27` 的 PR 验证通过 20 项阅读器定向测试和 143 项完整 Flutter 测试；版本检查、全部 PR CI、Android 与 Windows 构建和标签发布工作流均成功，正式 Release 的四个资产已上传。

`1.7.7+28` 的发布验证覆盖 26 个内置解析器、完整目录访问状态和 Windows / Android 正式产物。`1.7.8+29` 进一步验证 Windows 本机模型设置 API、关闭管理站点和真实分页测量。

`2.0.0+32` 通过 Flutter 格式、Analyzer 和 210 项客户端测试，Python Ruff 与 366 项后端测试，以及管理界面 56 项测试和生产构建；PR 的四项质量门禁与 Windows x64、Android 构建均成功。

`2.1.0+40` 的发布范围新增移动端重设计、漫画翻译工作台、书架译文写回和 Windows 托盘。对应回归必须覆盖手机与平板导航、漫画工作流模式、区域编辑与重新渲染、整章原子写回、进程归属和托盘恢复；正式 Release 已上传 Windows ZIP、Android APK 与两份 SHA-256 校验文件。

`2.1.1+41` 修复 Android 真实路由的文字样式继承、加载语义与窄屏操作布局。`2.2.0+42` 已完成 403 项 Flutter、568 项 Python 和 62 项管理界面测试，并正式上传六个 Release 资产。`2.2.1+43` 需重点覆盖 Fake-IP 检测、加密 DNS 回退、公网地址固定，以及私网、环回、重定向和不安全混合答案继续被拒绝。

## 完成定义

交付说明只列实际完成的检查。已经启动但没有拿到最终退出结果的命令，必须标记为未验证。`git status` 中不应出现缓存、生成物、数据库、个人配置或无关改动。
