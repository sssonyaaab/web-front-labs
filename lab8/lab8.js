function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const weekDays = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота']
    out.innerHTML = `
        <p>Дата и время для русской локали: ${today.toLocaleString('ru-RU')}</p>
        <p>Дата и время для испанской локали: ${today.toLocaleString('es-ES')}</p>
        <p>Дата и время для французской локали: ${today.toLocaleString('fr-FR')}</p>
        <p>Дата и время для итальянской локали: ${today.toLocaleString('it-IT')}</p>
        <p>Дата и время для японской локали: ${today.toLocaleString('ja-JP')}</p>
        <p>Дата и время для турецкой локали: ${today.toLocaleString('tr-TR')}</p>
        <p>Текущий год: ${today.getFullYear()}</p>
        <p>Текущий месяц: ${today.getMonth()}</p>
        <p>Текущая дата: ${today.getDay()}</p>
        <p>День недели: ${weekDays[today.getDay()]}</p>
    `;
    out.style.color = 'black';
    out.style.margin = '10px';
}
function getDayOfWeek() {
    let day = parseInt(document.getElementById('day').value);
    let month = parseInt(document.getElementById('month').value) - 1; 
    let year = parseInt(document.getElementById('year').value);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Пожалуйста, введите корректную дату');
        return;
    }
    
    let date = new Date(year, month, day);
    const weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let dayOfWeek = weekDays[date.getDay()];

    document.getElementById('result').innerText = `День недели: ${dayOfWeek}`;
    document.getElementById('result').style.color = 'black';
}