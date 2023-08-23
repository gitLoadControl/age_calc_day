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

  // Выводим количество дней с округление до целого
  days.innerHTML= Math.floor(numberDays);
}

button.addEventListener('click', calculationDays);


