// Task_1
const calculator = {
    "read": function () {
        this.x = prompt("x");
        this.y = prompt("y");
    },
    "sum": function () {
        return +this.x + +this.y;
    },
    "multi": function () {
        return this.x * this.y;
    },
    "diff": function () {
        return this.x - this.y;
    },
    "div": function () {
        return this.x / this.y;
    },
};
calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());
// Task_2
// let coffeeMachine;
// coffeeMachine = {
//     message: "Your coffee is ready!",
//
//     start: function () {
//       let timer = setTimeout("alert(coffeeMachine.message)", 3000);
//       return timer;
//     }
// };
// coffeeMachine.start();
// Task_2
let coffeeMachine = {
    message: "Your coffee is ready!",
    start: function(){
        setTimeout(function(){
            alert(coffeeMachine.message);
        }, 3000);
    }
}
coffeeMachine.start()

// Task_3
function calcFunc(param1 = 0, param2 = 1){
    return function (){
       let start = param1;
        return param1 + param2;
    }
}
let generator = calcFunc(1,2);
console.log(generator());
let str = "123456";
function re (str){
    return str.split('').reverse().join('');

}
re(str);
let obj = {
    names: [],
    addName(name) {
        this.names.push(name);
        return this;
    },
    getNames(){
        console.log(this.names.join(", "));
    }
}
obj.addName("Ann").addName("Anna").getNames();
let arr = [1,2,3,4];
function getArrEl (arr){
    alert(arr[0]);
    arr.shift();

    if(arr.length){
        getArrEl(arr);
    }
}
// Task_3
let counter = {
    "start": 0,
    "inc": function () {
        this.start++;
        return this;
    },
    "dec": function () {
        this.start--;
        return this;
    },
    "getValue": function () {
        return this.start;
    }
};
let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1
// Task_4
let me = {
    x: null,
    y: null,
    getSum: function (var1, var2) {
        this.x = var1;
        this.y = var2;
        let res = calculator.sum.bind(this, this.x, this.y);
        return `${this.x} + ${this.y} = ${res(this.x, this.y)}`;
    },
    getDiv: function (var1, var2) {
        this.x = var1;
        this.y = var2;
        let res2 = calculator.div.bind(this, this.x, this.y);
        return `${this.x} / ${this.y} = ${res2(this.x, this.y)}`;
    },
    getMulti: function (var1, var2) {
        this.x = var1;
        this.y = var2;
        let res3 = calculator.multi.bind(this, this.x, this.y);
        return `${this.x} * ${this.y} = ${res3(this.x, this.y)}`;
    },
    getDiff: function (var1, var2) {
        this.x = var1;
        this.y = var2;
        let res4 = calculator.diff.bind(this, this.x, this.y);
        return `${this.x} - ${this.y} = ${res4(this.x, this.y)}`;
    },
};
alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));
alert(me.getMulti(1, 1));
alert(me.getDiff(0, 1));
// Task_5
let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);

}

format.call(country, " ", " ", country[0],); // Ukraine
format.apply(country, ["[", "]"], country[0],); // [Ukraine]
format.call(country.capital, " ", " ", country.capital[0],); // Kyiv
format.apply(country.capital, [" ", " "], country.capital[0]); // Kyiv
format.apply(country.language[3], ["", ""]); // undefined
// Task_6
let user = {
    name: "John"
};
function format(start, end) {
    console.log(start + this.name + end);
}
userFormat = format.bind(user)

userFormat('<<<', '>>>'); // <<<John>>>
// Task_7
 function concat(param1,param2) {
        console.log(param1 + param2);
 }
let hello = concat.bind(null, "Hello, ")
hello('World'); // Hello World
hello('John'); // Hello John
// Task_8
// Task_8_1

function cube(base) {
    let res = base;
    for(let i = 0; i < 2; i++){
      res = res * base;
    }
    return res;
}
console.log( cube(2) ); // 8
// Task_8_2
function createPowWithLimit(limit){
    let depth = limit;
    return function pow(x) {
        return (depth === 1) ? x : x * pow(x, --depth);

    }
}
let pow = createPowWithLimit(3);
console.log(pow(2));
// Task_9
function sumDigits(...val) {
    if (val.length == 1) {
        return val[0];
    }
    return +val.splice(0, 1) + +sumDigits(...val);

}

console.log(sumDigits(1, 2, 3, 4, 5)); // 15
