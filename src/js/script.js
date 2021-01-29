// $(document).ready(function () {
//   $('.carousel__inner').slick({
// 		speed: 1000,
// 		// dots: true,
// 		adaptiveHeight: true,
// 		autoplay: true,
// 		autoplaySpeed: 2000,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
// 		responsive: [
// 			{
// 				breakpoint: 992,
// 				settings: {
// 					dots: true,
// 					arrows: false,
// 				}
//       }
// 		]
//   });
// });

const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: false,
  // nav: true,
  // navPosition: 'bottom',
  // navPosition: 'center',
  // speed: 600,
  // autoHeight: true,
  responsive: {
      // autoWidth: true,
      // edgePadding: 20,
      // gutter: 20,
      // nav: true,
      // navPosition: 'bottom',
      // fixedWidth: true,
      // controls: true,
      // items: 1
      // },
      // 700: {
      //   // gutter: 30
      // },
      // 1400: {
      //   edgePadding: 20,
      //   gutter: 200,
      //   // items: 1
  },

  // controlsText: [
  // эти стили должны быть видны через галп но через лайв сервер и так все норм
  // '<img src="icons/left.svg" width="31px" height="50px">',
  // '<img src="icons/right.svg" width="31px" height="50px">'

  // с лайв сервера это норм но с галпа не покатит, дома перепрорверь. заодно и в прошлом уроке тоже стили в сцсс файле
  // '<img src="icons/left.svg">',
  // '<img src="icons/right.svg">'
  // ]
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});
