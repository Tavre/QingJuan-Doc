# 故障排查

先判断问题属于进程、网络、认证、上游站点还是翻译服务。每一步只收集必要的脱敏信息。

## 服务没有启动

```bash
sudo systemctl status qingjuan-backend --no-pager
sudo journalctl -u qingjuan-backend -n 100 --no-pager
curl --fail http://127.0.0.1:19453/healthz
```

如果状态是 `203/EXEC` 或出现 `Permission denied`，检查完整路径权限和挂载选项：

```bash
namei -l /opt/qingjuan/venv/bin/python
findmnt /opt/qingjuan
sudo -u qingjuan /opt/qingjuan/venv/bin/python --version
```

更新脚本会重新设置虚拟环境的服务访问权限。先确认服务器已经拉取包含修复的版本，再运行更新；不要在不了解目标路径时递归放宽整个 `/opt` 的权限。

## 安装脚本找不到地址

提示“未检测到可供客户端访问的私有 IPv4”时：

- 先把服务器加入局域网、Tailscale 或 WireGuard；或
- 配置 HTTPS 反向代理后，用 `--url https://你的域名` 安装。

脚本不会自动查询公网 IP，这是预期的安全行为。

## 客户端超时

1. 在服务器本机确认 `/healthz`；
2. 运行 `sudo qingjuan-info` 核对根地址；
3. 确认客户端所在网络能到达该 IP 与端口；
4. 检查防火墙、Tailscale ACL、WireGuard 路由或反向代理；
5. 确认地址没有 `/api/v1`，公网地址使用 HTTPS。

`127.0.0.1` 在手机或另一台电脑上指向客户端自己，不是 Linux 服务器。

## TUN / Fake-IP 代理下站点抓取失败

如果日志提示域名解析到 `198.18.0.0/15` 或建议调整代理 DNS，说明 TUN 代理返回了 Fake-IP。v2.2.1 会通过不继承系统代理的加密 DNS 查询真实公网地址，并在连接前再次执行安全校验。无法升级时，可先将代理 DNS 调整为返回真实 IP 的模式（例如 `redir-host`）；不要把虚拟地址加入私网放行名单。

## 返回 401

健康检查成功但客户端 API 返回 `401`，通常是 Token 不匹配：

1. 用 `sudo qingjuan-info` 获取当前连接信息；
2. 在客户端重新填写 Token 并保存；
3. 如果 Token 可能泄露，使用 `--rotate-token` 轮换；
4. 轮换后更新所有客户端。

不要把 Token 作为命令参数发送给第三方诊断工具。

## 管理界面无法登录

- 确认输入的是管理密码，不是连接 Token；
- 清除站点旧 Cookie 后重试；
- 忘记密码时执行 `sudo qingjuan-password --generate`；
- 改密后旧会话失效属于正常行为。

## 更新被拒绝

提示“存在已跟踪的未提交改动”时：

```bash
git -C /opt/qingjuan/app status --short
git -C /opt/qingjuan/app diff --stat
```

确认谁修改了服务器源码。需要保留时提交到自己的分支或另存补丁；不要直接强制重置生产目录。

## OCR 或漫画翻译失败

```bash
command -v chromium || command -v chromium-browser || command -v google-chrome
sudo journalctl -u qingjuan-backend -f
```

确认 Chromium、Noto CJK 字体、RapidOCR 依赖和磁盘空间正常。先关闭“使用模型辅助识图”，验证本地 OCR + 文本模型路径，再单独检查视觉模型能力。

## 向他人求助

可以提供：版本、操作系统、任务类型、状态码、阶段、耗时和脱敏错误。必须移除：

- 连接 Token、管理密码、Cookie 和翻译 API 密钥；
- 正文、漫画页面和受版权保护内容；
- 数据库、配置文件原文和个人路径；
- 公网服务器的非必要识别信息。
