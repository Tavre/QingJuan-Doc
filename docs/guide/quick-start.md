# 五分钟开始

青卷提供三种使用方式：Windows 可以直接使用安装包内的本机后端；Android 可以扫描同一局域网内 PC 的二维码共用本机书库；需要后端长期在线或多用户隔离时，再部署 Linux 远程服务。

## Windows 单机使用（无需 Linux）

### 1. 下载并解压

从 [GitHub Releases](https://github.com/qingscroll/QingJuan/releases/latest) 下载。v2.3.0 提供：

- `QingJuan-v2.3.0-windows-x64-setup.exe`：推荐的当前用户安装器；
- `QingJuan-v2.3.0-windows-x64.zip`：免安装压缩包；
- 对应的 `.sha256` 校验文件。

当前版本为 `v2.3.0`（`2.3.0+44`），下载时请同时取得对应的 `.sha256` 文件。

安装器默认安装到 `%LOCALAPPDATA%\Programs\QingJuan`，无需管理员权限，并可创建开始菜单与桌面快捷方式。若选择 ZIP，请完整解压后运行 `qingjuan.exe`；不要只从压缩包预览窗口运行，也不要单独移动 EXE 或删除 `backend/` 目录。

### 2. 选择本机后端

打开 **设置 → 后端连接**，选择 **本机后端** 并保存。应用会按需启动随包的 FastAPI 后端：

- 固定地址：`http://127.0.0.1:19453`
- 无需 Linux 服务器
- 无需连接 Token
- 无需另外安装 Python

全新安装默认使用本机模式。从 v1.4 升级且已有远程配置时会继续保持远程模式，需要手动切换一次。

翻译模型、API 密钥、系统提示词和外部 OCR 直接在客户端 **设置 → 翻译服务** 中配置。本机后端不再启动浏览器管理界面。

Windows 本机数据位于完整解压目录的 `backend/data/`。移动、更新或删除程序目录前，请先备份该目录。

### 3. 导入第一本书

本机后端连接成功后，可选择任一方式：

- 打开 **搜索**，从已启用书源中找到作品并加入书架；
- 打开 **我的书架**，导入本地 `TXT`、`DOCX`、`EPUB` 或 `PDF`；
- 打开 **书源**，导入 Legado / 阅读 App JSON 书源；
- 打开 **插件配置**，登录番茄或起点并一键添加当前账号书架。

下载或翻译会创建后台任务，可在 **任务中心** 查看进度、错误和重试状态。

## Android 连接 PC（无需 Linux）

Android 不包含 Python 后端，但 v2.2.0 可以连接同一局域网内 Windows 正在运行的本机后端：

1. 将手机和电脑连接到同一局域网；
2. 在 PC 青卷 **设置 → 后端连接** 中选择并连接 **本机后端**；
3. 打开 **设置 → 手机连接**，选择手机所在的内网网卡并点击 **生成连接二维码**；
4. Windows 防火墙首次询问时，只允许可信的专用网络；
5. 在 Android 青卷 **我的 → 服务连接** 中点击 **扫描二维码**，核对地址后验证并连接。

手机会直接使用 PC 的书库、任务、翻译配置和阅读进度，不需要 Linux、连接账号或在手机安装 Python。PC 青卷必须保持运行；关闭共享、退出 PC 青卷或重新生成二维码后，旧连接会失效。

无法扫码时，可在 PC 复制连接链接，再粘贴到 Android。二维码和链接含连接凭据，不要公开截图或转发给不可信设备。

## Linux 远程模式（可选）

需要服务器长期在线、外网 HTTPS 访问或多个独立用户时，再准备一台可通过 SSH 管理的 Linux x86_64 主机。

### 1. 部署 Linux 服务

```bash
sudo mkdir -p /opt/qingjuan
sudo git clone https://github.com/qingscroll/QingJuan.git /opt/qingjuan/app
cd /opt/qingjuan/app
sudo bash deploy/linux/install.sh
sudo qingjuan-info
```

安装脚本会寻找 Tailscale、WireGuard 或局域网 IPv4，并显示管理界面地址、FastAPI 根地址、连接 Token 和首次管理密码。不要公开这些凭据。v2.2.0 继续配置多用户和受控在线升级所需服务。

::: tip 公网服务器
如果客户端需要从公网访问，请先配置 HTTPS 反向代理，再给安装脚本传入 `--url https://你的域名`。不要直接暴露公网 HTTP 端口。
:::

### 2. 安装并连接客户端

- Windows：解压 Windows ZIP，可在设置中选择 **Linux 远程后端**；
- Android：安装 `QingJuan-v2.3.0-android.apk`。

在 **设置 → 后端连接** 中填写 `qingjuan-info` 显示的 FastAPI 地址和连接 Token，然后保存。地址末尾不要添加 `/api/v1`。

连接成功后打开 **我的**，注册或登录用户账号。已有 v1.7.7 书库升级后会自动归属内置 `admin` 用户；使用服务器管理密码登录该默认账号。新用户的邮箱验证码或身份牌要求由管理员在浏览器管理界面配置。

## 完成检查

Windows 本机模式：

- [ ] 状态显示“本机后端已连接”；
- [ ] 未要求填写 Linux 地址或连接 Token；
- [ ] 可以加载书架并创建导入或搜索任务。

Android 连接 PC：

- [ ] PC 显示本机后端已连接并已生成手机连接二维码；
- [ ] Android 扫码后显示 PC 的内网地址；
- [ ] 手机能够读取 PC 书架，并且 PC 退出后连接明确断开；
- [ ] 二维码、连接链接和密钥没有出现在公开截图中。

远程模式：

- [ ] Linux 服务端 `/healthz` 正常；
- [ ] 客户端显示“Linux 后端已连接”；
- [ ] 可以注册或登录，并且只看到当前账号的书架；
- [ ] 连接 Token、管理密码和翻译密钥未出现在公开位置。

Android 连接 PC 本机后端时使用的就是 PC 当前书库；Windows 本机数据与 Linux 数据仍不会自动同步。切换到 Linux 相当于切换到另一套书库。遇到问题时查看[选择与连接后端](./connect-server.md)和[故障排查](../server/troubleshooting.md)。
