//1 Array - a collection of values ​​(elements) is ordered.
const firstArray = new Array();
const secondArray = [];

//2
const testMethodArray = [1, 2];
testMethodArray.push(3); // [1, 2, 3]
testMethodArray.pop(); // [1, 2]
testMethodArray.unshift(0); // [0, 1, 2]
testMethodArray.shift(); // [1, 2]
testMethodArray.unshift(0); // [0, 1, 2]

const mapMethodArray = [1, 2, 3];
const newMapArray = mapMethodArray.map(mappedElementArray => mappedElementArray * 2);
console.log(newMapArray);
// [2, 4, 6]

const filterMethodArray = [5, 10, 2, 3, 4, 7, 8, 9, 6];
const newFilterArray = filterMethodArray.filter(filteredElementArray => filteredElementArray > 5);
console.log(newFilterArray);

const reduceMethodArray= [1, 2, 3].reduce((a, b) => a + b, 0);
console.log(reduceMethodArray);

//3 push() Adds to end, pop() removes last element

//4
const arrayTest = [1, 2, 3];

console.log(arrayTest[0]);

for (let i = 0; i < arrayTest.length; i++) {
    console.log(arrayTest[i]);
}

arrayTest.forEach(itemArray => console.log(itemArray));

//5 map() creates a new array by modifying the outer element.

//6
const peopleArray = [
  { name: 'Ilya', age: 25 },
  { name: 'Anna', age: 17 },
  { name: 'Max', age: 30 }
];

const ageIncreasedPeopleArray = peopleArray.sort((firstElement, secondElement) => firstElement.age - secondElement.age);
console.log(ageIncreasedPeopleArray);

const ageDecreasedPeopleArray = peopleArray.sort((firstElement, secondElement) => secondElement.age - firstElement.age);
console.log(ageDecreasedPeopleArray);


//7
const oldPeopleArray = peopleArray.filter(person => person.age > 18);
console.log(oldPeopleArray);

//8
const carBMWArray = [
  { brand: 'BMW', year: 2020 }
];

const carsToyotaArray = [
  { brand: 'Toyota', year: 2021 }
];

const combinedArray = [...carBMWArray, ...carsToyotaArray];

//9
const numbersArray = [1, 2, 3, 4, 5];
const sumNumbersArray = numbersArray.reduce((a, b) => a + b, 0);
console.log(sumNumbersArray);

//10
const maxNumberArray = Math.max(...numbersArray);
console.log(maxNumberArray);

//11 
const arrayTask11 = [1, 2, 3, 4, 5, -4, -5, 2]

const positiveNumbersArray = arrayTask11.filter(number => number > 0).length;
console.log(positiveNumbersArray);

//12
const fruitsArray = ['apple', 'banana', 'orange'];
fruits.includes('orange'); // true