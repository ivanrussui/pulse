// возможно придется выкл так как на моб версии хз как, перепроверь!
let btn = document.querySelectorAll('.button')[0],
  btn2 = document.querySelectorAll('.button')[1],
  btn3 = document.querySelectorAll('.button')[2];
// btn4 = document.querySelector('.button_mini'),
// btn5 = document.querySelector('.catalog-item__link');
// let btn = document.getElementsByTagName('button')[0];

// console.log(btn5);

// btn5.addEventListener('mouseenter', function() {
// 	btn5.style.color = 'red';
// });

// btn5.addEventListener('mouseleave', function() {
// 	btn5.style.color = '#c70101';
// });

// btn4.addEventListener('mouseenter', function () {
// 	btn4.style.fontSize = '16px';
// });

// btn4.addEventListener('mouseleave', function () {
// 	btn4.style.fontSize = '12px';
// });

btn.addEventListener('mouseenter', function () {
  btn.textContent = 'Кликнуть';
  btn.style.fontSize = '14px';
});

btn.addEventListener('mouseleave', function () {
  btn.textContent = 'Заказать звонок';
  btn.style.fontSize = '12px';
});

btn2.addEventListener('mouseenter', function () {
  btn2.textContent = 'Мы вам перезвоним';
  btn2.style.fontSize = '18px';
});

btn2.addEventListener('mouseleave', function () {
  btn2.textContent = 'Заказать консультацию';
  btn2.style.fontSize = '16px';
});

btn3.addEventListener('mouseenter', function () {
  btn3.textContent = 'Мы вам перезвоним';
  btn3.style.fontSize = '18px';
});

btn3.addEventListener('mouseleave', function () {
  btn3.textContent = 'Заказать консультацию';
  btn3.style.fontSize = '16px';
});

// for (let i = 0; i < ('button')[3]) {
// 	console.log('rhenj');
// }
