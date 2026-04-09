// ── Mobile nav toggle ──────────────────────────────
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function closeNav() {
  navLinks.classList.remove('open');
}

// ── Active nav link on scroll ──────────────────────
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });

// ── Language switcher ──────────────────────────────
let currentLang = localStorage.getItem('lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  // Swap [data-en] / [data-nl] elements (headings, labels, buttons)
  document.querySelectorAll('[data-en]').forEach(el => {
    el.innerHTML = lang === 'nl' ? el.dataset.nl : el.dataset.en;
  });

  // Toggle .t-en / .t-nl paragraph pairs
  document.querySelectorAll('.t-en').forEach(el => {
    el.style.display = lang === 'nl' ? 'none' : '';
  });
  document.querySelectorAll('.t-nl').forEach(el => {
    el.style.display = lang === 'nl' ? '' : 'none';
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// Apply on load
setLanguage(currentLang);
