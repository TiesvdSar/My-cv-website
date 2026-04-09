// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

function closeNav() {
  navLinks.classList.remove('open');
}

// Highlight nav link for active section
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
