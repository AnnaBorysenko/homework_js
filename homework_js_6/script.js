const
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');


window.onload = function () {
    let startX = 0;
    let startY = 0;
    let zigzagSpacing = 20;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(234,34,81, 0.6)";
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    for (let n = 0; n < 100; n++) {
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
};

ctx.beginPath();
ctx.arc(130, 180, 60, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fillStyle = "rgba(34,37,234, 0.4)";
ctx.fill();

ctx.beginPath();
ctx.arc(200, 250, 100, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill();

ctx.fillStyle = "rgba(234,34,81, 0.6)";
ctx.fillRect(600, 350, 300, 100);
ctx.fillStyle = "rgba(47,234,34, 0.5)";
ctx.fillRect(550, 380, 150, 300);
ctx.fillStyle = "rgba(234,214,34 , 0.5)";
ctx.fillRect(850, 400, 150, 100);


ctx.lineWidth = 1
ctx.strokeStyle = "rgba(70,79,83, 0.8)";
ctx.beginPath();
ctx.moveTo(100, 650);
ctx.lineTo(500, 520);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 670);
ctx.lineTo(500, 540);
ctx.stroke();


