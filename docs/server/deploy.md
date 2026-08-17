# 安装服务端

青卷使用原生 Python 虚拟环境和 systemd 部署。安装入口必须位于 `/opt/qingjuan/app` 中的完整 Git 仓库。

## 标准安装

```bash
sudo mkdir -p /opt/qingjuan
sudo git clone https://github.com/Tavre/QingJuan.git /opt/qingjuan/app
cd /opt/qingjuan/app
sudo bash deploy/linux/install.sh
sudo qingjuan-info
```

默认流程会：

1. 安装必要系统包；
2. 检查 Python 版本、Chromium 和基础命令；
3. 优先检测 Tailscale IPv4，再选择局域网或 WireGuard 私有 IPv4；
4. 创建 `qingjuan` 系统用户、目录和 Python 虚拟环境；
5. 安装后端依赖并配置单进程 systemd 服务；
6. 生成连接 Token、管理密码和管理会话密钥；
7. 启动服务并等待本机健康检查；
8. 输出客户端地址、管理地址和首次管理密码。

管理密码只在首次生成时显示一次。连接 Token 可在以后使用 `sudo qingjuan-info` 再次查看。

## 安装选项

```bash
sudo bash deploy/linux/install.sh --help
```

| 选项 | 用途 |
| --- | --- |
| `--url URL` | 指定对客户端公开的 FastAPI 根地址，不含 `/api/v1` |
| `--bind HOST` | 指定 Uvicorn 监听地址 |
| `--port PORT` | 指定监听端口，默认 `19453` |
| `--rotate-token` | 重新生成客户端连接 Token |
| `--skip-packages` | 跳过 `apt-get` 系统包安装 |

## 私有网络安装

服务器已经加入局域网、Tailscale 或 WireGuard 时，通常无需额外参数。脚本会生成类似：

```text
http://192.168.1.20:19453
http://100.64.10.20:19453
```

未检测到私有 IPv4 时，脚本会停止，而不是猜测或查询公网 IP。先配置私有网络，再重新运行。

## 公网 HTTPS

先由你配置 HTTPS 反向代理，再执行：

```bash
cd /opt/qingjuan/app
sudo bash deploy/linux/install.sh --url https://reader.example.com
```

`--url` 是客户端可访问的根地址：不能包含 `/api/v1`、账号密码、查询参数或片段。反向代理应把同一来源下的 `/api/v1/` 和 `/admin/` 转发到青卷服务。

## 仅通过 SSH 隧道

如果服务只允许从服务器本机访问：

```bash
sudo bash deploy/linux/install.sh \
  --url http://127.0.0.1:19453 \
  --bind 127.0.0.1
```

客户端侧需要另行建立 SSH 端口转发。这种地址不适合直接填写到另一台设备中。

## 安装后验证

```bash
sudo systemctl status qingjuan-backend --no-pager
curl --fail http://127.0.0.1:19453/healthz
sudo qingjuan-info
```

然后在浏览器打开 `qingjuan-info` 显示的 `/admin/` 地址，并用首次管理密码登录。最后使用 Windows 或 Android 客户端验证书架加载、任务创建和文件往返。

::: warning 保存凭据
不要把安装终端输出录入普通日志。连接 Token、首次管理密码和配置文件内容都属于敏感信息。
:::
