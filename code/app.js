// alert('Приветик Юличка!');
// let a = 2;
// let b = 4;

// let a = (b = c = 15);

// console.log(a + b + c);

// let a = 2;
// let b = 4;
// let c = 10;

// console.log(a);
// console.log(b);
// b = c;
// console.log(a + b);

// let a = -1.0e1000;

// console.log(a / 'asd');
// console.log(typeof a);

// let b = 10;
// let a = 'Он сказал ' + b + ' раз Привет';

// let a = Symbol();

// console.log(a);
// console.log(typeof a);
// let pin = 1;
// pin = 2;

// console.log(pin);

// let car = {
//   color: 'red',
//     maxSpeed: 250,
//     audio: {
//       brand: 'Sony',
//       speakers: 12,
//     },
// };

// car.color = 'red';

// console.log(typeof car.audio);
// console.log(car.audio);

// if (car.color == 'red') {
//   console.log('Автомобиль красный');
// } else if (car.color == 'green') {
//   console.log('Автомобиль зеленый');
// } else {
//   console.log('Цвет не определен');
// }

// let color = car.color != 'red' ? ' Красный' : 'Зеленый';
// console.log(color);

// console.log(car.color);
// car.color = 'green';
// console.log(car.color);

// function colorReset() {
//   car.color = 'red';
//   console.log(car.color);
// }
// colorReset();

// let car = {
//   color: 'red',
// };
// let car2 = {
//   color: 'green',
// };

// colorChange(car2);

// function colorChange(theCar) {
//   theCar.color = 'yellow';
// }
// console.log('Car: ' + car.color);
// console.log('Car2: ' + car2.color);

// let car = {
//   maxSpeed: 280,
//   update: speedChange,
// };

// car.update();

// function speedChange() {
//   console.log(car.maxSpeed);
// }

function watch(message) {
  return message;
}
console.log(watch('простое слово'));

// let anonym = function () {
//   console.log('we are anonymous');
// };

let anonym = () => console.log('they are anonymous');

anonym();

function getMessage() {
  console.log('Я функция');
}
getMessage();

// let car = {
//   getMessage: function () {
//     console.log('Я метод');
//   },
// };
// car.getMessage();

const car = {
  color: 'red',
  open: function () {
    console.log('Открыто');
  },
};

car.open();

let book = {
  color: 'green',
};

let array = [10, 'просто о мире', 'Пушкин', { color: 'green' }];

console.log(array[3]);

// for (let i = 0; i <= 1000; i++) {
//   console.log('Iron Man, Mark - ' + i);
// }

let i = 10;
i = -i;
console.log(i);

let drivers = ['Иван', 'Эдуард'];
console.log(drivers[0]);
console.log(drivers[1]);

// Константа хранящая значение цвета
const COLOR_TEAL = '#009688';
console.log(COLOR_TEAL);

// Константа хранящая сообщение о авторизации
const MESSAGE_LOGIN_SUCCESS = 'Добро пожаловать!';
console.log(MESSAGE_LOGIN_SUCCESS);

// /*
//  * Просим клиента подтвердить бронь на отель
//  * и сохраняем в переменную результат работы confirm
//  */
// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);

// const value = prompt('Please enter a number!');
// console.log(typeof value); // 'string'
// console.log(value); // '5'

console.log(Number.parseInt('5px'));
console.log(Number.parseInt('12qwe74'));
console.log(Number.parseInt('12.46qwe79'));
console.log(Number.parseFloat('12.46qwe79'));
console.log(Number.parseInt('qweqwe'));

const validNumber = Number(51); // 51
console.log(Number.isNaN(validNumber)); // false

const invalidNumber = Number('qweqwe'); // NaN
console.log(Number.isNaN(invalidNumber)); // true
console.log(Math.min(20, 10, 50, 40));

console.log(Math.random() * (100 - 1) + 1);

// const message = 'Mango ' + 'is' + ' happy';
// console.log(message); // Mango is happy

const message = 'Welcome to Bahamas!';

console.log(message.length); // 19
console.log('There is nothing impossible to him who will try'.length); // 47

console.log(message.toLowerCase()); // welcome to bahamas!
console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

console.log(message.indexOf('to')); // 8
console.log(message.indexOf('hello')); // -1
// Все методы строк чувствительны к регистру
console.log(message.includes('welcome')); // false
console.log(message.includes('Welcome')); // true

let cost;
const subscription = 'free';

if (subscription === 'pro') {
  cost = 100;
} else {
  cost = 0;
}

console.log(cost); // 0

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

for (let i = 0; i < 10; i += 1) {
  if (i === 5) {
    console.log('Дошли до 5-й итерации, прерываем цикл!');
    break;
  }
}

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}
