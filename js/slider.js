const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 14,
  loop:true,
  navigation: {
    nextEl: '.about-slider_left',
    prevEl: '.about-slider_right',
  },

  breakpoints: {
   // when window width is >= 320px
   320: {
     loop:true,
     slidesPerView: 1,
     spaceBetween: 40
   },

   768: {
     loop:true,
     slidesPerView: 4,
     spaceBetween: 40

   },

   1250: {
     loop:true,
     slidesPerView: 4,
     spaceBetween: 40

   },
 },

});

new Swiper('.partners-swiper', {
  slidesPerView: 6,
  spaceBetween: 30,
  loop:true,
  autoplay: {
    delay: 1400,
    disableOnInteracrion: true,
  },
  navigation: {
    nextEl: '.partners-slider_left',
    prevEl: '.partners-slider_right',
    },
    breakpoints: {
     // when window width is >= 320px
     320: {
       loop:true,
       slidesPerView: 1,
       spaceBetween: 40
     },

     768: {
       loop:true,
       slidesPerView: 3,
       spaceBetween: 50,

     },

     968: {
       loop:true,
       slidesPerView: 4,
       spaceBetween: 30,

     },

     1250: {
       loop:true,
       slidesPerView: 5,
       spaceBetween: 30,

     },

     1536: {
       loop:true,
       slidesPerView: 5,
       spaceBetween: 30,

     },
  },
});
