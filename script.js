script.js

document.getElementById("navToggle").addEventListener("click", function () {
  document.getElementById("navLinks").classList.toggle("show");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});