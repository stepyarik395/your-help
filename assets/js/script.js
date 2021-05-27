import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'slick-carousel';

const menuItem = document.getElementById('accord');
const menu = document.getElementById('hide-menu');
const arrow = document.querySelector('.header__arrow');
document.addEventListener('click', hideMenu);

function hideMenu(e) {
  if (e.target === menuItem) {
    arrow.classList.add('rotate');
    menu.classList.add('active-menu');
  } else {
    arrow.classList.remove('rotate');
    menu.classList.remove('active-menu');
  }
}

$('.flowing-scroll').on('click', function () {
  var el = $(this);
  var dest = el.attr('href');
  if (dest !== undefined && dest !== '') {
    arrow.classList.remove('rotate');
    menu.classList.remove('active-menu');
    $('html').animate(
      {
        scrollTop: $(dest).offset().top,
      },
      100
    );
  }
  return false;
});

$('.section1__slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
});

$('.section5__slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows: true,
  prevArrow: `<svg class="slick-prev" width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 1L1 22L22 43" stroke="#3E8E31" stroke-width="0.8"/>
</svg>
`,
  nextArrow: `<svg class="slick-next width="23" height="44" viewBox="0 0 23 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 1L22 22L1 43" stroke="#3E8E31" stroke-width="0.8"/>
</svg>
`,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
