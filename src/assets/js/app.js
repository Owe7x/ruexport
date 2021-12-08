
// Мобильный слайдер программы
$('.architecture__mobile-slider').slick({
  dots: true,
  adaptiveHeight: true,
});


// Смена языка

$('.checkbox-ios').on("click", "input:checkbox", function (a) {
  var urlEng = "/eng.html";
  var urlRu = "/";
  if ($('#checkbox').is(':checked')){
    $('#checkbox').prop('checked', true);
    $(location).attr('href',urlEng);

  } else {
    $('#checkbox').prop('checked', false);
    $(location).attr('href',urlRu);

  }
});

// Отображение карты 

$('.russianMap').on("click",  function (a) {
  showMap('.russianMap')
});
$('.worldMap').on("click",  function (a) {
  showMap('.worldMap')
});

function showMap (map) {
  if(map === '.worldMap' ) {
    $(map).addClass('map-active')
    $('.map__world').removeClass('d-none')
    $('.map__russian').addClass('d-none')
    $('.russianMap').removeClass('map-active')
  } else {
    $(map).addClass('map-active')
    $('.map__russian').removeClass('d-none')
    $('.map__world').addClass('d-none')
    $('.worldMap').removeClass('map-active')
  }
}

// Слайдер Фотогалерии 

$('.gallery__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev-gallery"></button>',
  nextArrow: '<button type="button" class="slick-next-gallery"></button>',
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$('.news__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev-gallery"></button>',
  nextArrow: '<button type="button" class="slick-next-gallery"></button>',
  responsive: [
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

$("#about-click").on("click", function (event) {
  event.preventDefault();
  ScrollTop ("#about")
});
$("#programm-click").on("click", function (event) {
  event.preventDefault();
  ScrollTop ("#architecture")
});
$("#speakers-click").on("click", function (event) {
  event.preventDefault();
  ScrollTop ("#speakers")
});
$("#gallery-click").on("click", function (event) {
  event.preventDefault();
  ScrollTop ("#gallery")
});
$("#partners-click").on("click", function (event) {
  event.preventDefault();
  ScrollTop ("#partner")
});



$("#about-click-mobile").on("click", function (event) {
  event.preventDefault();
  $('.menu-burger__header').toggleClass('open-menu');
  $('.header-content__mobile').toggleClass('open-menu');
  ScrollTop ("#about")
});
$("#programm-click-mobile").on("click", function (event) {
  event.preventDefault();
  $('.menu-burger__header').toggleClass('open-menu');
  $('.header-content__mobile').toggleClass('open-menu');
  ScrollTop ("#architecture")
});
$("#speakers-click-mobile").on("click", function (event) {
  event.preventDefault();
  $('.menu-burger__header').toggleClass('open-menu');
  $('.header-content__mobile').toggleClass('open-menu');
  ScrollTop ("#speakers")
});
$("#gallery-click-mobile").on("click", function (event) {
  event.preventDefault();
  $('.menu-burger__header').toggleClass('open-menu');
  $('.header-content__mobile').toggleClass('open-menu');
  ScrollTop ("#gallery")
});
$("#partners-click-mobile").on("click", function (event) {
  event.preventDefault();
  $('.menu-burger__header').toggleClass('open-menu');
  $('.header-content__mobile').toggleClass('open-menu');
  ScrollTop ("#partner")
});


function ScrollTop (scrollTo) {
  var top = $(scrollTo).offset().top;
  $('body,html').animate({scrollTop: top}, 1500);
}

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header-content__mobile').toggleClass('open-menu');
	});
});