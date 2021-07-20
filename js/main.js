// header start
let searchBtn = document.querySelector("#search-btn"),
  searchBar = document.querySelector(".search-bar-container");
searchBtn.addEventListener("click", () => {
  searchBtn.classList.toggle("fa-times");
  searchBar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    navbar.classList.remove("active");
    menu.classList.remove("fa-times");
  }
});

window.onscroll = () => {
  searchBtn.classList.remove("fa-times");
  searchBar.classList.remove("active");
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  loginForm.classList.remove("active");
};

let menu = document.querySelector("#menu-bar"),
  navbar = document.querySelector(".navbar");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");

  if (searchBar.classList.contains("active")) {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
  }
});
// header end

// login form start
let formBtn = document.querySelector("#login-btn"),
  loginForm = document.querySelector(".login-form-container"),
  formClose = document.querySelector("#form-close");

formBtn.addEventListener("click", () => {
  loginForm.classList.add("active");

  if (
    navbar.classList.contains("active") ||
    searchBar.classList.contains("active")
  ) {
    navbar.classList.remove("active");
    menu.classList.remove("fa-times");
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
  }
});

formClose.addEventListener("click", () => {
  loginForm.classList.remove("active");
});
// login form end

// home section start
let videoBtn = document.querySelectorAll(".vid-btn");
videoBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".controls .active").classList.remove("active");
    btn.classList.add("active");
    let src = btn.getAttribute("data-src");
    document.querySelector("#video-slider").src = src;
  });
});
// home section end

// review section start
var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
// review section end

// brand section start
var swiper = new Swiper(".brand-slider", {
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
// brand section end
