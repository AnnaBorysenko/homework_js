// Task_1
let sum = 0;
let arr = [1, 2, 3, "a", "b", "c", "4", "5", "6"];
for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    if (number == parseInt(number)) {
        sum = +number + sum;
    }
}
;

// Task_2
let arr = [];
let n = 10;
for (let i = 0; i < n; i++) {
    arr.push(Math.random().toFixed(2));
}
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index] ** 5);
}
// Task_3
let arr = ["AngularJS", "jQuery"];
arr.unshift("Backbone.js");
arr.push("ReactJS", "Vue.js");
arr.splice(2, 0, "CommonJS");
arr.forEach(function (item, index) {
    if (item === "jQuery") {
        arr.splice(index, 1);
        console.log(`Это здесь лишнее ${item}`)
        console.log(arr);
    }
});
// Task_4
let str = "Как однажды Жак звонарь сломал фонарь головой";
let arr = str.split(" ");
let newArr = arr.splice(arr.indexOf("однажды"), 1);
arr.splice(arr.indexOf("сломал"), 0, newArr[0]);
let result = arr.join(" ");
console.log(result);
Task_5
let person = {
    name: "ann",
    age: "27",
    surname: "borysenko"
};
let property = prompt("ask");
if (property in person) {
    alert(person[property])
} else {
    let value = prompt("ask2");
    person[property] = value;
}

// Task_6
let mobile = {brand: "", model: "", resolution: "", color: ""};
for (let i = 0; i < Object.keys(mobile).length; i++) {
    mobile[Object.keys(mobile)[i]] = prompt(`${Object.keys(mobile)[i]}`);
}
person[`mobile`] = mobile;
console.log(person);
Task_7
let currentDate = new Date();
let dates = {
    dateOne: currentDate,
    dateTwo: new Date().setDate(currentDate.getDate() - 365)
};

let inputDate = Date.parse(prompt(""));
if (inputDate > dates.dateTwo && inputDate < dates.dateOne) {
    console.log("yes")
} else {
    console.log("no")
}
// Task_8
let arr = [];
let n = 7;
for (let i = 0; i < n; i++) {
    let number = +prompt("");
    arr.push(number);
}
console.log(arr);
let result = arr.reduce((sum, current) => sum + current, 0);
alert(result);
// Task_9
let arr = [];
for (let x = 1; x <= 9; x++) {
    let newArr = [];
    for (let y = 1; y <= 9; y++) {
        let res = (`${x}*${y}=${x * y}`);
        newArr.push(res)

    }
    arr.push(newArr)
}
console.log(arr);
// Task_10
let img = document.createElement('img');
img.className = "img";
img.src = "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
img.alt = "картинка";
img.style.border = "1px solid #ccc";
img.style.width = "200px";
document.body.append(img);

