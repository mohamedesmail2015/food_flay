// HEADER
//========================================
//          HEADER SCROLL FIXED
//========================================
$(window).on('scroll', function () {
  var scrolling = $(this).scrollTop()
  // console.log(scrolling)
  if (scrolling > 130) {
    $('.header-part').addClass('active')
  } else {
    $('.header-part').removeClass('active')
  }
})

//========================================
//        DROPDOWN MENU FUNCTION
//========================================
$(function () {
  $('.dropdown-link').click(function () {
    $(this).next().toggle()
    $(this).toggleClass('active')
    if ($('.dropdown-list:visible').length > 1) {
      $('.dropdown-list:visible').hide()
      $(this).next().show()
      $('.dropdown-link').removeClass('active')
      $(this).addClass('active')
    }
  })
})

//========================================
//       NAV SIDEBAR MENU ACTIVE
//========================================
$('.nav-link').on('click', function () {
  $('.nav-list li a').removeClass('active')
  $(this).addClass('active')
})

//========================================
//        CATEGORY SIDEBAR FUNCTION
//========================================
$('.header-cate, .cate-btn').on('click', function () {
  $('body').css('overflow', 'hidden')
  $('.category-sidebar').addClass('active')
  $('.category-close').on('click', function () {
    $('body').css('overflow', 'inherit')
    $('.category-sidebar').removeClass('active')
    $('.backdrop').fadeOut()
  })
})

//========================================
//         NAV SIDEBAR FUNCTION
//========================================
$('.header-user').on('click', function () {
  $('body').css('overflow', 'hidden')
  $('.nav-sidebar').addClass('active')
  $('.nav-close').on('click', function () {
    $('body').css('overflow', 'inherit')
    $('.nav-sidebar').removeClass('active')
    $('.backdrop').fadeOut()
  })
})

//========================================
//         CART SIDEBAR FUNCTION
//========================================
$('.header-cart, .cart-btn').on('click', function () {
  $('body').css('overflow', 'hidden')
  $('.cart-sidebar').addClass('active')
  $('.cart-close').on('click', function () {
    $('body').css('overflow', 'inherit')
    $('.cart-sidebar').removeClass('active')
    $('.backdrop').fadeOut()
  })
})

//========================================
//       BACKDROP SIDEBAR FUNCTION
//========================================
$('.header-user, .header-cart, .header-cate, .cart-btn, .cate-btn').on(
  'click',
  function () {
    $('.backdrop').fadeIn()

    $('.backdrop').on('click', function () {
      $(this).fadeOut()
      $('body').css('overflow', 'inherit')
      $('.nav-sidebar').removeClass('active')
      $('.cart-sidebar').removeClass('active')
      $('.category-sidebar').removeClass('active')
    })
  },
)

//========================================
//       COUPON FORM FUNCTION
//========================================
$('.coupon-btn').on('click', function () {
  $(this).hide()
  $('.coupon-form').css('display', 'flex')
})

//========================================
//       RESPONSIVE SEARCH BAR
//========================================
$('.header-src').on('click', function () {
  $('.header-form').toggleClass('active')
  $(this).children('.fa-search').toggleClass('fa-times')
})

//========================================
//       WISH ICON ACTIVE FUNCTION
//========================================
$('.wish').on('click', function () {
  $(this).toggleClass('active')
})

// **************************************************

// Start Our Item's Tab (5)
function openCity(evt, cityName) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName('tabcontent')
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none'
  }
  tablinks = document.getElementsByClassName('tablinks')
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '')
  }
  document.getElementById(cityName).style.display = 'block'
  evt.currentTarget.className += ' active'
}
// *********************************************************************************************

// main_swiper (7)
const main_swiper = new Swiper('.main-slider .swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

main_swiper.on('slideChange', function () {
  new WOW().init()
})

const testi_swiper = new Swiper('.testimonial .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

const adv_swiper = new Swiper('.advertisment .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 40,
  freeMode: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})

var uluru = { lat: 24.774265, lng: 46.738586 }

// Initialize and add the map
function initMap() {
  // The location of Uluru
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru,
  })
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
    draggable: false,
  })
}

// *********************************

filterSelection('all')
function filterSelection(c) {
  var x, i
  x = document.getElementsByClassName('column')
  if (c == 'all') c = ''
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show')
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], 'show')
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i]
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2
  arr1 = element.className.split(' ')
  arr2 = name.split(' ')
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(' ')
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById('myBtnContainer')
var btns = btnContainer.getElementsByClassName('button')
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}
// **************************
