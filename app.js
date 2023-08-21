const daysel =  document.getElementById('days');
const hoursel = document.getElementById('hours');
const minutesel= document.getElementById('minutes');
const secondsel = document.getElementById('seconds');

const input = document.getElementById('input');

function countdown() {
    const currentdate = new Date();
    const targetdate = new Date(input.value);

    const totalseconds = (targetdate - currentdate) / 1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600) % 24;
    const minutes = Math.floor(totalseconds/60) % 24;
    const seconds = Math.floor(totalseconds)% 60;

    daysel.innerHTML = days;
    hoursel.innerHTML = formattime(hours);
    minutesel.innerHTML = formattime(minutes);
    secondsel.innerHTML = formattime(seconds);

    setTimeout(countdown, 1000);
}
function formattime(time){
    if(time < 10){
        return `0${time}`;
    } else {
        return time;
    }
}

input.addEventListener('input', countdown)

countdown();