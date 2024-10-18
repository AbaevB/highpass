document.addEventListener('DOMContentLoaded',function(){
  let headerBtn = document.querySelector(".header__search-btn");
  let headerForm = document.querySelector(".header__search-form");
  let formClose = document.querySelector(".search-form__close-btn");


    headerBtn.addEventListener('click', function(){
      headerForm.classList.remove('d-none');
    });
    formClose.addEventListener('click', function(){
      headerForm.classList.add('d-none');
    });
});
