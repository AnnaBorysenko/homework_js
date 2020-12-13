// Условные и логические операторы:
//task_1
let x = prompt("Введите любое число:");
if (x > 0) {
    alert("положительное");
}
if (x < 0) {
    alert("отрицательное число");
}
if (x == 0) {
    alert("ноль");
}
//task_2
let yourMoney = prompt("Впиши остаток твоих денег:");
let notYourMoney = prompt("Впиши остаток денег твоего друга:");
if (yourMoney + notYourMoney >= 1000) {
    alert("Вы летите на Майорку!");
} else {
    alert("Вы пьете вино.");
}
//task_3
let age = prompt("Впишите ваш возраст:");
if (age >= 20 && age < 27) {
    alert("Выслать повестку");
}
//task_4
let numberBus = prompt("Введите номер маршкрутки:");
if (numberBus == 7 || numberBus == 225 || numberBus == 255) {
    alert("Вы едете домой");
} else {
    alert("Oжидайте");
}
//task_5
let day = prompt("What day of the week is today:");
let dayToLowerCase = day.toLowerCase();
if (dayToLowerCase !== "saturday" && dayToLowerCase !== "sunday") {
    alert("You need go to work");
}
//task_6
let text = "Введите любое число от -20 до 20";
let x = prompt(text);
let y = prompt(text);
if (x <= 1 && y >= 3 || y < 0) {
    alert(+x + +y);
} else {
    alert("Неверно!");
}
//task_7
let x = 6; // 3 - 10
let y = 8; // 6 - 13
if (x > 2 && x < 11 || y >= 6 && y < 14) {
    x = x * 2;
} else {
    x = x + 5;
}
alert(x);
//task_8
let name = prompt("Your name");
if (name == "" || name == null) {
    alert("Hello friend");
} else {
    alert(`Hello  ${name}`);
}
//task_9_1
let greeting = "";
let lang = prompt("Choose language");
switch (lang) {
    case "ru":
        greeting = "Привет";
        break;
    case "en":
        greeting = "Hello";
        break;
    case "de":
        greeting = "Hallo";
        break;
    default:
        greeting = "wrong language selected";
}
alert(greeting);
//task_9_2
let greeting = "";
let lang = prompt("Choose language");
if (lang == "ru") {
    greeting = "Привет";
} else if (lang == "en") {
    greeting = "Hello";
} else if (lang == "de") {
    greeting = "Hallo";
} else {
    greeting = "wrong language selected";
}
alert(greeting);
//task_10
let season = "";
let month = new Date().getMonth() + 1;
console.log(month)
switch (month) {
    case 12 || 1 || 2:
        season = "Winter";
        break;
    case 3 || 4 || 5:
        season = "Spring";
        break;
    case 6 || 7 || 8:
        season = "summer";
        break;
    case 9 || 10 || 11:
        season = "autumn";
        break;
}
alert(season);
//task_11
let lang = prompt("Choose language: ru or en");
let day = prompt("Choose number from 0 to 6");
let result = "";
if (lang == "ru" && day == 0) {
    result = "Воскресенье";
} else if (lang == "ru" && day == 1) {
    result = "Понедельник";
} else if (lang == "ru" && day == 2) {
    result = "Вторник";
} else if (lang == "ru" && day == 3) {
    result = "Среда";
} else if (lang == "ru" && day == 4) {
    result = "Четверг";
} else if (lang == "ru" && day == 5) {
    result = "Пятница";
} else if (lang == "ru" && day == 6) {
    result = "Суббота";
} else if (lang == "en" && day == 0) {
    result = "Sunday";
} else if (lang == "en" && day == 1) {
    result = "Monday";
} else if (lang == "en" && day == 2) {
    result = "Tuesday";
} else if (lang == "en" && day == 3) {
    result = "Wednesday";
} else if (lang == "en" && day == 4) {
    result = "Thursday";
} else if (lang == "en" && day == 5) {
    result = "Friday";
} else if (lang == "en" && day == 6) {
    result = "Saturday";
} else {
    result = "You entered incorrect data";
}
alert(result);
//task_12_1
let userName = prompt("Your name:");
let userAge = prompt("Your age:");
let result = "";
switch (true) {
    case userName == "John" && userAge == "29":
        result = `Hello ${userName} ${userAge}`;
        break;
    case userName == "Kate" && userAge == "15":
        result = `Hello ${userName} ${userAge}`;
        break;
    default:
        result = "Goodbye";
}
alert(result);

//task_12_2
let userName = prompt("Your name:");
let userAge = +prompt("Your age:");
let result = (userName === "John" && userAge === 29) || (userName === "Kate" && userAge === 15) ? `Hello ${userName} ${userAge}` : "Goodbye";
alert(result)
//task_13
let str = "";
for (x = 0; x < 5; x++) {
    str = str + ".#";
}
console.log(str);
alert(str);
//task_14
for (let x = 1; x <= 10; x++) {
    if (x % 2 == 0) {
        console.log(x ** 2);
        alert(x ** 2);
    }
}
//task_15
let userName = prompt("Your name");
let str = "";
for (let x = 0; x < 4; x++) {
    if (x === 2) {
        str = str + `Happy birthday dear ${userName}\n`
    } else {
        str = str + "Happy birthday to you\n"
    }
}
alert(str);
//task_16
let answer = null;
do {
    answer = confirm("test");
} while (answer === false);
//task_17
let n = 0;
let anyNumber = prompt("Any number:");
for (let x = 0; x < anyNumber; x++) {
    if (x % 2 !== 0) {
        n = n + x;
    }
}
alert(n);
//task_18
let number;
let x = 0;
while (true) {
    x++;
    number = Math.random();
    if (number > 0.9) {
        break;
    }
}
alert(`${number} ${x}`);
//task_19
for (let x = 1; x <= 9; x++) {
    for (let y = 1; y <= 9; y++) {
        console.log(`${x}*${y}=${x * y}`);
    }
}
//task_20
//Функция взята из инета
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

let str = '';
let limit = prompt('Limit:', '');
for (let i = 0; i < limit; str += `${fib(i++)} `) {
}
console.log(str);
alert(str);
//task_21
let sum = 0;
let index;
for (index = 0; ; index++) {
    let someNumber = prompt("some number", "");
    sum = +sum + +someNumber;
    if (someNumber == null) {
        break;
    }

}
alert(`${index} ${sum} ${sum / index}`);
//task_22
let password = 12345;
let cancel = "";
let yourPassword;
let yes = "да"
for (let index = 0; ; index++) {
    yourPassword = prompt("ваш пароль:", "");

    if (yourPassword == null) {
        cancel = prompt("Вы уверены, что хотите отменить авторизацию?");
        if (cancel == yes) {
            alert("Вы отменили авторизацию");
            break;
        }
    }

    if (yourPassword == password) {
        alert("Вы успешно авторизованы");
        break;
    }

}
// task_23
for (let i = 1; i < 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i < 50) {
        console.log(i)
    }
}


