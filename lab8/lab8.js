function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = `
        <p>Дата и время для русской локали: ${today.toLocaleString('ru-RU')}</p>
        <p>Дата и время для испанской локали: ${today.toLocaleString('es-ES')}</p>
        <p>Дата и время для французской локали: ${today.toLocaleString('fr-FR')}</p>
        <p>Дата и время для итальянской локали: ${today.toLocaleString('it-IT')}</p>
        <p>Дата и время для японской локали: ${today.toLocaleString('ja-JP')}</p>
        <p>Дата и время для турецкой локали: ${today.toLocaleString('tr-TR')}</p>
    `;
    out.style.color = 'black';
    out.style.margin = '10px';
}