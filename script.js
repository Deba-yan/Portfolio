const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('#siteNav a');

menuToggle?.addEventListener('click', () => {
  const open = navbar.classList.toggle('nav-open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.textContent = open ? '✕' : '☰';
});

navLinks.forEach(link => link.addEventListener('click', () => {
  navbar.classList.remove('nav-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  if (menuToggle) menuToggle.textContent = '☰';
}));

const showMoreBtn = document.getElementById('showMoreBtn');
const projectsGrid = document.querySelector('.projects-grid');
showMoreBtn?.addEventListener('click', () => {
  const expanded = projectsGrid.classList.toggle('show-all');
  showMoreBtn.setAttribute('aria-expanded', String(expanded));
  showMoreBtn.textContent = expanded ? 'Show less ↑' : 'Show more projects ↓';
  if (!expanded) document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
});

const themeToggle = document.getElementById('themeToggle');
themeToggle?.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.textContent = document.body.classList.contains('light-theme') ? '☾' : '☀';
});

const typedText = document.getElementById('typedText');
const words = ['C++', 'Python', 'JavaScript', 'DSA', 'Web Development'];
let wi = 0, ci = 0, deleting = false;
function typeLoop(){
  if(!typedText) return;
  const word = words[wi];
  typedText.textContent = deleting ? word.slice(0, ci--) : word.slice(0, ci++);
  if(!deleting && ci > word.length){ deleting=true; setTimeout(typeLoop, 1000); return; }
  if(deleting && ci < 0){ deleting=false; wi=(wi+1)%words.length; ci=0; }
  setTimeout(typeLoop, deleting ? 55 : 90);
}
typeLoop();

