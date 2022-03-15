// Footer copyright year
const todayDate = new Date();
const monthsArr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

document.querySelector("#footer-year").textContent = todayDate.getFullYear();

// Toggle nav-open class on nav button onclikc
const navBtn = document.querySelector(".header-icon");
navBtn.addEventListener("click", (e) => {
  e.target.closest(".header").classList.toggle("nav-open");
});

// Hero section box
const bookingBox = document.querySelectorAll(".booking--box");
const firstBookingBox = bookingBox[0];
const secondBookingBox = bookingBox[1];

firstBookingBox.querySelector(".booking--month").textContent =
  monthsArr[todayDate.getMonth()];

firstBookingBox.querySelector(".booking--day").textContent =
  todayDate.getDate();

todayDate.setDate(todayDate.getDate() + 3);

secondBookingBox.querySelector(".booking--month").textContent =
  monthsArr[todayDate.getMonth()];

secondBookingBox.querySelector(".booking--day").textContent =
  todayDate.getDate();
