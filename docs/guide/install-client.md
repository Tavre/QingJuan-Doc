# 安装客户端

青卷提供 Windows x64 ZIP 和 Android APK。Windows ZIP 包含本机后端，可以不连接 Linux；Android 是远程客户端，需要连接 Linux 后端。

## 下载

打开 [QingJuan Releases](https://github.com/qingscroll/QingJuan/releases/latest)，下载与你的平台对应的主文件和 `.sha256` 校验文件。

本页的安装包文件名按当前稳定版 `v1.7.0` 编写。`v1.7.1+22` 正在构建发布；只有 GitHub 出现 `v1.7.1` Release 和四项正式资产后，才改用新文件名。使用远程模式时，建议客户端与服务端采用同一版本；如果只更新其中一端，完成后至少重新验证连接、导入、阅读和文件导出。

## 校验下载文件

校验可以确认下载未被意外损坏。它不能替代对发布来源的确认。

Windows PowerShell：

```powershell
Get-FileHash .\QingJuan-v1.7.0-windows-x64.zip -Algorithm SHA256
Get-Content .\QingJuan-v1.7.0-windows-x64.zip.sha256
```

Android APK 也可以在电脑上校验：

```powershell
Get-FileHash .\QingJuan-v1.7.0-android.apk -Algorithm SHA256
Get-Content .\QingJuan-v1.7.0-android.apk.sha256
```

两处显示的 64 位十六进制摘要应一致。Linux 或 macOS 可使用 `sha256sum -c <校验文件名>`。

## Windows

1. 将 ZIP 解压到一个普通、可写且路径稳定的目录。
2. 不要只从压缩包预览窗口运行程序。
3. 启动解压目录中的 `qingjuan.exe`。
4. 单机使用时，在 **设置 → 后端连接** 中选择 **本机后端** 并保存。

Windows 包包含 `backend/qingjuan-desktop.exe`，会按需启动本机 FastAPI 服务。它固定监听 `127.0.0.1:19453`，无需 Linux、连接 Token 或另外安装 Python。本机管理界面位于 `http://127.0.0.1:19453/admin/`。

需要与 Android 共用书库时，可改选 **Linux 远程后端**，再按[选择与连接后端](./connect-server.md)填写服务器地址和 Token。远程连接失败不会自动回退到本机模式。

## Android

1. 将 APK 下载到手机或平板。
2. 在系统安装确认页核对应用名称与下载来源。
3. 如果系统阻止安装，只为当前文件来源授予“安装未知应用”权限；完成后可再次关闭。
4. 打开青卷并连接 Linux 服务端。

青卷最低支持 Android 8.0（API 26）。文件导入与导出使用系统文件选择器，不需要广泛存储权限；听书声音来自设备已安装的系统 TTS 服务。

## 升级

- Windows：先关闭应用并备份旧目录的 `backend/data/`，再完整解压新 ZIP。不要把新旧目录中的 DLL 混合覆盖。
- Android：直接安装更高版本 APK，正常情况下会保留设备偏好。
- Windows 本机数据位于解压目录的 `backend/data/`；远程数据位于 Linux 服务端。两者不会自动同步。

从 v1.4 升级的 Windows 用户会继续保留既有 Linux 远程配置。若要改为单机使用，请手动选择 **本机后端**。远程连接失败时可重新运行 `sudo qingjuan-info` 核对地址和 Token；不要把 Token 写入命令历史或普通诊断截图。
