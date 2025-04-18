
document.getElementById("glitterBtn").addEventListener("click", () => {
  for (let i = 0; i < 80; i++) {
    const glitter = document.createElement("div");
    glitter.className = "glitter";
    glitter.style.left = Math.random() * 100 + "vw";
    glitter.style.animationDelay = (Math.random() * 0.5) + "s";
    document.body.appendChild(glitter);
    setTimeout(() => glitter.remove(), 10000);
  }
});


window.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.site-title');
  setTimeout(() => {
    logo.classList.remove('hidden-logo');
    logo.classList.add('animate');
  }, 300);
});
