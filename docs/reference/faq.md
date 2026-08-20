# 常见问题

## Windows 可以不部署 Linux 后端吗？

可以。v1.7.x 的 Windows ZIP 包含本机 FastAPI 后端。在 **设置 → 后端连接** 中选择 **本机后端**，即可在当前电脑上使用，无需 Linux 服务器、连接 Token 或另外安装 Python。

本机模式固定使用 `http://127.0.0.1:19453`，数据位于完整解压目录的 `backend/data/`。Android 仍需连接 Linux 后端。

## 手机需要安装 Python 吗？

不需要。Android 只安装 APK，书库、下载、OCR 和翻译运行在所连接的 Linux 后端。

## 可以用 Docker 部署吗？

项目当前只维护原生 Python 虚拟环境 + systemd 部署，不提供官方 Docker 或 Compose 路径。

## 可以直接把 19453 端口开放到公网吗？

不应这样做。可信局域网或 Tailscale/WireGuard 可使用 HTTP；公网必须在服务前配置 HTTPS 反向代理。

## FastAPI 地址为什么不能带 `/api/v1`？

客户端保存的是服务根地址，会自行拼接版本化 API 路径。手动添加会造成重复路径和连接失败。

## 连接 Token 和管理密码有什么区别？

连接 Token 给 Windows 远程模式和 Android 使用；管理密码用于 Linux 浏览器 `/admin/`。Windows 本机模式不需要这两项远程凭据。

## 忘记管理密码怎么办？

在服务器运行：

```bash
sudo qingjuan-password --generate
```

命令会显示新密码、重启服务并使旧管理会话失效。

## 连接 Token 忘了怎么办？

运行 `sudo qingjuan-info`。如果 Token 可能泄露，重新运行安装脚本并加 `--rotate-token`，随后更新所有客户端。

## Android 长按无法粘贴连接 Token 怎么办？

v1.7.4 的 Token 密码框旁提供了明确的 **粘贴** 按钮。它只读取纯文本剪贴板并写入当前输入框，不会记录、回显或上传内容。使用完成后仍不要把 Token 放入普通截图、聊天记录或日志。

## 翻译密钥保存在手机吗？

不保存在手机。翻译设置由当前后端持有：Windows 本机模式保存在本机后端，远程模式保存在 Linux 后端。客户端接口不会回传已有密钥明文。

## 漫画一定需要视觉模型吗？

不需要。默认由当前后端的 RapidOCR 识字，再把纯文本交给模型翻译。只有明确开启“使用模型辅助识图”时，图片才可能发送给支持视觉输入的模型。

## Linux 如何连接局域网自建模型？

v1.7.2 起，模型端点默认只允许公网 HTTPS。局域网模型需要由运维方在 `/etc/qingjuan/backend.env` 的 `QINGJUAN_MODEL_ENDPOINT_ALLOWLIST` 中填写精确 Origin，然后重启 `qingjuan-backend`。不要通过普通客户端或管理界面绕过该限制。

## 支持哪些本地文件？

小说支持 TXT/TEXT、DOCX、EPUB；漫画支持 PDF。旧 `.doc` 需要先转换成 DOCX。

## 数据在哪里？

Windows 本机模式的数据在完整解压目录的 `backend/data/`；Linux 远程数据在 `/var/lib/qingjuan`。两套数据不会自动同步。远程连接 Token 保存在客户端的平台安全存储中。

## 卸载会删除书库吗？

普通 `sudo qingjuan-uninstall` 会保留书库。只有显式使用 `--purge-data` 才永久删除数据和系统用户。

## 为什么某个站点突然不能用了？

第三方站点页面、接口、登录和地区规则会变化。先确认你仍可合法访问，再检查书源状态和 Issue；不要尝试绕过购买或访问限制。

## 有 iOS 或网页阅读器吗？

当前没有。React 管理界面用于管理 Windows 本机或 Linux 远程后端，不是读者 Web 客户端或 PWA。
