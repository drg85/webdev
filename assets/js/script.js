/* =========================
   Toggle navbar
========================= */
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
  });
};

showMenu("nav-toggle", "nav-menu");

/* =========================
   Remove mobile menu on link click
========================= */
const navLinks = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  if (navMenu) {
    navMenu.classList.remove("show-menu");
  }
}

navLinks.forEach((link) =>
  link.addEventListener("click", linkAction)
);

/* =========================
   Scroll Sections Active Link (FIXED)
========================= */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80; // header offset
    const sectionId = current.getAttribute("id");

    if (!sectionId) return;

    const navLink = document.querySelector(
      `.nav__menu a[href="#${sectionId}"]`
    );

    // ✅ Prevents "classList of null" crash
    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* =========================
   Change Background Header
========================= */
function scrollHeader() {
  const header = document.getElementById("header");
  if (!header) return;

  if (window.scrollY >= 550) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

/* =========================
   Swiper JS
========================= */
const swiperEl = document.querySelector(".swiper");

if (swiperEl) {
  new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
