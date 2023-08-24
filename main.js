// Расчет дней от указанной доты
const button = document.getElementById('submit-button');
const date = document.getElementById('date-born');
const days = document.getElementById('days');

function  calculationDays(event) {
  event.preventDefault();

  // Проверяем заполнено ли значение в input
  if(date.value === "") {
    console.log('Поле не заполнено');
    return;
  }

  // Рассчитываем количество дней
  const numberDays = (Date.now() - Date.parse(date.value)) / 86400000;

  // Подготавливаем подпись
  function declOfNum(number, words) {  
    return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
  }

  // Выводим количество дней с округление до целого
  days.innerHTML= Math.floor(numberDays);

  // Выводим подпись
  days.innerHTML= "Ты живешь: " + Math.floor(numberDays) + declOfNum(Math.floor(numberDays), [' день', ' дня', ' дней']);
}

button.addEventListener('click', calculationDays);