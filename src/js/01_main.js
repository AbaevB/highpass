//document.addEventListener('DOMContentLoaded',function(){
//  let headerBtn = document.querySelector(".header__search-btn");
//  let headerForm = document.querySelector(".header__search-form");
//  let formClose = document.querySelector(".search-form__close-btn");
//
//
//    headerBtn.addEventListener('click', function(){
//      headerForm.classList.remove('d-none');
//    });
//    formClose.addEventListener('click', function(){
//      headerForm.classList.add('d-none');
//    });
//});

document.addEventListener('DOMContentLoaded', function () {
  let headerBtn = document.querySelector(".header__search-btn");
  let headerForm = document.querySelector(".header__search-form");
  let formClose = document.querySelector(".search-form__close-btn");

  headerBtn.addEventListener('click', function () {
    // Скрываем кнопка и показываем форму с анимацией
    gsap.to(headerForm, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      display: "block",
      onStart: () => { headerBtn.style.display = 'none'; },
      onComplete: () => { headerForm.classList.remove('d-none'); }
    });
  });

  formClose.addEventListener('click', function () {
    // Плавно скрываем форму и показываем кнопку
    gsap.to(headerForm, {
      duration: 0.5,
      y: -50,
      opacity: 0,
      onStart: () => { headerForm.classList.remove('d-none'); },
      onComplete: () => {
        headerForm.style.display = 'none';
        headerBtn.style.display = 'block';
      }
    });
  });
});
