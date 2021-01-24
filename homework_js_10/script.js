const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const $start = document.getElementById('start');
const $stop = document.getElementById('stop');
const $score = document.getElementById('score');
const rect = creatRect()
console.log(rect)
// вынесла чтобы внутри function animate не лазить потому так так это очень запратно
let rectList = []
let app = undefined;
let score = 0


function addRectToList() {
    const rect = creatRect()
    rectList.push(rect)
}

let addRectInterval = setInterval(() =>{
    addRectToList()
}, 1000)

function clearCanvas () {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function animate() {
    clearCanvas ()
    rectList.forEach(rect => {
        if (validPosition(rect)) {
            moveRect(rect)
        } else {
            removeRect(rect)
        }
    })
    app = requestAnimationFrame(animate);
}

function start() {
    console.log(app)
    if (!app) {
        rectList = []
        updateScore(true)
        app = requestAnimationFrame(animate);
        addRectInterval = setInterval(() =>{
            addRectToList()
        }, 1000)
    }
}

function stop() {
    clearCanvas ()
    clearInterval(addRectInterval)
    window.cancelAnimationFrame(app)
    app = undefined
}

// тут может находится ваш код


function moveRect(rect) {
    rect.y = rect.y + rect.speed
    drawRect(rect)
}

function creatRect() {
    return {
        x: getRandomX(),
        y: -20,
        color: getRandomColor(),
        width: 20,
        height: 20,
        speed: getRandomSpeed()
    }
}

function getRandomNumber(n) {
    return Math.round(Math.random() * n)
}

function getRandomSpeed() {
    const speed =  getRandomNumber(10)
    if (speed < 1 || speed > 5) {
        return getRandomSpeed()
    }
    return speed
}

function getRandomX() {
    const x = getRandomNumber(1000)
    if (x >= canvas.width - 20) {
        return getRandomX()
    } else {
        return x
    }
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function drawRect(rect) {
    ctx.fillStyle = 'black';
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height);
    ctx.fillStyle = rect.color;
    ctx.fillRect(rect.x + 1, rect.y + 1, rect.width - 2, rect.height - 2);
}

function removeRect({ x, y, color }) {
    rectList = rectList.filter(rect => {
        if (rect.x !== x && rect.y !== y && rect.color !== color) {
            return rect
        }
    })
}

function validPosition (rect) {
    return rect.y < canvas.height
}

function checkClick ({ offsetX, offsetY }){
    rectList = rectList.filter(rect => {
        const { x, y, width, height  } = rect
        const endX = x + width;
        const endY = y + height;

        if (x < offsetX && offsetX < endX && y < offsetY && y < endY) {
            console.log('Gool!', score++)
            updateScore()
        } else {
            return rect
        }
    })
}

function updateScore(reset) {
    if (reset) {
        score = 0
    }
    $score.innerText = score
}

$start.addEventListener('click', start)
$stop.addEventListener('click', stop)
canvas.addEventListener('click', checkClick)
// document.body.onload = animate;
