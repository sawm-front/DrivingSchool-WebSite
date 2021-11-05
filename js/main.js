$(function () {
   ymaps.ready(init);
   var myMap,
      myPlacemark;

   function init() {
      myMap = new ymaps.Map("map", {
         center: [59.882324564245955, 29.890362999999983],
         zoom: 15
      });

      myPlacemark = new ymaps.Placemark([59.882324564245955, 29.890362999999983], {
         hintContent: 'Наша школа',
         balloonContent: 'Автошкола "Лаура" '
      });

      myMap.geoObjects.add(myPlacemark);
   }

});

$(function () {

   $('.gallery__inner').slick({
      arrows: false,
      dots: false,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 1500
   });

});

$(function () {

   $('.advantage__cards').slick({
      arrows: false,
      dots: true,
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 3500,
      responsive: [
         {
            breakpoint: 767,
            settings: "unslick"
         }
      ]
   });
});


$(document).ready(function () {
   $('.hamburger-wrap').click(function (event) {
      $('.menu-hidden,.hidden-list,.hamburger-wrap').toggleClass('active');
      $('body').toggleClass('lock');
   });
});


$('.btn__call').click(function (e) {
   e.preventDefault();
   $('#exampleModal').arcticmodal();
});


// animation

const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {
   window.addEventListener('scroll', animOnScroll);
   function animOnScroll() {
      for (let index = 0; index < animItems.length; index++) {
         const animItem = animItems[index];
         const animItemHeight = animItem.offsetHeight;
         const animItemOffset = offset(animItem).top;
         const animStart = 4;

         let animItemPoint = window.innerHeight - animItemHeight / animStart;

         if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
         }
         if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
            animItem.classList.add('active');
         } else {
            animItem.classList.remove('active');
         }
      }
   }

   function offset(el) {
      const rect = el.getBoundingClientRect(),
         scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
         scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
         top: rect.top + scrollTop,
         left: rect.left + scrollLeft.pageXOffset
      }
   }
}



$(function () {
   $('.form').submit(function (event) {
      const form = $(this);

      event.preventDefault();

      $.ajax({
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize()
      }).done(function (data) {
         alert(data);
      }).fail(function (data) {
      });
   });
});

$(function () {
   $('.contact-form').submit(function (event) {
      const form = $(this);

      event.preventDefault();

      $.ajax({
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize()
      }).done(function (data) {
         alert(data);
      }).fail(function (data) {
      });
   });
});


$(function () {
   $('.popup-form').submit(function (event) {
      const form = $(this);

      event.preventDefault();

      $.ajax({
         type: form.attr('method'),
         url: form.attr('action'),
         data: form.serialize()
      }).done(function (data) {
         alert(data);
      }).fail(function (data) {
      });
   });
});

