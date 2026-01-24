//1 while - Checks a condition before executing code
// do...while - Executes code once, then checks the condition

//2
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

//3 The for loop is convenient when you know in advance how many times the code needs to be executed.
for (let k = 1; k <= 5; k++) {
  console.log(k);
}

//4
for (let i = 1; i <= 10; i++) {
  console.log("Hello!");
}

//5
const subscription = "premium";
let price;

switch (subscription) {
  case "free":
    price = 0;
    break;
  case "pro":
    price = 10;
    break;
  case "premium":
    price = 20;
    break;
  default:
    price = "Unknown";
}
console.log(price);

//6
prompt("Enter your name:");

//7
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
