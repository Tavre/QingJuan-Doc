# 更新与维护

v2.0.0 支持浏览器管理界面在线升级，也保留命令行更新。受控升级器会在独立 release 中完成下载、依赖安装和预检，只在最终切换时短暂停止后端，并在失败时恢复旧版本。v2.2.0 新增的是 Windows / Android **客户端更新**能力，与本页的 Linux 后端升级是两条独立链路。

## 客户端更新与 Linux 后端更新

- Windows 和 Android 客户端会读取 GitHub Release 元数据，只有校验版本、平台和 SHA-256 后才提供更新；Windows 可下载新的安装器，Android 会在浏览器中打开 APK 下载页。
- Windows 安装器升级默认保留安装目录中的 `backend/data/`。使用免安装 ZIP 时仍应先备份数据，且不要把程序文件和数据目录混合覆盖。
- Linux 后端仍通过 `/admin/` 的 **后端升级**或下方 `update.sh` 更新。远程模式建议客户端与后端使用同一正式版本；Android 连接 PC 时应先更新 PC 客户端及其随包后端。
- 当前版本为 `2.3.0+44`。远程模式建议客户端与 Linux 后端同步更新，以获得完整的能力协商和数据维护功能。

## 更新

```bash
sudo bash /opt/qingjuan/app/deploy/linux/update.sh
sudo qingjuan-info
```

命令行脚本会核对部署仓库、创建独立 release、预检后再原子切换；发现不安全路径、并发维护或无法快进的部署状态时会停止。不要通过强制重置绕过保护，先确认改动来源并采用正常 Git 工作流保存或迁移。

更新前建议：

1. 阅读目标版本发布说明；
2. 配套备份 `/var/lib/qingjuan` 与 `/etc/qingjuan/backend.env`；
3. 确认磁盘空间和网络正常；
4. 记录客户端连接地址，但不要在普通记录中保存 Token；
5. 预留短暂停机窗口。

从 v1.7.1 升级到 v1.7.2 或更高版本后，Linux 会继续缓存按需导入作品中尚未落盘的章节。服务重启后任务会恢复；更新前请确认 `/var/lib/qingjuan` 所在磁盘有足够空间。v1.7.3 至 v1.7.7 均可直接读取前一版本数据，不需要手工迁移数据库或导入格式。

v1.7.7 启动时会自动补充刺猬猫、SF 轻小说、少年梦和 E-Hentai 的内置书源与默认插件状态。Linux 后台缓存会尝试完整目录中的全部章节；单章上游没有返回可解析内容时记录失败并继续，因此长篇作品可能产生更多网络请求和磁盘写入。更新前请确认使用边界和剩余空间符合预期。

## 从 v1.7.7 / v1.7.8 升级到 v2.0.0

v2.0.0 可直接覆盖升级，数据库迁移会在首次启动时自动、幂等执行。旧版已有书籍、阅读进度和任务会归属内置 `admin` 用户，不删除数据或模型设置。

升级前必须同时备份 `/var/lib/qingjuan` 和 `/etc/qingjuan/backend.env`。后者保存稳定的 `QINGJUAN_2FA_ENCRYPTION_KEY`，用户启用 2FA 后必须与数据库配套恢复；修改管理密码不会轮换这把密钥。

从不含在线升级器的旧版本迁移时，先执行一次命令行更新。如果管理界面仍提示“尚未启用在线升级”，再次运行同一个 `update.sh` 完成 systemd path/oneshot 引导。之后可在 **后端升级** 页面检查和安装更新。

## 管理界面在线升级

打开 `/admin/` 的 **后端升级**，检查候选版本并确认安装。页面只允许更新固定部署仓库和当前分支，不接受自定义仓库、路径或命令参数。下载和预检阶段服务保持在线；最终切换后客户端会等待服务恢复并自动重新连接。

查看升级服务日志：

```bash
sudo journalctl -u qingjuan-updater -n 100 --no-pager
```

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

同时永久删除 `/var/lib/qingjuan`、配套密钥配置和 `qingjuan` 系统用户：

```bash
sudo qingjuan-uninstall --purge-data
```

::: danger 永久删除
`--purge-data` 会删除书库、用户、章节、任务、导出数据和 2FA 解密配置。需要永久删除时请直接执行该选项，不要先普通卸载；执行前确认备份可读且目标服务器正确。
:::

普通卸载会保留 `qingjuan` 系统用户，避免保留下来的书库文件失去属主。
