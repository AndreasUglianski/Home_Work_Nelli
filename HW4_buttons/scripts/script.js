// 1.) Cоздать кнопку с размерами 30 на 30 пикселей, при каждом нажатии увеличивать ее на 10 пикселей.

const incr_btn = document.querySelector('.incr_btn');
let size = 30;
incr_btn.addEventListener('click', () => {
	size += 10;
	incr_btn.style.width = size + 'px';
	incr_btn.style.height = size + 'px';
});

// 2.) Cоздать кнопку, у которой при клике рандомно меняется цвет заднего фона

// const change_color_btn = document.querySelector('.change_color_btn');
// const colors = ['lightblue', 'darkgreen', 'red', 'blueviole', 'burlywood'];
// let color_index = 0;

// change_color_btn.addEventListener('click', () => {
// 	let newColour = colors[Math.floor(Math.random() * colors.length)];
// 	document.body.style.backgroundColor = colors[0];
// 	colors.push(...colors.splice(0, 1));
// });

const change_color_btn = document.querySelector('.change_color_btn');
function randomColor() {
	return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
change_color_btn.addEventListener('click', () => {
	document.change_color_btn.style.backgroundColor = randomColor();
});
// 3.) Создать генератор бросаемых костей (рандомно вычисляется два числа от 1 до 6 и выводятся в интерфейс).

window.addEventListener('DOMContentLoaded', function () {
	const buttonRoolDice = document.querySelector('.dice-roll');

	function rollDice() {
		const diceSide1 = document.getElementById('dice-side-1');
		const diceSide2 = document.getElementById('dice-side-2');

		const side1 = Math.floor(Math.random() * 6) + 1;
		const side2 = Math.floor(Math.random() * 6) + 1;
		const diceTotal = side1 + side2;

		diceSide1.innerHTML = side1;
		diceSide2.innerHTML = side2;
	}

	buttonRoolDice.addEventListener('click', rollDice);
});

// 4.) Создать слайдер фотографий (при клике на фото оно должно меняться на одно из массива).
const slider = document.querySelector('.slider');
const photo = document.querySelector('.photo');
const photos = [
	'http://zhivotnue.ru/image/soxranenie_zhivotnux/soxranenie_barsuka/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/nufaydlend/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/kyrixaar/1.jpg',
	'http://zhivotnue.ru/image/dicie_zhivotnue/loshadi/xeke/1.jpg',
	'http://zhivotnue.ru/image/domashnie_zhivotnue/sobaki/bobbteil/1.jpg',
];
let photo_index = 0;

function nextPic() {
	photo_index += 1;
	if (photo_index > photos.length - 1) {
		photo_index = 0;
	}
	photo.style.backgroundImage = 'url(' + photos[photo_index] + ')';
}

photo.addEventListener('click', nextPic);
photo_index -= 1;
nextPic();

/////////////////
let num9 = Math.pow(2, 3); // 8

let num10 = Math.random(); // случайное дробное число (от 0 до 1)
let num11 = num10 * 10; //умножаем на 10
let num12 = Math.round(num11); //округляем до целого числа

let random_num = Math.round(Math.random() * 10); //от 0 до 10
let random_num1 = Math.floor(Math.random() * 11); //от 0 до 10

let random_num2 = Math.floor(Math.random() * 5); //от 0 до 5
let random_num3 = Math.floor(Math.random() * 5 + 1); //от 1 до 6 сдвигаем интервал на 1

console.log(random_num);
console.log(random_num1);
