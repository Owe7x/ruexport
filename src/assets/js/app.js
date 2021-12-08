
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


if (window.addEventListener) {
  window.addEventListener("message", fc_msg_receive);
} else {
  // IE8
  window.attachEvent("onmessage", fc_msg_receive);
}

function fc_msg_receive(msg) {
  if (msg && msg.data && typeof msg.data === "string") {
      if (msg.data.indexOf('Facecast_player') > -1) {
          var data = JSON.parse(msg.data);
          if (data.type == "write_storage") {
              try {
                  window.localStorage.setItem(data.key, data.value);
              } catch(e) {
                  return console.log(e.toString());
              }
          }

          if (data.type == "update_storage") {
              fc_update_storage(data.source_frame);
          }
      }
  }
}

function fc_load_iframe(e, par) {
  if (!e.id) {
      console.log('No frame id');
      return;
  }
  var d = document.querySelector('script[src*="/v/js/iframe.js"]').src.split("/")[2];
  var s, p, url = 'https://' + ((d) ? d : 'facecast.net') + '/v/'+ e.id + ((par) ? '?'+par : '');
  if (s = document.location.search.slice(1)) {
      p = s.split('&');
      p.forEach(function (item) {
          if (item.indexOf('utm_') == 0 || item.indexOf('fc_') == 0 || item.indexOf('fcdebug') == 0) {
              url = url + ((url.indexOf('?') > 0) ? '&' : '?') + ((item.indexOf('fc_') == 0) ? item.replace('fc_','') : item);
          }
      });
  }
  if (e.src != url)
      e.src = url;
}

function fc_update_storage(e) {
  var d = {};
  try {
      Object.keys(window.localStorage).forEach(function(k) {
          d[k] = window.localStorage[k];
      });
  } catch(error) {
      return console.log(error.toString());
  }

  var m = JSON.stringify({
      frame: e,
      exec: "update_storage",
      data: d
  });
  try {
      for (var i = 0; i < window.frames.length; i++) {
          if (window.frames[i].location.pathname == '/v/'+e)
              window.frames[i].postMessage(m, '*');
      }
  } catch(error) {
      return console.log(error.toString());
  }
}