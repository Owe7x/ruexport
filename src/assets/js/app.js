
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
  nextArrow: '<button type="button" class="slick-next-gallery"></button>'
});