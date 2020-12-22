// Task_1
function max(var1, var2) {
return var1 > var2 ? var1 : var2;
}
console.log(max(1, -2));
// Task_2
function min(...args) {
    let buffer;
    args.forEach(function (item, index) {
        if (index === 0) {
            buffer = item
        }
        if (index !== 0) {
            if (item < buffer) {
                buffer = item;
            }
        }
    });
    return buffer;
}
console.log(min(1, 2, -3, 9, 6000, 0));
// Task_3
let users = [
    {firstName: "Ann", lastName: "Borysenko", age: 27},
    {firstName: "Kate", lastName: "Brown", age: 21},
    {firstName: "Max", lastName: "Jones", age: 12},
    {firstName: "Denis", lastName: "Williams", age: 5},
    {firstName: "Masha", lastName: "Johnson", age: 34},
    {firstName: "Vika", lastName: "Cooper", age: 54},
    {firstName: "Pete", lastName: "Edwards", age: 17},
    {firstName: "Olya", lastName: "Morgan", age: 21},
    {firstName: "Anya", lastName: "Baker", age: 25},
    {firstName: "Vlad", lastName: "Phillips", age: 45},
];
let filter = users.filter(item => item.age > 18);
users.forEach((item) => item.fullName = item.firstName+ " " + item.lastName);
let newUsers = users.map((item) => item.fullName);
console.log(filter,users,newUsers);
//  Task_4
let arr = ["Ann","Borysenko", 27];
function funcShift(){
    let newArr = [];
    for (let i = 1; i < arr.length; i++ ){
        newArr[i-1] = arr[i]
    }
    arr = newArr;
    return arr;
}
console.log(funcShift());
//  Task_5
let arr = [1, 2, 27];
function funcPush(...array){
    arr = [...arr, ...array];
    return arr.length;
}
console.log(funcPush(345, "1234","anna"));
console.log(arr);
//  Task_6
let obj = {firstname: "Tom", age: 10};
let obj2 = {firstname: 'John'};
let obj3 = {lastname: 'Doe'};
function funcAssign(target, ...objects) {
    objects.forEach(function (item) {
        for (let i = 0; i < Object.keys(item).length; i++) {
            let property = Object.keys(item)[i];
            console.log(property);
            target[property] = item[property];
        }
    })
}
funcAssign(obj,obj2,obj3);
console.log(obj);
//  Task_7
function setComment(date, message, author) {
    if (date === null || date === undefined || message === null || message === undefined) {
        alert("Не верные данные");
        return;
    }
    if (author === null || author === undefined) {
        author = "Anonymous";
    }
    alert(`${author}  ${date}\n ${message}`)
}

setComment("2016-11-02", "Everything is ok", "John");
setComment("2016-11-02", "You could do it better!");
setComment("2016-11-02");
//  Task_8
function createTimer(){
    let start = performance.now()
    return function(){
        return performance.now() - start;
    }
}
let timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()
//  Task_9
function createAdder(param) {
    let value = param;
    return function (param2) {
        return value + param2;
    }
}
let hello = createAdder('Hello, ');
alert(hello('John')); // Hello, John
alert(hello('Harry')); // Hello, Harry

let plus = createAdder(5);
alert(plus(1)); // 6
alert(plus(5)); // 10