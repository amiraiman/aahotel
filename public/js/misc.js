const year = new Date().getFullYear();
const footerYear = (document.querySelector("#footer-year").textContent = year);

// Toggle nav-open class on nav button onclikc
const navBtn = document.querySelector(".header-icon");
navBtn.addEventListener("click", (e) => {
  e.target.closest(".header").classList.toggle("nav-open");
});
