const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector("#navLinks");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Small reveal animation using IntersectionObserver.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project, .timeline-item").forEach(el => {
  el.classList.add("reveal");
  observer.observe(el);
});
