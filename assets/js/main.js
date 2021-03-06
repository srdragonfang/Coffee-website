// header
let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

let searchForm = document.querySelector("#search-form");
let searchIcon = document.querySelector("#search-icon");
let closeBtn = document.querySelector("#close");

searchIcon.onclick = () => {
  searchForm.classList.toggle("active");
};
closeBtn.onclick = () => {
  searchForm.classList.remove("active");
};
