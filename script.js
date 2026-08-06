const typedText = document.getElementById("typedText");
const phrases = ["code.", "algorithms.", "web apps.", "ideas into reality."];
let phrase = 0, char = 0, deleting = false;

function typeLoop() {
  const current = phrases[phrase];
  typedText.textContent = current.slice(0, char);
  if (!deleting && char < current.length) {
    char++;
    setTimeout(typeLoop, 90);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 1200);
  } else if (char > 0) {
    char--;
    setTimeout(typeLoop, 45);
  } else {
    deleting = false;
    phrase = (phrase + 1) % phrases.length;
    setTimeout(typeLoop, 250);
  }
}
typeLoop();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "light") document.body.classList.add("light");

function updateThemeIcon() {
  toggle.textContent = document.body.classList.contains("light") ? "☾" : "☀";
}
updateThemeIcon();

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "portfolio-theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
  updateThemeIcon();
});

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", e => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});
