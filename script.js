const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const terminal = document.querySelector('.terminal');
document.addEventListener('mousemove', (e) => {
  if (!terminal || window.innerWidth < 850) return;
  const x = (window.innerWidth / 2 - e.clientX) / 80;
  const y = (window.innerHeight / 2 - e.clientY) / 100;
  terminal.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
});
