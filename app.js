let count = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let interval = 0;
let timerRunning = false;
let startTimer = function (){
    count++;
    minutes=Math.floor((count/100)/60);
    seconds=Math.floor(count/100)- minutes*60;
    milliSeconds=count%100;

    document.querySelector('#milliseconds').innerText= leadingZeros(milliSeconds);
    document.querySelector('#seconds').innerText= leadingZeros(seconds);
    document.querySelector('#minutes').innerText= leadingZeros(minutes);
}

let startButton = document.querySelector('#start-btn');
startButton.addEventListener('click',function () {
    if(timerRunning===false){
        interval= setInterval(startTimer,10);
        timerRunning=true;
    }
});


let leadingZeros = function (number){
    if(number<=9){
        return '0'+number;
    }
    else{
        return number;
    }
}

let stopButton = document.querySelector('#stop-btn');
stopButton.addEventListener('click',function (){
    clearInterval(interval);
    timerRunning=false;
});

let resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener('click',function () {
    clearInterval(interval);
    timerRunning=false;
    count=0;
    document.querySelector('#milliseconds').innerText='00';
    document.querySelector('#seconds').innerText='00'
    document.querySelector('#minutes').innerText='00';

})
