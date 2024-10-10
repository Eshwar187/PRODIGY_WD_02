let startTime = 0;
let endTime = 0;
let running = false;
let intervalId = 0;

const timeElement = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    startTime = new Date().getTime();
    running = true;
    intervalId = setInterval(updateTime, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    endTime = new Date().getTime();
    running = false;
    clearInterval(intervalId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function resetTimer() {
    startTime = 0;
    endTime = 0;
    running = false;
    clearInterval(intervalId);
    timeElement.textContent = '00:00:00';
    startBtn.disabled = false;
    stopBtn.disabled = true;
}

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsed = currentTime - startTime;
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    timeElement.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return (number < 10 ? '0' : '') + number;
}