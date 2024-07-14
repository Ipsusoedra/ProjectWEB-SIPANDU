// slider
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// kwarran start
var kwarran = new Swiper(".slide-kwarran", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".kwarran-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".kwarran-button-next",
    prevEl: ".kwarran-button-prev",
  },
});
// kwarran end

// berita start
var berita = new Swiper(".slide-berita", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".berita-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".berita-button-next",
    prevEl: ".berita-button-prev",
  },
});
// berita end

// home start
var anggota = new Swiper(".slide-anggota", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".anggota-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".anggota-button-next",
    prevEl: ".anggota-button-prev",
  },
});

var pembina = new Swiper(".slide-pembina", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".pembina-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".pembina-button-next",
    prevEl: ".pembina-button-prev",
  },
});

var pelatih = new Swiper(".slide-pelatih", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".pelatih-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".pelatih-button-next",
    prevEl: ".pelatih-button-prev",
  },
});

var pamong = new Swiper(".slide-pamong", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".pamong-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".pamong-button-next",
    prevEl: ".pamong-button-prev",
  },
});
// home end

// toggle
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
