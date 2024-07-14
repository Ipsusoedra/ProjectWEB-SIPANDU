// slider
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

// toggle
function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
