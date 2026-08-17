# 备份与迁移

青卷当前不承诺无停机备份。可靠做法是短暂停止后端，完整复制 `/var/lib/qingjuan`，再启动服务。

## 备份范围

| 路径 | 是否必需 | 说明 |
| --- | --- | --- |
| `/var/lib/qingjuan` | 必需 | SQLite、书籍文件、任务与导出数据必须保持同一时间点 |
| `/etc/qingjuan` | 迁移时建议 | 含敏感连接与管理配置，必须加密保存 |
| `/opt/qingjuan/app` | 不必 | 可从 Git 重新克隆；本地改动应通过 Git 单独管理 |
| `/opt/qingjuan/venv` | 不必 | 可由依赖文件重建 |

## 创建一致性备份

先准备一个只有管理员可访问、空间足够的备份目录。以下示例把数据归档到 `/srv/backup`：

```bash
sudo install -d -m 0700 /srv/backup
sudo systemctl stop qingjuan-backend
sudo tar -C /var/lib -czf /srv/backup/qingjuan-data.tar.gz qingjuan
sudo systemctl start qingjuan-backend
curl --fail http://127.0.0.1:19453/healthz
```

如需迁移连接和管理配置，可额外创建加密备份。不要把 `/etc/qingjuan` 的明文归档上传到普通网盘、源码仓库或聊天工具。

## 验证备份

```bash
sudo tar -tzf /srv/backup/qingjuan-data.tar.gz | head
sudo sha256sum /srv/backup/qingjuan-data.tar.gz
```

至少确认归档可列出、摘要已记录、文件大小合理。更稳妥的做法是在隔离的临时目录解压，检查数据库与书籍清单，再把一份备份复制到另一台设备。

## 恢复原则

1. 安装与备份对应或兼容的青卷版本；
2. 停止 `qingjuan-backend`；
3. 把备份恢复到独立临时目录；
4. 校验目录结构、SQLite 和书籍文件；
5. 保留当前数据目录的可回滚副本；
6. 用已验证目录替换 `/var/lib/qingjuan`；
7. 修正为 `qingjuan` 服务用户可读写的权限；
8. 启动服务并验证健康检查、管理界面和真实客户端。

不要在服务运行时把数据库和书籍文件分别覆盖到生产目录，也不要只恢复 SQLite 而遗漏书籍文件。

## 迁移服务器

迁移到新主机时，建议先在新机完成空服务安装和网络配置，再停止两端服务并迁移数据。域名不变时仍应验证证书与反向代理；地址或 Token 变化时，需要更新每台客户端。

迁移完成前保留旧主机和备份。确认书架、章节、任务、阅读进度和导出均正常后，再决定是否销毁旧数据。
