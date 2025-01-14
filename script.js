const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section"); // תיקון: השתמש ב-querySelectorAll
const navLinks = document.querySelectorAll("header nav a"); // תיקון: querySelectorAll כדי לקבל רשימה

window.onscroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        const activeLink = document.querySelector(
          `header nav a[href*='${id}']`
        );
        if (activeLink) activeLink.classList.add("active"); // בדיקה אם האלמנט קיים
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
