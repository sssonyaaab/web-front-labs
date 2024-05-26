function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);
function updateSeconds() {
    let data = new Date();
    let seconds = data.getSeconds();
    document.getElementById('sec').innerText = seconds;
}
setInterval(updateSeconds, 1000);