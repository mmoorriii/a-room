'use strict';

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
function isWebp() {
   // Проверка поддержки webp
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }
   // Добавление класса _webp или _no-webp для HTML
   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

isWebp();
//------------------------------------------------------------------------------------
//let button = document.querySelectorAll('.dropdown__item');
//let element = document.querySelector('.collapse');
//for (let i = 0; i < button.length; i++) {
//   button[i].addEventListener('click', function () {
//      element.classList.toggle('active');
//      let nextBtn = this.nextElementSibling;
//      if (nextBtn.style.maxHeight) {
//         nextBtn.style.maxHeight = null;
//      } else {
//         nextBtn.style.maxHeight = nextBtn.scrollHeight + 'px';
//      }
//   });
//}

//------------------------------------------------------------------------------------
$(document).ready(function () {
   $('.slider-preview__body').slick({
      dots: true,
      appendDots: '.slider-preview__pagination',
      appendArrows: '.slider-preview__buttons',
      vertical: true,
      verticalSwiping: true,
      infinite: true,
      slideToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      waitForAnimate: false,
      pauseOnHover: false,
      asNavFor: '.slider-preview__nav',
   });
   $('.slider-preview__nav').slick({
      arrows: false,
      asNavFor: '.slider-preview__body',
      //fade: true,
      swipe: false,
      //cssEase: 'linear'
   });
   $('.slider-achievements__body').slick({
      appendArrows: '.slider-achievements__buttons',
      fade: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      waitForAnimate: false,
      swipe: false,
   });
   //$('div.numbers').slick({
   //   fade: true,
   //   waitForAnimate: false,
   //   arrows: false,
   //   vertical: true,
   //   asNavFor: '.slider-achievements__body',
   //});
});