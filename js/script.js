let body = document.querySelector("body");
let overlay = document.querySelector(".overlay");
let main = document.querySelector("main");

// Всплывающее меню
let submenuLink = document.querySelector(".submenu-element");
let submenuList = document.querySelector(".submenu__list");
let submenuLinkFocused = document.querySelector(".menu__link");
let ariaUnfocused = document.querySelector(".aria--unfocus");
let isSubmenuLinkHover = 0;

// Окно поиска по сайту
let searchBtn = document.querySelector(".aside-menu__btn--search");
let searchModal = document.querySelector(".search-popup");
let searchModalInput = document.querySelector(".search-popup__input");

// Окно логина
let loginForm = document.querySelector(".login-popup__form");
let loginBtn = document.querySelector(".aside-menu__btn--login");
let loginModal = document.querySelector(".login-popup");
let loginModalLogin = document.querySelector(".login-popup__input");
let loginModalPassword = document.querySelector(
  ".login-popup__input[type='password']"
);
let storageLogin = localStorage.getItem("login");

// Окно корзины
let cartBtn = document.querySelector(".aside-menu__btn--cart");
let cartModal = document.querySelector(".cart-popup");

// Окно обратной связи
let feedbackBtn = document.querySelector(".map-card__button");
let feedbackBtnClose = document.querySelector(".feedback-popup__close-btn");
let feedbackModal = document.querySelector(".feedback-popup");
let feedbackModalInput = document.querySelector(".feedback-popup__input");

// Обработчики элементов side menu
// --Поиск
searchBtn.addEventListener("click", function (evt) {
  searchModal.classList.toggle("modal--show");
  loginModal.classList.remove("modal--show");
  cartModal.classList.remove("modal--show");
  searchModalInput.focus();
});

// --Логин
loginBtn.addEventListener("click", function (evt) {
  loginModal.classList.remove("modal-error");
  loginModal.classList.toggle("modal--show");
  searchModal.classList.remove("modal--show");
  cartModal.classList.remove("modal--show");
  loginModalLogin.focus();
  if (storageLogin) {
    loginModalLogin.value = storageLogin;
    loginModalPassword.focus();
  }
});

// --Корзина
cartBtn.addEventListener("click", function (evt) {
  cartModal.classList.toggle("modal--show");
  searchModal.classList.remove("modal--show");
  loginModal.classList.remove("modal--show");
});

// --Обратная связь
if (feedbackBtn) {
  feedbackBtn.addEventListener("click", function (evt) {
    overlay.classList.add("modal--show");
    body.classList.add("no-scroll");
    feedbackModal.classList.add("modal--show", "animation--bounceIn");
    feedbackModalInput.focus();
  });

  feedbackBtnClose.addEventListener("click", function (evt) {
    feedbackModalBounceOut();
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (feedbackModal.classList.contains("modal--show")) {
        evt.preventDefault;
        feedbackModalBounceOut();
      }
    }
  });
}
// --Оверлей
if (overlay) {
  overlay.addEventListener("click", function (evt) {
    feedbackModalBounceOut();
  });

  sliderDiv.onclick = function () {
    searchModal.classList.remove("modal--show");
    loginModal.classList.remove("modal--show");
    cartModal.classList.remove("modal--show");
  };
}

main.onclick = function () {
  searchModal.classList.remove("modal--show");
  loginModal.classList.remove("modal--show");
  cartModal.classList.remove("modal--show");
};

// Анимация плавного изчезновения окна обратной связи
function feedbackModalBounceOut() {
  feedbackModal.classList.remove("animation--bounceIn");
  feedbackModal.classList.add("animation--bounceOut");
  setTimeout(function () {
    feedbackModal.classList.remove("animation--bounceOut", "modal--show");
    overlay.classList.remove("modal--show");
    body.classList.remove("no-scroll");
  }, 300);
}

// Валидация формы логина
loginForm.addEventListener("submit", function (evt) {
  if (!loginModalLogin.value || !loginModalPassword.value) {
    loginModal.preventDefault;
    loginModal.classList.add("modal-error");
    setTimeout(function () {
      loginModal.classList.remove("modal-error");
    }, 600);
  } else {
    localStorage.setItem("login", loginModalLogin.value);
  }
});

// Появление сабменю
if (submenuLink) {
  submenuLink.addEventListener("mouseover", function (evt) {
    isSubmenuLinkHover = 1;
    submenuList.classList.add("modal--show");
  });

  submenuLink.addEventListener("mouseout", function (evt) {
    isSubmenuLinkHover = 0;
    setTimeout(() => hideSubmenu(), 1000);
  });
}

function hideSubmenu() {
  if (isSubmenuLinkHover === 0) {
    submenuList.classList.remove("modal--show");
  }
}

// Фокус для сабменю
if (submenuLink) {
  submenuLinkFocused.addEventListener("focus", function (evt) {
    isSubmenuLinkHover = 1;
    submenuList.classList.add("modal--show");
  });

  ariaUnfocused.addEventListener("focus", function (evt) {
    isSubmenuLinkHover = 0;
    hideSubmenu();
  });
}
