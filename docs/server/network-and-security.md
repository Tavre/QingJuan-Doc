# 网络与安全

本页适用于 Linux 远程模式：远程数据和服务凭据集中在 Linux。安全部署的核心是私网优先、外网 HTTPS、凭据分离、日志脱敏和定期备份。Windows 本机模式只监听回环地址，不需要远程 Token。

## 推荐拓扑

```text
Windows / Android
        │
        ├─ 局域网或 Tailscale/WireGuard：HTTP + Bearer Token
        │
        └─ 公网：HTTPS 反向代理 + Bearer Token
                                  │
                           Linux FastAPI
                                  │
                     SQLite、书籍、OCR、翻译设置
```

HTTP 只适用于可信私有网络。公网访问必须由反向代理终止 TLS；不要直接开放 FastAPI 的明文端口。

## 三类凭据

| 凭据 | 保存位置 | 用途 | 泄露后的处理 |
| --- | --- | --- | --- |
| 连接 Token | 服务端受保护文件；客户端安全存储 | 客户端 API Bearer 认证 | 轮换 Token，更新所有客户端 |
| 管理密码 | 服务端只保存慢哈希 | 浏览器管理界面登录 | 重置密码，使旧会话失效 |
| 翻译 API 密钥 | Linux 服务端配置 | 调用外部模型服务 | 在服务商处撤销并重新配置 |

不要把三者复用为同一个值。

## 地址与同源

- 客户端只应把连接 Token 发送到配置的青卷 API 同源地址；
- 第三方封面、重定向和书源请求不应携带 Token；
- `/healthz`、错误响应和公开 DTO 不应泄露绝对路径或敏感设置；
- 公网域名必须使用有效证书，不要在客户端关闭 TLS 校验。

## 数据与日志

需要保护的内容包括：

- `/var/lib/qingjuan` 中的数据库、书籍、译文和导出物；
- `/etc/qingjuan` 中的连接和认证配置；
- 翻译服务密钥、网站 Cookie、管理会话和连接 Token；
- 用户导入或下载的正文与图片。

普通日志应只包含任务 ID、阶段、状态码、耗时和脱敏错误。向他人求助前再次检查终端输出和截图。

## 模型与 OCR 出站地址

v1.7.2 起，模型与外部 OCR 请求默认只允许解析到公网地址的 HTTPS。后端会拒绝回环、私网、链路本地、保留地址、云元数据、环境代理和自动重定向，并把连接固定到已经校验的 IP。

确需连接局域网自建模型时，只能由 Linux 运维方在 `/etc/qingjuan/backend.env` 中设置精确 Origin：

```text
QINGJUAN_MODEL_ENDPOINT_ALLOWLIST=http://192.168.1.20:11434
```

多个 Origin 使用英文逗号分隔。保存后运行：

```bash
sudo systemctl restart qingjuan-backend
```

重新运行安装脚本会保留已有白名单。业务 API 和管理界面不会显示或修改该值。

## 轮换连接 Token

在源码目录重新运行安装脚本：

```bash
cd /opt/qingjuan/app
sudo bash deploy/linux/install.sh --rotate-token
sudo qingjuan-info
```

轮换后，所有客户端的旧 Token 都会失效。逐台设备更新 **设置 → 后端连接**，并确认不再使用旧值。

## 最低检查清单

- [ ] 公网只暴露 HTTPS；
- [ ] 服务由单个 systemd 实例、单个 Uvicorn worker 运行；
- [ ] `/var/lib/qingjuan` 和 `/etc/qingjuan` 权限受限；
- [ ] 客户端、管理界面和翻译服务使用不同凭据；
- [ ] 局域网模型只通过精确 Origin 白名单授权；
- [ ] 日志和 Issue 不含密钥、Cookie、正文和服务器绝对路径；
- [ ] 已建立可验证的离线备份。
