class Figure {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}
class Zigzag extends Figure {
    constructor(x, y, x2, color) {
        super(x, y, color);
        this.x2 = x2;
    }
    draw(ctx) {
        const {x, y, x2, color} = this;
        let startX = x;
        let startY = y;
        let zigzagSpacing = x2;
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        for (let n = 0; n < 60; n++) {
            let x = startX + ((n + 1) * zigzagSpacing);
            let y;
            if (n % 2 == 0) {
                y = startY + 20;
            } else {
                y = startY;
            }
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
}
class Line extends Figure {
    constructor(x, y, x2, y2, color) {
        super(x, y, color);
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(ctx) {
        const {x, y, x2, y2, color} = this;
        ctx.lineWidth = 2;
        ctx.strokeStyle = color;
        ctx.beginPath();

        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }
}

class Circle extends Figure {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }

    draw(ctx) {
        const {x, y, color, radius} = this;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }
}

class Rect extends Figure {
    constructor(x, y, x2, y2, color) {
        super(x, y, color);
        this.x2 = x2;
        this.y2 = y2;
    }

    draw(ctx) {
        const {x, y, x2, y2, color,} = this;
        ctx.fillStyle = color;
        ctx.fillRect(x, y, x2, y2);
    }
}

class Canvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
    }

    add(...figures) {
        console.log(figures)
        const {ctx} = this;

        figures.forEach(figure => figure.draw(ctx));
    }
}

const canvas = new Canvas('canvas');

const zigzag = new Zigzag(0, 0, 20,'rgba(234,34,81, 0.6)');
const line1 = new Line(100, 650, 500, 520, 'rgba(34,37,234,0.4)');
const line2 = new Line(100, 670, 500, 540, 'rgba(34,37,234, 0.4)');
const circle = new Circle(200, 250, 100, 'rgba(34,37,234, 0.4)');
const circle2 = new Circle(130, 180, 60, 'rgba(34,37,234, 0.4)');
const rect = new Rect(600, 350, 300, 100, 'rgba(234,34,81, 0.6)');
const rect2 = new Rect(550, 380, 150, 300, 'rgba(234,214,34 , 0.5)');
const rect3 = new Rect(850, 400, 150, 100, 'rgba(47,234,34, 0.5)');
canvas.add(circle, circle2, rect, rect2, rect3);
canvas.add(line1, line2);
canvas.add(zigzag);


