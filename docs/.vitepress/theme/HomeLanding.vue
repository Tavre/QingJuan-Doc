<template>
  <main class="qj-landing">
    <section class="qj-landing-hero" aria-labelledby="qj-hero-title">
      <div class="qj-landing-grid" aria-hidden="true"></div>
      <div class="qj-landing-glow qj-landing-glow-one" aria-hidden="true"></div>
      <div class="qj-landing-glow qj-landing-glow-two" aria-hidden="true"></div>

      <div class="qj-hero-shell">
        <div class="qj-hero-copy">
          <a
            class="qj-release-note"
            href="https://github.com/Tavre/QingJuan/releases/tag/v1.5.0"
            target="_blank"
            rel="noreferrer"
          >
            <span>v1.5.0 已发布</span>
            Windows 本机 / Linux 远程双模式现已可用
            <span aria-hidden="true">→</span>
          </a>

          <p class="qj-hero-kicker">QingJuan · 开源小说与漫画阅读工具</p>
          <h1 id="qj-hero-title">让每一页，<br />都抵达你。</h1>
          <p class="qj-hero-lead">
            下载、翻译、阅读与听书，一套完整工作流。Windows 下载即用，无需 Linux；Android
            与多设备场景可连接同一套远程书库。
          </p>

          <div class="qj-hero-entries" aria-label="开始使用青卷">
            <a class="qj-glass-entry" href="/guide/quick-start#windows-单机使用-无需-linux">
              <strong>Windows 单机使用</strong>
              <span>随包本机后端，无需 Token 或另装 Python</span>
              <span class="qj-entry-arrow" aria-hidden="true">→</span>
            </a>
            <a class="qj-glass-entry" href="/server/requirements">
              <strong>跨设备阅读</strong>
              <span>Windows 与 Android 共用 Linux 远程书库</span>
              <span class="qj-entry-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <a
          class="qj-download-panel"
          href="https://github.com/Tavre/QingJuan/releases/latest"
          target="_blank"
          rel="noreferrer"
          aria-label="前往 GitHub Releases 下载青卷应用"
        >
          <img src="/logo.png" alt="" aria-hidden="true" />
          <div class="qj-download-panel-shade" aria-hidden="true"></div>
          <div class="qj-download-panel-content">
            <span>Windows · Android</span>
            <strong>下载青卷应用</strong>
            <p>前往 GitHub Releases 获取最新稳定版本与 SHA-256 校验文件。</p>
            <span class="qj-download-link">打开下载页面 <span aria-hidden="true">↗</span></span>
          </div>
        </a>
      </div>
    </section>

    <section class="qj-home-section qj-capabilities" aria-labelledby="qj-capabilities-title">
      <div class="qj-section-heading">
        <p>一套能力，两种使用方式</p>
        <h2 id="qj-capabilities-title">从发现内容，到安静读完</h2>
        <span>当前稳定版为 v1.5.0；源码开发分支版本为 v1.5.1。</span>
      </div>

      <div class="qj-capability-grid">
        <a class="qj-capability-card" href="/guide/connect-server">
          <span class="qj-card-index">01</span>
          <h3>本机或远程，明确选择</h3>
          <p>Windows 可使用随包本机后端，也可连接 Linux；Android 保持远程客户端边界。</p>
          <span class="qj-card-link">了解后端模式 →</span>
        </a>
        <a class="qj-capability-card" href="/guide/sources-and-search">
          <span class="qj-card-index">02</span>
          <h3>插件化内容解析</h3>
          <p>当前开发版将内置站点解析器按插件组织，并与 Legado 外部书源保持清晰边界。</p>
          <span class="qj-card-link">查看书源与插件 →</span>
        </a>
        <a class="qj-capability-card" href="/guide/reading-and-tts">
          <span class="qj-card-index">03</span>
          <h3>为平台分别设计</h3>
          <p>Windows 保持 Fluent 桌面体验，Android 使用触控优先界面，共享业务但不混用布局。</p>
          <span class="qj-card-link">了解阅读体验 →</span>
        </a>
      </div>
    </section>

    <section class="qj-home-section qj-workflow" aria-labelledby="qj-workflow-title">
      <div class="qj-workflow-copy">
        <p>选择适合你的路径</p>
        <h2 id="qj-workflow-title">一台电脑，或一套共享书库</h2>
        <span>两种后端的数据互不自动同步，切换前先确认当前书库与备份位置。</span>
      </div>

      <div class="qj-workflow-panels">
        <article class="qj-workflow-panel qj-workflow-panel-local">
          <span>Windows</span>
          <h3>下载即用</h3>
          <p>完整解压 ZIP，选择“本机后端”。服务固定监听回环地址，不需要 Linux 服务器。</p>
          <ul>
            <li>数据位于 <code>backend/data/</code></li>
            <li>本机管理界面与模型设置</li>
            <li>Windows 系统 TTS 与键鼠体验</li>
          </ul>
          <a href="/guide/quick-start#windows-单机使用-无需-linux">开始安装 →</a>
        </article>

        <article class="qj-workflow-panel qj-workflow-panel-remote">
          <span>Windows + Android</span>
          <h3>连接同一书库</h3>
          <p>在 Linux 部署单用户 FastAPI 服务，通过私网或 HTTPS 连接多个客户端。</p>
          <ul>
            <li>统一作品、任务与阅读进度</li>
            <li>Bearer Token 与管理密码分离</li>
            <li>systemd 原生部署与备份流程</li>
          </ul>
          <a href="/server/deploy">部署服务端 →</a>
        </article>
      </div>
    </section>

    <footer class="qj-home-footer">
      <div class="qj-footer-brand">
        <a href="/" aria-label="返回青卷文档首页">
          <img src="/logo.png" alt="" />
          <span>青卷 QingJuan</span>
        </a>
        <p>一本书，从发现到读完。</p>
        <small>请只保存你有权访问的内容。</small>
      </div>

      <div class="qj-footer-links">
        <div>
          <strong>产品</strong>
          <a href="/guide/what-is-qingjuan">认识青卷</a>
          <a href="/guide/install-client">安装客户端</a>
          <a href="/guide/reading-and-tts">阅读与听书</a>
        </div>
        <div>
          <strong>文档</strong>
          <a href="/guide/quick-start">快速开始</a>
          <a href="/server/requirements">Linux 服务端</a>
          <a href="/development/README">开发规范</a>
        </div>
        <div>
          <strong>项目</strong>
          <a href="https://github.com/Tavre/QingJuan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/Tavre/QingJuan/releases" target="_blank" rel="noreferrer">Releases</a>
          <a href="https://github.com/Tavre/QingJuan/issues" target="_blank" rel="noreferrer">Issues</a>
        </div>
      </div>
    </footer>
  </main>
</template>
