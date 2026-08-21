# 常用命令

## Windows 本机模式

无需部署 Linux 或手动启动 Python。在 **设置 → 后端连接** 中选择 **本机后端**，青卷会按需启动随包后端。翻译模型与外部 OCR 在客户端 **设置 → 翻译服务** 中配置；本机后端不提供 `/admin/`。健康检查地址：

```text
http://127.0.0.1:19453/healthz
```

本机数据目录为完整解压目录下的 `backend/data/`。

## Linux 服务端

```bash
# 服务状态
sudo systemctl status qingjuan-backend --no-pager

# 本机健康检查
curl --fail http://127.0.0.1:19453/healthz

# 实时日志
sudo journalctl -u qingjuan-backend -f

# 连接地址、Token 和管理地址
sudo qingjuan-info

# 更新
sudo bash /opt/qingjuan/app/deploy/linux/update.sh

# 在线升级器最近 100 行日志
sudo journalctl -u qingjuan-updater -n 100 --no-pager

# 修改管理密码
sudo qingjuan-password

# 生成新的随机管理密码
sudo qingjuan-password --generate

# 卸载但保留书库
sudo qingjuan-uninstall
```

永久删除书库使用 `sudo qingjuan-uninstall --purge-data`。这是不可恢复操作，执行前先验证备份。

## Flutter 客户端

```powershell
flutter pub get
dart format --output=none --set-exit-if-changed lib test
flutter analyze
flutter test
flutter build apk --release
.\tool\build_windows.ps1
```

## Python 后端

```powershell
Set-Location python-backend
python -m ruff check app tests
python -m pytest
python -m compileall -q app
```

## React 管理界面

```powershell
Set-Location admin-web
npm ci
npm run typecheck
npm test
npm run build
```

## 文档站

```powershell
npm ci
npm run docs:dev
npm run docs:build
npm run docs:preview
```

所有命令均应在对应仓库或目录执行。诊断输出中出现连接 Token、管理密码、Cookie、API 密钥或正文时，分享前必须移除。
