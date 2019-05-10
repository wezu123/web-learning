let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let img = document.querySelector(".slider-img");
let indicator = document.querySelector(".indicator");

prev.addEventListener("click", () => {
  var prExtr = img.src.split("/")
  var extr = prExtr[prExtr.length - 1].split(".")
  img.src = `${parseInt(extr[0], 10) - 1}.jpg`;
  indicator.innerHTML = (parseInt(extr[0], 10) - 1) + " out of 6";
});

next.addEventListener("click", () => {
  var prExtr = img.src.split("/")
  var extr = prExtr[prExtr.length - 1].split(".")
  img.src = `${parseInt(extr[0], 10) + 1}.jpg`;
  indicator.innerHTML = (parseInt(extr[0], 10) + 1) + " out of 6";
});
