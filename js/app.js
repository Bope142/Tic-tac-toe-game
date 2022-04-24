 let swiperContainer;
 const slider__tab = () => {
     let config = {
         slidesPerView: 1,
         spaceBetween: 0,
         loop: false,
         allowTouchMove: false,

     }
     var swiper = new Swiper('.swiper-container', config);
     swiperContainer = document.querySelector('.swiper-container').swiper;
 }
 const backBtn = () => {
     document.querySelector('.back-home').addEventListener('click', () => {
         swiperContainer.slideTo(0, 500, true)
     })
 }
 const slideTab = () => {
     document.querySelectorAll('.btn-controll').forEach((btn, index) => {
         btn.addEventListener('click', () => {
             switch (index) {
                 case 0: {
                     swiperContainer.slideTo(1, 500, true)
                 }
                 break;
             case 1: {
                 swiperContainer.slideTo(1, 500, true)
             }
             break;
             case 2: {
                 swiperContainer.slideTo(2, 500, true)
             }
             break;
             }
         })
     })
 }
 window.addEventListener('load', () => {
     slider__tab()
     slideTab()
     backBtn()
 })
