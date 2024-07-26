const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h2", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay:1000,
});
ScrollReveal().reveal(".header__btns", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".steps__card", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".explore__card", {
    ...scrollRevealOption,
    duration:1000,
    interval: 500,
});

ScrollReveal().reveal(".job__card", {
    ...scrollRevealOption,
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".offer__card", {
    ...scrollRevealOption,
    interval: 500,
});

document.addEventListener('DOMContentLoaded', (event) => {
    const swiper = new Swiper('.swiper', {
      loop: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      autoplay: {
        delay: 4000, // Cambia cada 4 segundos (4000 ms)
        disableOnInteraction: false, // Sigue reproduciendo aunque interactúes con el swiper
      },
    });
  });