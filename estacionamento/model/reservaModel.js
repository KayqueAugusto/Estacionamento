
function obterReservas() {
  return JSON.parse(localStorage.getItem('reservas')) || [];
}

function salvarReserva(reserva) {
  const reservas = obterReservas();
  reservas.push(reserva);
  localStorage.setItem('reservas', JSON.stringify(reservas));
}

function removerReserva(index) {
  const reservas = obterReservas();
  reservas.splice(index, 1);
  localStorage.setItem('reservas', JSON.stringify(reservas));
}
