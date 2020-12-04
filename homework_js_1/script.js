// task_1
let a = 10;
let b = a * 3;
let c = a + b;
console.log(a, b, c);
alert(`${a} ${b} ${c}`);

// task_2
let firstName = prompt("name");
let lastName = prompt("lastname");
alert(`What’s up ${firstName} ${lastName}`);

// task_3
let x = prompt("x");
let y = prompt("y");
alert(x * y);
alert(x / y);
alert(x - y);
alert(+x + +y);


// task_4
let weekInMonth = 4;
let workingHours = prompt("Working hours per day");
let workingDays = prompt("Working days per week");
let rateInHours = prompt("Rate per hour");
alert(`Salary for June: ${workingDays * weekInMonth * workingHours * rateInHours}`);


// task_5
let someNumber = prompt("Enter a number to see if it's even:");
let isEven = function (number) {
    return number % 2 === 0;
};
alert(isEven(someNumber) ? "Number is even" : "Number is not even");


// task_6
let age = prompt("Your age:");
alert(!isNaN(age) ? "thanks" : "wrong data");


// task_7
let randomNumber = Math.round(Math.random() * 100);
let secondNumber = prompt("Some number");
alert((randomNumber >= secondNumber) + `${randomNumber} ${secondNumber}`);

// task_8
let str = prompt("", "Мне нравится изучать Front-end");
let str2 = prompt("", "Азиатскую кухню");
str.includes(str2);
let str3 = str.slice(0, 20);
let result = `${str3} ${str2}`;
alert(result);