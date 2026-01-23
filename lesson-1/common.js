// 1. Inline in html tags, <script>console.log('test')</script>, <script src="common.js"></script>

// 2. Number 
const num = 10;

//3.
const myPhone = "Iphone 11";

//4.
const test = undefined;
console.log(test);

//5
const nullTest =  null;
console.log(typeof nullTest); // object

//6. true/false

//7. Camel Case, in English

//8. 
const firstName = 'Ilya';
//alert(firstName);

//9. 
const myFavoriteFilm = 'Limitless'
console.log(`My favorite film is ${myFavoriteFilm}. What about your favorite film?`);

//10 
const isDeveloper = true;

//11 alert();, prompt(), confirm()

//12
//prompt("What kind of dog do you have?");

//13 
const width = 5,
    height = 10;

const area = width * height;
console.log(area);

//14
const first = "Hello",
    second = "World";

console.log(first + " " + second);

//15 
//const a = Number(prompt("Введи перше число"));
//const b = Number(prompt("Введи друге число"));

//const sum = a + b;
//alert(sum);

const userData = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
};

console.log(userData.name);

userData.name = 'Doe';

console.log(userData.name);
 // Error: Assignment to constant variable.