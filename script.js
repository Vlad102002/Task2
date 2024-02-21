let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let btn4 = document.querySelector('.btn4');
let btn5 = document.querySelector('.btn5');
let secBack = document.querySelector('section');

btn1.onclick = function () {
  secBack.style.backgroundColor = 'red';
};

btn2.onclick = function () {
  secBack.style.backgroundColor = 'blue';
};

btn3.onclick = function () {
  secBack.style.backgroundColor = 'green';
};

btn4.onclick = function () {
  secBack.style.backgroundColor = 'orange';
};

btn5.onclick = function () {
  secBack.style.backgroundColor = 'black';
};
