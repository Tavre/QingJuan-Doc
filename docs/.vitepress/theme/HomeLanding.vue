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
            href="/reference/changelog"
          >
            <span>v2.3.0 功能更新</span>
            书库追更、离线阅读、备份恢复与翻译校对
          </a>

          <p class="qj-hero-kicker">QingJuan · 开源小说与漫画阅读工具</p>
          <h1 id="qj-hero-title">让每一页，<br />都抵达你。</h1>
          <p class="qj-hero-lead">
            下载、翻译、阅读与听书，一套完整工作流。Windows 下载即用，无需 Linux；Android
            可扫码连接同一局域网内的 PC，也可登录 Linux 远程书库。
          </p>

          <div class="qj-hero-entries" aria-label="开始使用青卷">
            <a class="qj-glass-entry" href="/guide/quick-start#windows-单机使用-无需-linux">
              <strong>Windows 单机使用</strong>
              <span>随包本机后端，无需 Token 或另装 Python</span>
              <span class="qj-entry-arrow" aria-hidden="true">→</span>
            </a>
            <a class="qj-glass-entry" href="/guide/connect-server#手机扫码连接-pc">
              <strong>手机连接 PC</strong>
              <span>扫描二维码，共用本机书库与任务</span>
              <span class="qj-entry-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <a
          class="qj-download-panel"
          href="https://github.com/qingscroll/QingJuan/releases/latest"
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
        <span>v2.3.0 新增书库整理与追更、跨端离线阅读、完整备份恢复和翻译质量管理。</span>
      </div>

      <div class="qj-capability-grid">
        <a class="qj-capability-card" href="/guide/connect-server">
          <span class="qj-card-index">01</span>
          <h3>本机或远程，明确选择</h3>
          <p>Windows 可免登录使用随包本机后端；Linux 远程模式按账号隔离书架、进度与任务。</p>
          <span class="qj-card-link">了解后端模式 →</span>
        </a>
        <a class="qj-capability-card" href="/guide/parsers/">
          <span class="qj-card-index">02</span>
          <h3>插件化内容解析</h3>
          <p>内置解析器可独立启停；v2.2.0 支持导入、更新和卸载可信的站点插件包。</p>
          <span class="qj-card-link">查看全部解析器 →</span>
        </a>
        <a class="qj-capability-card" href="/guide/connect-server#手机扫码连接-pc">
          <span class="qj-card-index">03</span>
          <h3>扫码连接 PC</h3>
          <p>同一局域网内，Android 可使用二维码连接 Windows 本机后端，无需另外部署 Linux。</p>
          <span class="qj-card-link">查看连接方式 →</span>
        </a>
      </div>
    </section>

    <section class="qj-home-section qj-interface-preview" aria-labelledby="qj-interface-title">
      <div class="qj-section-heading">
        <p>桌面端与移动端</p>
        <h2 id="qj-interface-title">同一套书库，适合每块屏幕</h2>
        <span>Windows 为键鼠与宽屏设计，Android 为触控与随身阅读设计；业务能力一致，界面各自适配。</span>
      </div>

      <div class="qj-interface-preview-grid">
        <a class="qj-interface-preview-card qj-interface-preview-desktop" href="/guide/interface-showcase#windows-桌面端">
          <div>
            <span>Windows</span>
            <strong>宽屏工作区</strong>
          <p>侧栏导航、漫画翻译工作台和完整阅读控制，适合键鼠操作与集中管理。</p>
          </div>
          <img
            src="/screenshots/v1.7.6/windows-bookshelf.png"
            alt="青卷 Windows 桌面端深色书架界面"
            loading="lazy"
          />
        </a>

        <a class="qj-interface-preview-card qj-interface-preview-mobile" href="/guide/interface-showcase#android-移动端">
          <div>
            <span>Android</span>
            <strong>随身书架</strong>
            <p>手机四入口底栏、平板移动侧栏与沉浸阅读，可连接 PC 局域网共享或 Linux 后端。</p>
          </div>
          <img
            src="/screenshots/v1.7.6/android-bookshelf.png"
            alt="青卷 Android 移动端浅色书架界面"
            loading="lazy"
          />
        </a>
      </div>

      <a class="qj-interface-preview-link" href="/guide/interface-showcase">查看全部桌面端与移动端界面 →</a>
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
            <li>在客户端设置模型与外部 OCR</li>
            <li>漫画翻译工作台与书架译文写回</li>
            <li>Windows 系统 TTS 与键鼠体验</li>
          </ul>
          <a href="/guide/quick-start#windows-单机使用-无需-linux">开始安装 →</a>
        </article>

        <article class="qj-workflow-panel qj-workflow-panel-remote">
          <span>Android + Windows</span>
          <h3>连接 PC 或远程书库</h3>
          <p>在同一局域网扫描 PC 二维码，或部署 Linux 多用户 FastAPI 服务供设备长期连接。</p>
          <ul>
            <li>PC 本机共享无需 Linux 与独立账号</li>
            <li>每位用户拥有独立书架与进度</li>
            <li>连接 Token、用户会话与管理密码分离</li>
            <li>systemd 原生部署与受控在线升级</li>
          </ul>
          <a href="/guide/connect-server">选择连接方式 →</a>
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
          <a href="/guide/interface-showcase">界面展示</a>
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
          <a href="https://github.com/qingscroll/QingJuan" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://github.com/qingscroll/QingJuan/releases" target="_blank" rel="noreferrer">Releases</a>
          <a href="https://github.com/qingscroll/QingJuan/issues" target="_blank" rel="noreferrer">Issues</a>
          <a href="https://qm.qq.com/q/ZlhrrFKwOy" target="_blank" rel="noreferrer">加入 QQ 群</a>
        </div>
      </div>
    </footer>
  </main>
</template>
