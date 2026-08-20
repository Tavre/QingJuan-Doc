# 准备服务器

本页只适用于 Linux 远程模式。只使用 Windows 本机后端时无需准备 Linux；Android 或跨设备共享书库时，再按本页确认系统、网络和数据保管方式。

## 系统要求

| 项目 | 要求 |
| --- | --- |
| 架构 | Linux x86_64 |
| 服务管理 | systemd |
| Python | CPython 3.11 或更高版本，带 `venv` |
| 基础命令 | Git、curl、Bash |
| 浏览器 | Chromium、Chromium Browser 或 Google Chrome |
| 字体 | Noto CJK 等覆盖目标语言的字体 |
| 网络 | 局域网、Tailscale/WireGuard 私有网络，或已配置 HTTPS 的域名 |

安装脚本会在带 `apt-get` 的系统上安装 `ca-certificates`、`curl`、`fonts-noto-cjk`、`git`、`python3`、`python3-venv` 和 Chromium。其他发行版可以使用 `--skip-packages`，但必须提前手动提供这些能力。

::: tip 推荐环境
一台长期在线的 Debian/Ubuntu 系服务器最省事。服务端需要读取书库并执行 SQLite 写入，不适合运行在随时被回收的临时容器文件系统中。
:::

## 资源建议

实际需求取决于书库规模、漫画页尺寸、OCR 和并发数。起步环境建议至少准备：

- 2 个 CPU 核心；
- 2 GB 内存，处理大尺寸漫画时建议更多；
- 足够保存原文、图片、译图、导出物和临时文件的磁盘；
- 稳定的出站网络。

磁盘容量应按原始内容的数倍预留。漫画翻译会同时存在原图、处理中间数据和译图，备份也需要额外空间。v1.7.2 起，Linux 上按需导入的文字作品会在后台继续缓存全部可访问章节，也需要按书库规模预留空间。

## 网络方案

按优先级选择：

1. **局域网**：客户端和服务器在同一可信网络，使用私有 IPv4；
2. **Tailscale / WireGuard**：跨地点访问时使用私有覆盖网络；
3. **公网 HTTPS**：由你配置反向代理和证书，安装时显式提供 `--url https://域名`。

不要把 `19453` 的明文 HTTP 端口直接暴露到公网。青卷的部署脚本不自动安装 Nginx、Caddy 或其他反向代理。

## 数据目录

安装后使用固定路径：

| 路径 | 内容 |
| --- | --- |
| `/opt/qingjuan/app` | Git 源码仓库 |
| `/opt/qingjuan/venv` | Python 虚拟环境 |
| `/var/lib/qingjuan` | SQLite、书籍文件、任务与导出数据 |
| `/etc/qingjuan` | 服务配置、连接信息和管理认证材料 |
| `/etc/systemd/system/qingjuan-backend.service` | systemd 单元 |

`/var/lib/qingjuan` 是主要数据备份对象；`/etc/qingjuan` 含敏感配置，如需备份必须加密并限制访问。

## 当前不支持

- Docker / Docker Compose 官方部署；
- 多 worker、多实例共享同一 SQLite 数据目录；
- 多用户隔离、集群和对象存储；
- 在 Windows 或 Android 上运行生产后端。

确认无误后继续[安装服务端](./deploy.md)。
