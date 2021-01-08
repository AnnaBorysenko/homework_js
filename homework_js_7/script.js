const figureTypes = {
    circle: 'circle',
    line: 'line',
    rect: 'rect',
    zigzag: 'zigzag'
}

function Figure(x, y, color) {
    this.__x = x || 0;
    this.__y = y || 0;
    this.__color = color || 'black';
}

Figure.prototype.draw = function ([type, ctx]) {
    const {circle, line, rect, zigzag} = figureTypes;
    const {__x, __y, __color} = this;

    if (!ctx) return
    switch (type) {
        case circle:
            ctx.beginPath();
            ctx.arc(__x, __y, this.__radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fillStyle = __color;
            ctx.fill();
            break;
        case line:
            ctx.lineWidth = 2;
            ctx.strokeStyle = __color;
            ctx.beginPath();
            ctx.moveTo(__x, __y);
            ctx.lineTo(this.__x2, this.__y2);
            ctx.stroke();
            break;
        case rect:
            ctx.fillStyle = __color;
            ctx.fillRect(__x, __y, this.__x2, this.__y2);
            break;
        case zigzag:
            ctx.lineWidth = 2;
            ctx.strokeStyle = __color;
            ctx.beginPath();
            ctx.moveTo(__x, __y);
            for (let n = 0; n < 55; n++) {
                let x = __x + ((n + 1) * this.__x2);
                let y;
                if (n % 2 == 0) {
                    y = __y + 20;
                } else {
                    y = __y;
                }
                ctx.lineTo(x, y);
            }
            ctx.stroke();

    }

}

function Circle(x, y, radius, color) {
    this.__radius = radius;
    Figure.call(this, x, y, color); // Выполняем конструктор "у себя"
}

function Line(x, y, x2, y2, color, lineWidth = 2) {
    this.__x2 = x2;
    this.__y2 = y2;
    this.__lineWidth = lineWidth;
    Figure.call(this, x, y, color); // Выполняем конструктор "у себя"
}

function Rect(x, y, x2, y2, color) {
    this.__x2 = x2;
    this.__y2 = y2;
    Figure.call(this, x, y, color);
}

function Zigzag(x, y, x2, color) {
    this.__x2 = x2;
    Figure.call(this, x, y, color);
}

Circle.prototype = Object.create(Figure.prototype); // Наследуем методы из прототипа родителя
Circle.prototype.constructor = Circle; // Возвращаем себе свой конструктор
Circle.prototype.draw = function (ctx) {
    Figure.prototype.draw.call(this, [figureTypes.circle, ctx]); // Выполняем метод из прототипа родителя в своем контексте
}


Line.prototype = Object.create(Figure.prototype); // Наследуем методы из прототипа родителя
Line.prototype.constructor = Line; // Возвращаем себе свой конструктор
Line.prototype.draw = function (ctx) {
    Figure.prototype.draw.call(this, [figureTypes.line, ctx]); // Выполняем метод из прототипа родителя в своем контексте
}

Rect.prototype = Object.create(Figure.prototype); // Наследуем методы из прототипа родителя
Rect.prototype.constructor = Rect; // Возвращаем себе свой конструктор
Rect.prototype.draw = function (ctx) {
    Figure.prototype.draw.call(this, [figureTypes.rect, ctx]); // Выполняем метод из прототипа родителя в своем контексте
}

Zigzag.prototype = Object.create(Figure.prototype); // Наследуем методы из прототипа родителя
Zigzag.prototype.constructor = Zigzag; // Возвращаем себе свой конструктор
Zigzag.prototype.draw = function (ctx) {
    Figure.prototype.draw.call(this, [figureTypes.zigzag, ctx]); // Выполняем метод из прототипа родителя в своем контексте
}


class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
    }

    add(...figures) {
        const {ctx} = this;
        console.log(figures)
        figures.forEach(figure => figure.draw(ctx));
    }
}

const canvas = new Canvas('canvas');

const line1 = new Line(100, 650, 500, 520, 'rgba(34,37,234,0.4)');
const line2 = new Line(100, 670, 500, 540, 'rgba(34,37,234, 0.4)');
const circle = new Circle(200, 250, 100, 'rgba(34,37,234, 0.4)');
const circle2 = new Circle(130, 180, 60, 'rgba(34,37,234, 0.4)');
const rect = new Rect(600, 350, 300, 100, 'rgba(234,34,81, 0.6)');
const rect2 = new Rect(550, 380, 150, 300, 'rgba(234,214,34 , 0.5)');
const rect3 = new Rect(850, 400, 150, 100, 'rgba(47,234,34, 0.5)');
const zigzag1 = new Zigzag(0, 0, 20, 'rgba(234,34,81, 0.6)');


const arr = [
    line1,
    line2,
    circle2,
    circle,
    rect,
    rect2,
    rect3,
    zigzag1
]
canvas.add(...arr)