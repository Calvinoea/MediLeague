const watch = document.querySelector('#watch');
let milliseconds = 0;
let timer;

function startWatch() {
    watch.classList.remove('paused');
    clearInterval(timer);
    timer = setInterval(() => {
        milliseconds += 10;
        let dateTimer = new Date(milliseconds);
        watch.innerHTML =
            ('0' + dateTimer.getUTCHours()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMinutes()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0' + dateTimer.getUTCMilliseconds()).slice(-3, -1);
    }, 10);
};

function pauseWatch() {
    watch.classList.add('paused');
    clearInterval(timer);
};

function resetWatch() {
    watch.classList.remove('paused');
    clearInterval(timer);
    milliseconds = 0;
    watch.innerHTML = '00:00:00:00';
};

document.addEventListener('click', (e) => {
    const el = e.target;
    if (el.id === 'start') startWatch();
    if (el.id === 'pause') pauseWatch();
    if (el.id === 'reset') resetWatch();
});

//  Store time after stop button is clicked

let recordStorage = []
document.addEventListener('click', (e) => {
    const el = e.target;
    let stopRecord = watch.innerHTML
    if (el.id === 'pause') {
        console.log(stopRecord)
        recordStorage.push(stopRecord)
    }
});

console.log(recordStorage)