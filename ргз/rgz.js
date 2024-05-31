let nokRate;
async function getCurrencyRates() {
    try {
        const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
        const data = await response.json();
        nokRate = data.Valute.NOK.Value;
        document.getElementById('nok').querySelector('span').textContent = nokRate.toFixed(2) + ' руб';
    } 
    catch (error) {
        console.error('Ошибка при загрузке курсов валют:', error);
    }
}

function convertCurrency(inputId, resultId, rate) {
    const inputValue = document.getElementById(inputId).value;
    const result = inputValue / rate;
    document.getElementById(resultId).textContent = result.toFixed(2);
}
document.addEventListener('DOMContentLoaded', getCurrencyRates);