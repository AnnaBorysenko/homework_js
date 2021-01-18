
const btnStart = document.getElementById("start");
const btnStop = document.getElementById("stop");
const timeBlock = document.getElementById("time_block");

const innerTime = () => {
    timeBlock.innerHTML = getTime();
};

innerTime();

let timer = setInterval(innerTime, 1000);

btnStart.onclick = () => {
    clearInterval(timer);
    timer = setInterval(innerTime, 1000);
};

btnStop.onclick = () => clearInterval(timer);

function zero_first_format(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

function getTime() {
    let current_time = new Date();
    let hours = zero_first_format(current_time.getHours());
    let minutes = zero_first_format(current_time.getMinutes());
    let seconds = zero_first_format(current_time.getSeconds());
    return +hours + ":" + minutes + ":" + seconds;
}

