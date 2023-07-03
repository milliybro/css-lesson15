const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".hamburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}


const body = document.body;
const modeToggle = document.querySelector(".switch");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
