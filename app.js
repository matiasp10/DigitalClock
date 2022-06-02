let hourEl = document.querySelector('.hour');
let minEl = document.querySelector('.minute');
let segEl = document.querySelector('.second');

function updateClock() {
  let hora = new Date().getHours();
  let minuto = new Date().getMinutes();
  let segundo = new Date().getSeconds();

  hora = hora < 10 ? '0' + hora : hora;
  minuto = minuto < 10 ? '0' + minuto : minuto;
  segundo = segundo < 10 ? '0' + segundo : segundo;

  hourEl.textContent = hora;
  minEl.textContent = minuto;
  segEl.textContent = segundo;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
