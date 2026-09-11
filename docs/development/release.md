# 发布流程

青卷的 Pull Request、CI 构建和 GitHub Release 是三个不同阶段。PR 通过或 Actions 产生 Artifacts 并不等于正式版本已经发布。

## 版本规则

`pubspec.yaml` 使用 `主版本.次版本.修订号+构建号`，例如：

```yaml
version: 2.2.1+43
```

Git 标签和公开版本省略构建号：`v2.2.1`。标签中的语义版本必须与 `pubspec.yaml` 一致。

## CI 门禁

Pull Request、主分支推送和手动触发会运行：

1. Flutter 格式、分析和测试；
2. Python Ruff 与 Pytest；
3. Linux 部署脚本和原生后端冒烟测试；
4. 管理界面类型检查、测试、构建及静态资源一致性检查；
5. 门禁通过后并行构建 Windows x64 与 Android 产物。

具体工作流以源码仓库当前 `.github/workflows/` 为准。

## 正式发布

发布负责人应：

1. 更新版本号、发布说明和相关文档；
2. 在固定 Flutter/JDK/Android 工具链上完成门禁；
3. 确认 Android 正式签名环境可用且材料未进入仓库；
4. 合并发布变更；
5. 推送匹配版本的 `vX.Y.Z` 标签；
6. 观察标签触发的发布工作流直到完成；
7. 打开 GitHub Release，确认所有资产可下载且摘要匹配。

v2.2.0 起，当前发布应包含六个资产：

- `QingJuan-vX.Y.Z-windows-x64.zip`；
- Windows ZIP 的 `.sha256`；
- `QingJuan-vX.Y.Z-windows-x64-setup.exe`；
- Windows 安装 EXE 的 `.sha256`；
- `QingJuan-vX.Y.Z-android.apk`；
- Android APK 的 `.sha256`。

## 发布后验证

- 从 Release 页面重新下载，而不是复用本机构建目录；
- 校验两种主文件的 SHA-256；
- 在干净目录解压 Windows ZIP；
- 运行 Windows 安装器，验证首次安装、覆盖升级、等待客户端退出、卸载及 `backend/data/` 保留；
- 安装 Release APK；
- Windows 分别启动随包本机后端和连接真实 Linux 后端；Android 分别验证 PC 局域网扫码和真实 Linux 后端，完成最小用户流程；
- 确认 Windows ZIP 包含 `backend/qingjuan-desktop.exe`，但不含数据库、Token、签名材料、Cookie 或开发密钥；
- 检查 Release 不是草稿或预发布，并记录工作流最终状态。

当前已发布版本是 [`v2.2.0`](https://github.com/qingscroll/QingJuan/releases/tag/v2.2.0)，版本号为 `2.2.0+42`，六个发布资产已经上传。`2.2.1+43` 是发布候选；在发布变更合并、主分支 CI 通过并上传六个资产前，不得将其描述为已发布。完整更新与安装安全约束见[客户端在线更新与 Windows 安装包](./08-client-updates.md)。
