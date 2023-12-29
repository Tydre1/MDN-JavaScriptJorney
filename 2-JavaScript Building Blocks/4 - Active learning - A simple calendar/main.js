const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.addEventListener('change', () => {
  const choice = select.value;

  // ADD CONDITIONAL HERE
  let days = 30;
  if (choice === "February") { // 'se' a escolha for 'Fevereiro' o mês terá 28 dias.
    days = 28;
  } else if ( // 'e se' Abril, Junho, Setembro e Novembro forem escolhidos o mês terá 30 dias.
    choice === "April" ||
    choice === "June" ||
    choice === "September" ||
    choice === "November"
  ) {
    days = 30;
  }

  createCalendar(days, choice);
});

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31, 'January');
