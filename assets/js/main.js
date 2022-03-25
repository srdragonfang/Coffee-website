const navMenu = document.getElementById("nav-popUp");
const navOpen = document.getElementById("nav-btn-open");
const navClose = document.getElementById("nav-btn-close");
if (navOpen) {
    navOpen.addEventListener("click", () => {
        navMenu.style.bottom = "0";
        navOpen.style.display = "none";
        navClose.style.display = "flex";
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.style.bottom = "-100%";
        navOpen.style.display = "flex";
        navClose.style.display = "none";
    });
}
// ==============================
const navLink = document.querySelectorAll(".nav-item");

function linkAction() {
    const navMenu = document.getElementById("nav-popUP");
    navMenu.style.bottom = "-100%";
    navOpen.style.display = "flex";
    navClose.style.display = "none";
}
navLink.forEach((n) => n.addEventListener("click", linkAction));