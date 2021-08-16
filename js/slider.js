let slides = document.querySelectorAll(".slide");
let sliderDiv = document.querySelector(".slider");
let controlButtons = document.querySelectorAll(".slider-controls__radio");
let pageColor = document.querySelector("body");
let colors = [];
let currentSlide = 0;

// Запись цветов для каждого слайда
for (n = 0; n < slides.length; n++) {
  colors[n] = slides[n].getAttribute("data-color");
}

// Функция смены слайдов и цвета фона
function changeSlide(i) {
  currentSlide = i;
  controlButtons[currentSlide].checked = "true";
  for (let j = 0; j < slides.length; j++) {
    slides[j].classList.remove("slide--active");
  }
  slides[currentSlide].classList.add("slide--active");
  pageColor.style.backgroundColor = colors[currentSlide];
}

// Обработчик клика, вешающий функцию
for (let i = 0; i < slides.length; i++) {
  controlButtons[i].addEventListener("click", function (evt) {
    changeSlide(i);
  });
}

// Функция переключения слайдов по таймеру
function sliderTimer() {
  if (!sliderDiv.matches(":hover")) {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
  }
}

// Установка таймера
setInterval(sliderTimer, 3000);
