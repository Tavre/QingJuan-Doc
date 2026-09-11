---
aside: false
title: 桌面端与移动端界面展示
description: 查看青卷 Windows 桌面端与 Android 移动端的书架、作品详情和阅读器界面。
---

# 桌面端与移动端界面展示

青卷在 Windows 与 Android 上共享搜索、下载、翻译、阅读和听书能力，同时针对键鼠宽屏与手机触控分别设计界面。下面的截图来自 v1.7.6，用于展示两端的基础布局；v2.1.0 保留 Windows Fluent 工作区并新增漫画翻译与系统托盘，同时将 Android 重构为“书库、发现、任务、我的”四入口界面。因此移动端截图主要用于对照基础功能，导航与视觉细节以当前客户端为准。

<div class="qj-interface-showcase">

## Windows 桌面端

Windows 客户端采用适合宽屏与键鼠的工作区：左侧导航固定展示主要入口，书架、作品详情和阅读器充分利用横向空间。Windows 可以使用安装包内的本机后端，**无需部署或连接 Linux 服务器**；也可以切换到 Linux 远程后端。

<div class="qj-showcase-grid qj-showcase-grid-desktop">
  <figure class="qj-showcase-card qj-showcase-card-wide">
    <img src="/screenshots/v1.7.6/windows-bookshelf.png" alt="青卷 Windows 桌面端深色书架界面，左侧为导航，右侧为书籍卡片" loading="lazy" />
    <figcaption><strong>书架</strong><span>侧栏导航、搜索与多列作品卡片集中在同一工作区。</span></figcaption>
  </figure>
  <figure class="qj-showcase-card">
    <img src="/screenshots/v1.7.6/windows-book-detail.png" alt="青卷 Windows 桌面端深色作品详情与章节列表" loading="lazy" />
    <figcaption><strong>作品详情</strong><span>简介、统计、批量操作和章节下载保持清晰层级。</span></figcaption>
  </figure>
  <figure class="qj-showcase-card">
    <img src="/screenshots/v1.7.6/windows-reader.png" alt="青卷 Windows 桌面端深色小说阅读器" loading="lazy" />
    <figcaption><strong>阅读器</strong><span>宽屏正文、章节进度和翻页操作适合安静阅读。</span></figcaption>
  </figure>
</div>

## Android 移动端

Android 客户端针对单手触控、安全区与不同屏幕比例设计。v2.1.0 的手机使用紧凑液态胶囊底栏组织“书库、发现、任务、我的”，平板使用移动侧栏和双栏内容；Android 不包含本机后端，v2.2.0 可扫描二维码连接同一局域网内的 PC，也可连接已部署的 Linux 后端并登录用户账号。

<div class="qj-showcase-grid qj-showcase-grid-mobile">
  <figure class="qj-showcase-card">
    <img src="/screenshots/v1.7.6/android-bookshelf.png" alt="青卷 Android 移动端浅色书架界面" loading="lazy" />
    <figcaption><strong>书架</strong><span>最近阅读、封面墙、搜索和底部导航适配触控操作。</span></figcaption>
  </figure>
  <figure class="qj-showcase-card">
    <img src="/screenshots/v1.7.6/android-book-detail.png" alt="青卷 Android 移动端浅色作品详情与章节列表" loading="lazy" />
    <figcaption><strong>作品详情</strong><span>简介、进度、阅读操作和章节列表按移动端节奏排列。</span></figcaption>
  </figure>
  <figure class="qj-showcase-card">
    <img src="/screenshots/v1.7.6/android-reader.png" alt="青卷 Android 移动端纸张配色沉浸小说阅读器" loading="lazy" />
    <figcaption><strong>沉浸阅读</strong><span>正文延伸到顶部安全区，并保留底部系统导航或手势区。</span></figcaption>
  </figure>
</div>

</div>

::: info 数据边界
截图中的作品与封面仅用于界面展示。实际书架内容来自当前选中的后端；Windows 本机后端与 Linux 远程后端的数据不会自动同步。
:::

准备开始使用时，可继续阅读[五分钟开始](./quick-start.md)；需要了解阅读排版与系统栏行为时，查看[阅读与听书](./reading-and-tts.md)。
