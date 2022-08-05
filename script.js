const burger = document.getElementById("burger");
const navLinks = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  navLinks.classList.toggle("nav-active");
});
