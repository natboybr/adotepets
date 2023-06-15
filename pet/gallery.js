const images = ["C:\Users\1262212682\Desktop\pet\IMAGENS\1.jpg", "C:\Users\1262212682\Desktop\pet\IMAGENS\2.jpg", "C:\Users\1262212682\Desktop\pet\IMAGENS\3.jpg"];

let index = 0;

const sliderImage = document.querySelector(".slider-image");
const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");

prevArrow.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  sliderImage.src = images[index];
});

nextArrow.addEventListener("click", () => {
  index = (index + 1) % images.length;
  sliderImage.src = images[index];
});