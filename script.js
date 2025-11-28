"use strict"

const timer = document.getElementById('timer');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset')

let second = 25 * 60;
let intervalId;

function updateTime(time) {
    let min = Math.floor((time / 60));
    let sec = String(time % 60).padStart(2,0);
    timer.textContent = `${min}:${sec}`
}
updateTime(second)

startBtn.addEventListener('click', () => {
    if (intervalId) {
        return
    } 
    intervalId = setInterval(() => {
        if (second <= 0) {
            clearInterval(intervalId)
            // alert("Пора отдохнуть!")

            second = 5 * 60;
            updateTime(second)
            // clearInterval(intervalId);
        } else {
            second--;
            updateTime(second)            
        }
        console.log('Работает', second)
    }, 1000)
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = undefined;
});

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    second = 25 * 60;
    updateTime(second);
    intervalId = undefined;
});


