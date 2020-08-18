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

// function watch(message) {
//   return message;
// }
// console.log(watch('простое слово'));

// // let anonym = function () {
// //   console.log('we are anonymous');
// // };

// let anonym = () => console.log('they are anonymous');

// anonym();

// function getMessage() {
//   console.log('Я функция');
// }
// getMessage();

// // let car = {
// //   getMessage: function () {
// //     console.log('Я метод');
// //   },
// // };
// // car.getMessage();

// const car = {
//   color: 'red',
//   open: function () {
//     console.log('Открыто');
//   },
// };

// car.open();

// let book = {
//   color: 'green',
// };

// let array = [10, 'просто о мире', 'Пушкин', { color: 'green' }];

// console.log(array[3]);

// // for (let i = 0; i <= 1000; i++) {
// //   console.log('Iron Man, Mark - ' + i);
// // }

// let i = 10;
// i = -i;
// console.log(i);

// let drivers = ['Иван', 'Эдуард'];
// console.log(drivers[0]);
// console.log(drivers[1]);

// // Константа хранящая значение цвета
// const COLOR_TEAL = '#009688';
// console.log(COLOR_TEAL);

// // Константа хранящая сообщение о авторизации
// const MESSAGE_LOGIN_SUCCESS = 'Добро пожаловать!';
// console.log(MESSAGE_LOGIN_SUCCESS);

// // /*
// //  * Просим клиента подтвердить бронь на отель
// //  * и сохраняем в переменную результат работы confirm
// //  */
// // const isComing = confirm('Please confirm hotel reservation');
// // console.log(isComing);

// // const hotelName = prompt('Please enter desired hotel name:');
// // console.log(hotelName);

// // const value = prompt('Please enter a number!');
// // console.log(typeof value); // 'string'
// // console.log(value); // '5'

// console.log(Number.parseInt('5px'));
// console.log(Number.parseInt('12qwe74'));
// console.log(Number.parseInt('12.46qwe79'));
// console.log(Number.parseFloat('12.46qwe79'));
// console.log(Number.parseInt('qweqwe'));

// const validNumber = Number(51); // 51
// console.log(Number.isNaN(validNumber)); // false

// const invalidNumber = Number('qweqwe'); // NaN
// console.log(Number.isNaN(invalidNumber)); // true
// console.log(Math.min(20, 10, 50, 40));

// console.log(Math.random() * (100 - 1) + 1);

// // const message = 'Mango ' + 'is' + ' happy';
// // console.log(message); // Mango is happy

// const message = 'Welcome to Bahamas!';

// console.log(message.length); // 19
// console.log('There is nothing impossible to him who will try'.length); // 47

// console.log(message.toLowerCase()); // welcome to bahamas!
// console.log(message.toUpperCase()); // WELCOME TO BAHAMAS!

// console.log(message.indexOf('to')); // 8
// console.log(message.indexOf('hello')); // -1
// // Все методы строк чувствительны к регистру
// console.log(message.includes('welcome')); // false
// console.log(message.includes('Welcome')); // true

// let cost;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

// const age = 20;
// const type = age >= 18 ? 'adult' : 'child';
// console.log(type);

// // const max = 10;

// // for (let i = 0; i < max; i += 1) {
// //   console.log(i);
// // }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i < 10; i += 1) {
//   if (i === 5) {
//     console.log('Дошли до 5-й итерации, прерываем цикл!');
//     break;
//   }
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

// const arr = [];

// const clients = ['Mango', 'Poly', 'Ajax'];
// console.log(clients);
// console.log(clients[2]);
// console.log(clients[1]);
// console.log(clients[0]);
// clients[1] = 'Kiwi';
// console.log(clients);
// clients[3] = 'Alex';
// console.log(clients[3]); // Alex

// console.log(clients); // ["Kiwi", "Poly", "Ajax", "Alex"]
// console.log(clients.length);

// clients.length = 2;
// console.log(clients);

// const clients = ['Mango', 'Ajax', 'Poly'];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }
// const numbers = [];

// for (let i = 0; i < 3; i += 1) {
//   numbers.push(`label-${i}`);
// }

// console.log('numbers: ', numbers);

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }
// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const clients = ['Mango', 'Ed', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }
//   message = 'Клиента с таким именем нету в базе данных!';
// }
// console.log(message);

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message = 'Клиента с таким именем нету в базе данных!';

// for (const client of clients) {
//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   // Если не совпадает, то на этой итерации ничего не делаем
// }

// console.log(message);

// const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
// const threshold = 15;

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] < threshold) {
//     continue;
//   }

//   console.log(`Число больше чем ${threshold}: ${numbers[i]}`); // 18, 29, 34
// }

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][0]); // 1
// console.log(matrix[1][2]); // 6
// console.log(matrix[2][2]); // 9

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let total = 0;

// for (let i = 0; i < matrix.length; i += 1) {
//   console.log('Подмассив матрицы matrix[i]: ', matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log('Элемент подмассива матрицы matrix[i][j]: ', matrix[i][j]);
//     total += matrix[i][j];
//   }
// }

// console.log(total);
// let a = 5;
// // Присвоение по значению, в памяти будет создана еще
// // одна ячейка в которую будет скопировано значение 5
// let b = a;
// console.log(a); // 5
// console.log(b); // 5

// // Изменим значение a
// a = 10;
// console.log(a); // 10
// // Значение b не изменилось так как это отдельная копия
// console.log(b); // 5

// const message = 'Welcome to Bahamas!';

// // Разбивает строку по разделителю, в данном случае это пробел
// console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]
// console.log(message.split(''));

// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax"
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"

// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//   console.log('It is a red fruit!');
// }

//Распыление
// const number = [456, ...[1, 2, 3], ...[4, 5, 6], ...[10]];
// console.log(number);

// const temps = [2, 6, 89, 33, 4, 12, 77, 0, 67];
// console.log(Math.max(2, 6, 89, 33, 4, 12, 77, 0, 67));
// console.log(Math.min(...temps));

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log('a: ', a);
// console.log('b: ', b);
// console.log(a[0] === b[0]);
// console.log(a === b);

// a[2].z = 222;

// console.log('a: ', a);
// console.log('b: ', b);

// const qwe = [1, 2, 3];
// const rty = [4, 5, 6];
// const uio = [7, 8, 9];

// const all = [...uio, ...qwe, ...'hello', ...rty, ...uio];
// console.log(all);

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i);
  }
};

const labels = [];

repeat(5, value => {
  labels.push(`Label ${value + 1}`);
});
console.log(labels);

const filter = function (array, test) {
  const filteredElements = [];

  for (const element of array) {
    const passed = test(element);

    if (passed) {
      filteredElements.push(element);
    }
  }

  return filteredElements;
};
const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];
// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity);

// const bar = function () {
//   console.log('bar');
// };
// const baz = function () {
//   console.log('baz');
// };

// const foo = function () {
//   console.log('foo');
//   bar();
//   baz();
// };
// foo();

const x = 10;
const y = 20;
const foo = function (z) {
  const x = 100;
  return x + y + z;
};
console.log(foo(30));
//foo(30); // 150
//Корзина интернет магазина

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    this.items.push(product);
  },
  remove(productName) {
    const { items } = this;
    for (let i = 0; i < items.length; i += 1) {
      const { name } = items[i];
      console.log(this.items[i]);

      if (productName === name) {
        console.log('нашли этот продукт ', productName);
        items.splice(i, 1);
      }
    }
  },

  clear() {},
  countTotalPrice() {},
  increaseQuantity(productName) {},
  decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table(cart.getItems());

cart.remove('🍋');
console.table(cart.getItems());

const user = {
  tag: 'Mango',
  showTag() {
    console.log('showTag -> this', this);
    console.log('showTag -> this.tag', this.tag);
  },
};

const invokeAction = function (action) {
  console.log(action);

  action();
};

invokeAction(user.showTag);

const baseSalary = 30000;
const overtime = 10;
const rate = 20;

const getWage = (baseSalary, overtime, rate) => {
  return baseSalary + overtime * rate;
};

console.log(getWage(baseSalary, overtime, rate));

const employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage() {
    return this.baseSalary + this.overtime * this.rate;
  },
};

console.log(employee.getWage());

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// // В результате вызова
// const hotel = new Hotel('Resort Hotel', 5, 100);
// // Получаем такой объект
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
// };

// const hotel = new Hotel('Resort Hotel', 5, 100);
// console.log(hotel);
// // Hotel {name: "Resort Hotel", stars: 5, capacity: 100}

// const motel = new Hotel('Sunlight Motel', 4, 300);
// console.log(motel);
// Hotel {name: "Sunlight Motel", stars: 4, capacity: 300}

// const Hotel = function (name, stars, capacity) {
//   this.name = name;
//   this.stars = stars;
//   this.capacity = capacity;
//   this.guestCount = 0;

//   this.greet = function (guestName) {
//     console.log(`Hello ${guestName}, wellcome to ${this.name}`);
//   };

//   this.addGuests = function (amount) {
//     this.guestCount += amount;
//   };

//   this.removeGuests = function (amount) {
//     this.guestCount -= amount;
//   };
// };

// const hotel = new Hotel('Sunrise Hotel', 5, 100);

// console.log(hotel);
// // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
// hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
// hotel.addGuests(50);
// hotel.removeGuests(50);

// const mango = {
//   name: 'Mango',
//   sales: 5,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(mango.sales); // 5
// console.log(mango.sell('TV')); // Manager Mango sold TV
// console.log(mango.sell('Microwave')); // Manager Mango sold Microwave
// console.log(mango.sales); // 7

// const poly = {
//   name: 'Poly',
//   sales: 10,
//   sell(product) {
//     this.sales += 1;
//     return `Manager ${this.name} sold ${product}.`;
//   },
// };

// console.log(poly.sales); // 10
// console.log(poly.sell('TV')); // Manager Poly sold TV
// console.log(poly.sell('Microwave')); // Manager Poly sold Microwave
// console.log(poly.sales); // 12

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// };

// Account.prototype.getInfo = function () {
//   return `login : ${this.login}, email: ${this.email}`;
// };

// console.log(typeof Account.prototype.getInfo);
// // 'function'

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// console.log(mango.getInfo());
// // 'login : Mangozedog, email: mango@dog.woof'

// const poly = new Account('Poly', 'poly@mail.com');
// console.log(poly.getInfo());
// // 'login : Poly, email: poly@mail.com'

const User = function (name, age, followers) {
  this.name = name;
  this.age = age;
  this.followers = followers;

  User.prototype.getInfo = function () {
    return `User ${name} is ${age} years old and has ${followers} followers`;
  };
};

console.log(typeof User);
// 'function'

const mango = new User('Mango', 2, 20);
console.log(mango.getInfo());
// 'User Mango is 2 years old and has 20 followers'

console.log(typeof mango.getInfo);
// 'function'

const poly = new User('Poly', 3, 17);
console.log(poly.getInfo());
// 'User Poly is 3 years old and has 17 followers'
