// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Показываем кнопку, когда пользователь прокрутил страницу вниз на 20px
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Прокручиваем страницу вверх при нажатии на кнопку
scrollToTopBtn.addEventListener("click", function () {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
});
