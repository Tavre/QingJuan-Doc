# 安装客户端

青卷提供 Windows x64 安装器、免安装 ZIP 和 Android APK。Windows 包含本机后端，可以不连接 Linux；Android 是远程客户端，可连接 Linux 服务，也可通过局域网二维码连接正在运行的 PC 本机后端。

## 下载

打开 [QingJuan Releases](https://github.com/qingscroll/QingJuan/releases/latest)，下载与你的平台对应的主文件和 `.sha256` 校验文件。

当前版本为 `v2.3.0`（`2.3.0+44`）：Windows 安装 EXE、Windows ZIP、Android APK 和三份 SHA-256，共六个文件。请只从官方 Releases 下载。

## 校验下载文件

校验可以确认下载未被意外损坏。它不能替代对发布来源的确认。

Windows PowerShell：

```powershell
Get-FileHash .\QingJuan-v2.3.0-windows-x64-setup.exe -Algorithm SHA256
Get-Content .\QingJuan-v2.3.0-windows-x64-setup.exe.sha256

Get-FileHash .\QingJuan-v2.3.0-windows-x64.zip -Algorithm SHA256
Get-Content .\QingJuan-v2.3.0-windows-x64.zip.sha256
```

Android APK 也可以在电脑上校验：

```powershell
Get-FileHash .\QingJuan-v2.3.0-android.apk -Algorithm SHA256
Get-Content .\QingJuan-v2.3.0-android.apk.sha256
```

两处显示的 64 位十六进制摘要应一致。Linux 或 macOS 可使用 `sha256sum -c <校验文件名>`。

## Windows

推荐运行 `QingJuan-v2.3.0-windows-x64-setup.exe`：

1. 选择安装目录；默认是 `%LOCALAPPDATA%\Programs\QingJuan`，无需管理员权限；
2. 按需创建桌面快捷方式，开始菜单和卸载入口会由安装器维护；
3. 启动青卷，单机使用时在 **设置 → 后端连接** 中选择 **本机后端** 并保存。

也可以继续使用免安装 ZIP：将其完整解压到普通、可写且路径稳定的目录，再运行 `qingjuan.exe`。不要从压缩包预览窗口直接启动。

Windows 包包含 `backend/qingjuan-desktop.exe`，会按需启动本机 FastAPI 服务。它固定监听 `127.0.0.1:19453`，无需 Linux、连接 Token、用户账号或另外安装 Python。翻译模型与外部 OCR 在客户端 **设置 → 翻译服务** 中维护；本机后端不提供 `/admin/` 管理站点。

v2.1.0 的 Windows 顶栏新增 **收起到托盘**。点击后窗口会隐藏，但下载与翻译继续运行；点击系统托盘中的青卷图标可恢复窗口，右键菜单可选择显示或退出。普通最小化和关闭按钮仍保持原有行为。

v2.2.0 的安装器覆盖升级和卸载都会保留 `backend/data/`。从旧 ZIP 迁移时应选择原解压目录；若安装到新目录，新程序不会自动发现旧目录中的本机书库。

需要让 Android 使用 PC 本机书库时，可在 **设置 → 手机连接** 生成二维码；需要独立常驻、多用户服务时，再改选 **Linux 远程后端**。两种方式见[选择与连接后端](./connect-server.md)。远程连接失败不会自动回退到本机模式。

## Android

1. 将 APK 下载到手机或平板。
2. 在系统安装确认页核对应用名称与下载来源。
3. 如果系统阻止安装，只为当前文件来源授予“安装未知应用”权限；完成后可再次关闭。
4. 打开青卷，扫描 PC 连接二维码，或填写 Linux 服务地址与连接 Token。

青卷最低支持 Android 8.0（API 26）。文件导入与导出使用系统文件选择器，不需要广泛存储权限；听书声音来自设备已安装的系统 TTS 服务。

## 软件更新

v2.2.0 起，客户端启动时会在后台检查官方正式 Release，这一过程不依赖后端连接或账号登录。

- Windows：在 **设置 → 软件更新** 查看版本与说明，下载过程中可取消或重试。安装 EXE 会经过大小与 SHA-256 双重校验；点击 **退出并安装** 会结束客户端及其本机任务，请先保存漫画文本编辑等未完成内容。
- Android：在 **我的 → 软件更新** 检查版本并打开浏览器下载 APK，随后由系统确认安装。
- 网络错误只影响本次检查，不阻止继续使用现有书库。

::: info 第一次启用在线更新
旧版本没有完整更新功能，仍需手动安装一次 v2.2.0。安装完成后，未来正式版本才能直接通过客户端更新。
:::

## 升级

- Windows：先关闭应用并备份旧目录的 `backend/data/`，再完整解压新 ZIP。不要把新旧目录中的 DLL 混合覆盖。
- Android：直接安装更高版本 APK，正常情况下会保留设备偏好。
- Windows 本机数据位于解压目录的 `backend/data/`；远程数据位于 Linux 服务端。两者不会自动同步。
- v1.7.3 可直接读取 v1.7.2 数据，不涉及数据库或导入格式迁移。
- v1.7.4 可直接读取 v1.7.3 数据，同样不需要数据库或导入格式迁移。
- v1.7.5 可直接安装在 v1.7.4 上，书库、进度和设置无需迁移。
- v1.7.6 可直接安装在 v1.7.5 上，Windows 本机与 Linux 远程后端数据格式均未改变。
- v1.7.7 可直接升级 v1.7.6；启动后会补充四个新内置解析器及其默认书源记录，不需要手工迁移现有书库。
- v1.7.8 可直接升级 v1.7.7；Windows 本机模型设置移入客户端，阅读分页改为真实布局测量。
- v2.0.2 可直接覆盖安装 v1.7.7 或 v1.7.8；Linux 数据库会在首次启动时自动迁移，已有书籍、进度和任务归属内置 `admin` 用户。升级 Linux 前必须配套备份 `/var/lib/qingjuan` 与 `/etc/qingjuan/backend.env`。
- v2.1.0 可直接升级 v2.0.x；更新后 Windows 会增加漫画翻译工作台与托盘入口，Android 使用重构后的移动端界面。远程模式建议客户端与 Linux 后端同步升级。
- v2.1.1 修复 Android 详情页与阅读器的文字样式继承和加载反馈，不涉及手工数据迁移。
- v2.2.0 不要求手工迁移数据库或书库。Windows 安装器会保留 `backend/data/`；Android 新增 PC 扫码连接，但仍不在手机内运行 Python 后端。

从 v1.4 升级的 Windows 用户会继续保留既有 Linux 远程配置。若要改为单机使用，请手动选择 **本机后端**。远程连接失败时可重新运行 `sudo qingjuan-info` 核对地址和 Token；不要把 Token 写入命令历史或普通诊断截图。
