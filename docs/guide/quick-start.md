# 五分钟开始

青卷提供两种使用方式：Windows 可以直接使用安装包内的本机后端；Android 或需要跨设备共享书库时，再部署 Linux 远程后端。

## Windows 单机使用（无需 Linux）

### 1. 下载并解压

从 [GitHub Releases](https://github.com/Tavre/QingJuan/releases/latest) 下载：

- `QingJuan-v1.5.0-windows-x64.zip`
- 对应的 `.sha256` 校验文件

完整解压 ZIP 后运行 `qingjuan.exe`。不要只从压缩包预览窗口运行，也不要单独移动 EXE 或删除 `backend/` 目录。

### 2. 选择本机后端

打开 **设置 → 后端连接**，选择 **本机后端** 并保存。应用会按需启动随包的 FastAPI 后端：

- 固定地址：`http://127.0.0.1:19453`
- 无需 Linux 服务器
- 无需连接 Token
- 无需另外安装 Python

全新安装默认使用本机模式。从 v1.4 升级且已有远程配置时会继续保持远程模式，需要手动切换一次。

模型和其他服务设置可在本机管理界面中配置：

```text
http://127.0.0.1:19453/admin/
```

Windows 本机数据位于完整解压目录的 `backend/data/`。移动、更新或删除程序目录前，请先备份该目录。

### 3. 导入第一本书

本机后端连接成功后，可选择任一方式：

- 打开 **搜索**，从已启用书源中找到作品并加入书架；
- 打开 **我的书架**，导入本地 `TXT`、`DOCX`、`EPUB` 或 `PDF`；
- 打开 **书源**，导入 Legado / 阅读 App JSON 书源。

下载或翻译会创建后台任务，可在 **任务中心** 查看进度、错误和重试状态。

## Android 或跨设备使用

Android 不包含本机后端。Android，或希望 Windows 与 Android 共用书库时，需要一台可通过 SSH 管理的 Linux x86_64 主机。

### 1. 部署 Linux 服务

```bash
sudo mkdir -p /opt/qingjuan
sudo git clone https://github.com/Tavre/QingJuan.git /opt/qingjuan/app
cd /opt/qingjuan/app
sudo bash deploy/linux/install.sh
sudo qingjuan-info
```

安装脚本会寻找 Tailscale、WireGuard 或局域网 IPv4，并显示管理界面地址、FastAPI 根地址、连接 Token 和首次管理密码。不要公开这些凭据。

::: tip 公网服务器
如果客户端需要从公网访问，请先配置 HTTPS 反向代理，再给安装脚本传入 `--url https://你的域名`。不要直接暴露公网 HTTP 端口。
:::

### 2. 安装并连接客户端

- Windows：解压 Windows ZIP，可在设置中选择 **Linux 远程后端**；
- Android：安装 `QingJuan-v1.5.0-android.apk`。

在 **设置 → 后端连接** 中填写 `qingjuan-info` 显示的 FastAPI 地址和连接 Token，然后保存。地址末尾不要添加 `/api/v1`。

## 完成检查

Windows 本机模式：

- [ ] 状态显示“本机后端已连接”；
- [ ] 未要求填写 Linux 地址或连接 Token；
- [ ] 可以加载书架并创建导入或搜索任务。

远程模式：

- [ ] Linux 服务端 `/healthz` 正常；
- [ ] 客户端显示“Linux 后端已连接”；
- [ ] 连接 Token、管理密码和翻译密钥未出现在公开位置。

Windows 本机数据与 Linux 数据不会自动同步。切换模式相当于切换到另一套书库。遇到问题时查看[选择与连接后端](./connect-server.md)和[故障排查](../server/troubleshooting.md)。
