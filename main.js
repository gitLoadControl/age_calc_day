/************* Helpers *************/
// Проверяет данные на заполнение
function isValidate(data) {
  return data === "" ? true : false;
}

// Возвращает нужное склонение
function declOfNum(number, words) {
  return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? Math.abs(number) % 10 : 5]];
}

/************* Application *************/
// Расчет дней от указанной доты
const button = document.getElementById('submit-button');
const date = document.getElementById('date-born');
const days = document.getElementById('days');

// Рассчитывает количество дней
function  getDays(date) {
  return Math.floor((Date.now() - Date.parse(date)) / 86400000);
}

function  calculationDays(event) {
  event.preventDefault();

  // Проверяем заполнено ли значение в input
  if(isValidate(date.value)) {
    console.log('Поле не заполнено');
    return;
  }

  // Рассчитываем количество дней
  const numberDays = getDays(date.value);

  // Выводим результаты пользователю
  days.innerHTML= numberDays + declOfNum(numberDays, [' день', ' дня', ' дней']);
}

button.addEventListener('click', calculationDays);