const body = document.body;
const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = document.querySelector('.theme-icon');
const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') {
  body.classList.add('dark');
  themeIcon.textContent = '◑';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  themeIcon.textContent = isDark ? '◑' : '◐';
});

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      card.classList.toggle('is-hidden', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

document.querySelector('#contact-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector('.form-status');
  status.textContent = '¡Gracias! Te responderé muy pronto.';
  event.currentTarget.reset();
});

const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
window.addEventListener('mousemove', (event) => {
  cursorDot.style.left = `${event.clientX}px`;
  cursorDot.style.top = `${event.clientY}px`;
  cursorRing.style.left = `${event.clientX}px`;
  cursorRing.style.top = `${event.clientY}px`;
});
document.querySelectorAll('a, button, input, textarea').forEach((element) => {
  element.addEventListener('mouseenter', () => cursorRing.classList.add('hovering'));
  element.addEventListener('mouseleave', () => cursorRing.classList.remove('hovering'));
});
