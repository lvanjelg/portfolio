// ============================================
// PORTFOLIO — Interactive Scripts
// Minimalist / Professional
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. SPARKLING STAR BACKGROUND
  // Static stars that gently twinkle in place
  // ==========================================
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let W, H;
  let time = 0;

  function resizeCanvas() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Create stars — fixed positions, never move
  const stars = [];
  const STAR_COUNT = 200;
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
      x: Math.random(),
      y: Math.random(),
      size: 0.5 + Math.random() * 1.5,
      baseAlpha: 0.2 + Math.random() * 0.4,
      speed: 0.003 + Math.random() * 0.012,
      phase: Math.random() * Math.PI * 2,
    });
  }

  ctx.imageSmoothingEnabled = false;

  function drawStars() {
    ctx.clearRect(0, 0, W, H);

    for (const star of stars) {
      const sx = star.x * W;
      const sy = star.y * H;

      // Twinkle: gentle sine wave on alpha
      const twinkle = Math.sin(time * star.speed + star.phase);
      const alpha = star.baseAlpha + twinkle * star.baseAlpha * 0.6;
      const finalAlpha = Math.max(0, Math.min(alpha, 0.7));

      const s = Math.max(1, Math.round(star.size));
      ctx.fillStyle = `rgba(200, 210, 235, ${finalAlpha})`;
      ctx.fillRect(Math.floor(sx), Math.floor(sy), s, s);
    }

    time++;
    requestAnimationFrame(drawStars);
  }
  drawStars();

  // ==========================================
  // 2. TAB NAVIGATION
  // ==========================================
  const navBtns = document.querySelectorAll('.nav-btn');
  const tabs = {
    resume: document.getElementById('tab-resume'),
    experience: document.getElementById('tab-experience'),
    projects: document.getElementById('tab-projects'),
  };

  function switchTab(tabId) {
    navBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    Object.entries(tabs).forEach(([id, el]) => {
      el.classList.toggle('active', id === tabId);
    });
    localStorage.setItem('portfolio-tab', tabId);
    setTimeout(revealVisible, 50);
  }

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      switchTab(btn.dataset.tab);
    });
  });

  // CTA links that navigate to other tabs
  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      switchTab(link.dataset.nav);
    });
  });

  // Restore last tab
  const savedTab = localStorage.getItem('portfolio-tab');
  if (savedTab && tabs[savedTab]) {
    switchTab(savedTab);
  }

  // ==========================================
  // 3. SET HERO TEXT
  // ==========================================
  const heroTitle = document.getElementById('heroTitle');
  const heroSubtitle = document.getElementById('heroSubtitle');
  if (heroTitle) heroTitle.textContent = 'Luke Van Jelgerhuis';
  if (heroSubtitle) heroSubtitle.textContent = 'Machine Learning Engineer in training, passionate about AI and data science.';

  // ==========================================
  // 4. SCROLL REVEAL
  // ==========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.exp-card, .project-card, .resume-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    observer.observe(el);
  });

  const style = document.createElement('style');
  style.textContent = '.revealed { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  function revealVisible() {
    document.querySelectorAll('.exp-card, .project-card, .resume-section').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('revealed');
        observer.unobserve(el);
      }
    });
  }

  setTimeout(revealVisible, 200);

  console.log('Portfolio loaded');
});
