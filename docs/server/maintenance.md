# 更新与维护

服务端更新脚本会停止 systemd 服务、快进拉取源码、更新 Python 依赖和管理界面文件，再启动并等待健康检查。

## 更新

```bash
sudo bash /opt/qingjuan/app/deploy/linux/update.sh
sudo qingjuan-info
```

更新脚本使用 `git pull --ff-only`，并在发现已跟踪的未提交改动时拒绝覆盖。不要通过强制重置绕过这项保护；先确认改动来源并采用正常 Git 工作流保存或迁移。

更新前建议：

1. 阅读目标版本发布说明；
2. 完成 `/var/lib/qingjuan` 备份；
3. 确认磁盘空间和网络正常；
4. 记录客户端连接地址，但不要在普通记录中保存 Token；
5. 预留短暂停机窗口。

从 v1.7.1 升级到 v1.7.2 或更高版本后，Linux 会继续缓存按需导入作品中尚未落盘的可访问章节。服务重启后任务会恢复；更新前请确认 `/var/lib/qingjuan` 所在磁盘有足够空间。v1.7.3 可直接读取 v1.7.2 数据；v1.7.4 也可直接读取 v1.7.3 数据，两次升级都不需要数据库或导入格式迁移。

## 日常命令

```bash
# 状态
sudo systemctl status qingjuan-backend --no-pager

# 实时日志
sudo journalctl -u qingjuan-backend -f

# 最近 100 行日志
sudo journalctl -u qingjuan-backend -n 100 --no-pager

# 重启
sudo systemctl restart qingjuan-backend

# 查看连接与管理地址
sudo qingjuan-info

# 修改管理密码
sudo qingjuan-password
```

## 健康检查

```bash
curl --fail http://127.0.0.1:19453/healthz
```

健康检查只说明进程和基本应用可用。完整验收还应从真实 Windows 与 Android 客户端完成连接、书架读取、任务和文件下载。

## 卸载

默认卸载程序、保留书库数据：

```bash
sudo qingjuan-uninstall
```

同时永久删除 `/var/lib/qingjuan` 和 `qingjuan` 系统用户：

```bash
sudo qingjuan-uninstall --purge-data
```

::: danger 永久删除
`--purge-data` 会删除书库、章节、任务和导出数据。需要永久删除时请直接执行该选项，不要先普通卸载；执行前确认备份可读且目标服务器正确。
:::

普通卸载会保留 `qingjuan` 系统用户，避免保留下来的书库文件失去属主。
