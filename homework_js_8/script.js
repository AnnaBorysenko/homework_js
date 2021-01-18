const el = document.createElement('div');
el.innerHTML = '<h2 id="time_block"></h2>';
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
btn1.appendChild(document.createTextNode('Start'));
btn2.appendChild(document.createTextNode('Stop'));
btn1.classList.add("btn1");
btn2.classList.add("btn2");
document.body.append(el,btn1,btn2)

function zero_first_format(value) {
    if (value < 10) {
        value = '0' + value;
    }
    return value;
}

function time() {
    let current_time = new Date();
    let hours = zero_first_format(current_time.getHours());
    let minutes = zero_first_format(current_time.getMinutes());
    let seconds = zero_first_format(current_time.getSeconds());
    return +hours + ":" + minutes + ":" + seconds;
}

document.getElementById("time_block").innerHTML = time();
let timer = setInterval(function () {
    document.getElementById("time_block").innerHTML = time();
}, 1000);
btn1.onclick = function() {
    setInterval(function () {
        document.getElementById("time_block").innerHTML = time();
    }, 1000);
};
btn2.onclick = function () {
    clearInterval(timer);
}

