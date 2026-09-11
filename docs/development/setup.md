# 搭建开发环境

只修改某一层时，不必安装所有技术栈。先确认目标范围，再按权威依赖文件安装。

## 工具基线

| 工具 | 项目基线 |
| --- | --- |
| Flutter | `3.24.3` stable |
| Dart | `3.5.3`，随 Flutter 提供 |
| JDK | 17 |
| Android | SDK 与 Build Tools 以 `flutter doctor -v` 为准 |
| Python | CPython `3.13.x` x64 用于开发；Linux 运行最低 3.11 |
| Node.js | `20.19.x` 或 `22.12+`，仅管理界面开发需要 |
| Git | 当前受支持版本 |

本机存在多个 Flutter 或 Python 时，先检查当前 PowerShell 实际解析的路径：

```powershell
Get-Command flutter
Get-Command python
flutter --version
python --version
```

## Flutter 客户端

在仓库根目录：

```powershell
flutter config --enable-android
flutter config --enable-windows-desktop
flutter doctor -v
flutter pub get
flutter devices
```

日常运行：

```powershell
flutter run -d windows
flutter run -d <Android设备ID>
```

Windows 本机模式会使用本机后端生命周期基础设施：开发态可从源码树启动 Python，正式包只启动随包 `backend/qingjuan-desktop.exe`。只调试远程模式时可连接测试 Linux 后端；Android 始终作为远程客户端，可连接 Linux，或扫描开发机生成的局域网连接二维码。

构建 v2.2.0 Windows 安装器及验证在线更新时，继续参照[客户端在线更新与 Windows 安装包](./08-client-updates.md)。

## Python 后端

修改后端、调试 Windows 本机模式或构建完整 Windows 包时需要 Python 环境：

```powershell
Set-Location python-backend
python -m venv .venv
.\.venv\Scripts\python -m pip install --upgrade pip
.\.venv\Scripts\python -m pip install -r requirements-dev.txt
```

`requirements-dev.txt` 已包含运行和测试依赖。不要把 `.venv`、数据库、下载内容、Cookie 或本机配置提交仓库。

## React 管理界面

```powershell
Set-Location admin-web
npm ci
npm run dev
```

本地开发服务器只监听 `127.0.0.1`。生产构建必须同步到 `python-backend/app/admin_static/`，并通过一致性检查；不要要求已部署 Linux 在运行时安装 Node.js。

## 签名和凭据

- Android 正式签名材料、`key.properties` 和 keystore 只保存在受保护环境；
- Windows/Android 测试连接使用专门的测试 Token；
- 翻译服务使用低权限测试密钥和受控额度；
- 任何真实凭据都不得出现在代码、测试 Fixture、日志、截图或文档中。

继续阅读[测试与质量](./testing.md)。
