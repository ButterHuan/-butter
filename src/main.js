import './styles.css';
import { portfolioData } from './data/portfolio.js';

const { profile, highlights, resume, skills, projects, additional, contact } = portfolioData;

const app = document.querySelector('#app');

const navItems = [
  { label: '关于', href: '#about' },
  { label: '简历', href: '#resume' },
  { label: '作品', href: '#works' },
  { label: '更多', href: '#more' },
  { label: '联系', href: '#contact' }
];

const renderContactValue = (label, value) => {
  if (!value || value === '暂无') {
    return `<span class="empty-link">${label}: 暂无</span>`;
  }

  const normalized = value.startsWith('http') ? value : `https://${value}`;
  return `<a href="${normalized}" target="_blank" rel="noreferrer">${value}</a>`;
};

const renderHighlights = (items) =>
  items
    .map(
      (item) => `
        <div class="stat-card">
          <div class="stat-value">${item.value}</div>
          <div class="stat-label">${item.label}</div>
        </div>
      `
    )
    .join('');

const renderResume = (items) =>
  items
    .map(
      (group) => `
        <div class="resume-group">
          <h3>${group.category}</h3>
          <div class="resume-list">
            ${group.items
              .map(
                (item) => `
                  <article class="resume-item">
                    <div class="resume-head">
                      <h4>${item.title}</h4>
                      <span>${item.meta}</span>
                    </div>
                    <p>${item.detail}</p>
                  </article>
                `
              )
              .join('')}
          </div>
        </div>
      `
    )
    .join('');

const renderSkills = (items) =>
  items
    .map(
      (item) => `
        <li class="tag-item">${item}</li>
      `
    )
    .join('');

const renderProjectMedia = (mediaItem) => {
  if (mediaItem.type === 'image') {
    return `
      <figure class="media-frame media-image">
        <img src="${mediaItem.src}" alt="${mediaItem.alt || '作品图片'}" />
      </figure>
    `;
  }

  if (mediaItem.type === 'video') {
    return `
      <div class="media-frame media-video">
        <video controls playsinline preload="metadata" poster="${mediaItem.poster || ''}">
          <source src="${mediaItem.src}" type="video/mp4" />
        </video>
      </div>
    `;
  }

  if (mediaItem.type === 'link') {
    return `
      <div class="media-frame media-link">
        <a href="${mediaItem.href}" target="_blank" rel="noreferrer">${mediaItem.label || mediaItem.href}</a>
      </div>
    `;
  }

  return `
    <div class="media-frame media-audio">
      <span class="audio-label">${mediaItem.label || '音频片段'}</span>
      <audio controls src="${mediaItem.src}"></audio>
    </div>
  `;
};

const renderProjects = (items) =>
  items
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-topline">
            <span class="project-type">${project.type}</span>
            <a href="${project.link}" aria-label="查看 ${project.title}">View</a>
          </div>
          <h3>${project.title}</h3>
          ${project.description ? `<p>${project.description}</p>` : ''}
          <div class="project-media">
            ${(project.media || []).slice(0, 2).map((mediaItem) => renderProjectMedia(mediaItem)).join('')}
          </div>
          <ul>
            ${project.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
          <div class="tech-list">
            ${project.tech.map((tech) => `<span>${tech}</span>`).join('')}
          </div>
        </article>
      `
    )
    .join('');

const renderAdditional = (items) =>
  items
    .map(
      (item) => `
        <article class="info-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `
    )
    .join('');

app.innerHTML = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand">
        <div class="brand-mark">${profile.avatar}</div>
        <span>${profile.name}</span>
      </div>
      <nav class="nav">
        ${navItems
          .map(
            (item) => `
              <a href="${item.href}">${item.label}</a>
            `
          )
          .join('')}
      </nav>
      <a class="button ghost" href="#contact">联系我</a>
    </header>

    <main class="content">
      <section class="hero" id="about">
        <div class="hero-copy">
          <span class="eyebrow">Portfolio / Personal Profile</span>
          <h1>${profile.name}</h1>
          <div class="hero-meta">
            <h2>${profile.title}</h2>
            <p class="subtitle">${profile.subtitle}</p>
          </div>
          <p class="lead">${profile.bio}</p>
          <div class="tag-list">
            ${profile.tags.map((tag) => `<span>${tag}</span>`).join('')}
          </div>
          <div class="hero-actions">
            <a class="button primary" href="#works">查看作品</a>
            <a class="button secondary" href="#resume">查看简历</a>
          </div>
        </div>

        <aside class="hero-panel">
          <div class="portrait-card portrait-photo">
            <img src="${profile.portrait}" alt="${profile.name} 个人照片" />
          </div>
          <div class="panel-card">
            <div class="mini-label">所在地</div>
            <strong>${profile.location}</strong>
          </div>
          <div class="panel-card">
            <div class="mini-label">邮箱</div>
            <strong>${profile.email}</strong>
          </div>
          <div class="panel-card">
            <div class="mini-label">电话</div>
            <strong>${profile.phone}</strong>
          </div>
        </aside>
      </section>

      <section class="stats" aria-label="个人亮点统计">
        ${renderHighlights(highlights)}
      </section>

      <section class="section" id="resume">
        <div class="section-head">
          <span class="eyebrow">Resume</span>
          <h2>个人简历与经验</h2>
        </div>
        <div class="resume-layout">
          ${renderResume(resume)}
          <aside class="skill-panel">
            <h3>技能栈</h3>
            <ul class="skill-list">
              ${renderSkills(skills)}
            </ul>
          </aside>
        </div>
      </section>

      <section class="section" id="works">
        <div class="section-head">
          <span class="eyebrow">Selected Works</span>
          <h2>代表作品</h2>
        </div>
        <div class="project-grid">
          ${renderProjects(projects)}
        </div>
      </section>

      <section class="section" id="more">
        <div class="section-head">
          <span class="eyebrow">Other Info</span>
          <h2>更多内容</h2>
        </div>
        <div class="info-grid">
          ${renderAdditional(additional)}
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="section-head">
          <span class="eyebrow">Contact</span>
          <h2>联系我</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-card">
            <span class="mini-label">邮箱</span>
            <a href="mailto:${contact.email}">${contact.email}</a>
          </div>
          <div class="contact-card">
            <span class="mini-label">GitHub</span>
            ${renderContactValue('地区', contact.github)}
          </div>
          <div class="contact-card">
            <span class="mini-label">Dribbble</span>
            ${renderContactValue('Dribbble', contact.dribbble)}
          </div>
          <div class="contact-card">
            <span class="mini-label">微信</span>
            <a href="tel:${contact.wechat}">${contact.wechat}</a>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>© 2026 ${profile.name} · Designed for easy future updates</p>
    </footer>
  </div>
`;
