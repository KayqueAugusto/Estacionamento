
document.getElementById('formReserva').addEventListener('submit', function(e) {
  e.preventDefault();

  const reserva = {
    placa: document.getElementById('placa').value,
    proprietario: document.getElementById('proprietario').value,
    apartamento: document.getElementById('apartamento').value,
    bloco: document.getElementById('bloco').value,
    modelo: document.getElementById('modelo').value,
    cor: document.getElementById('cor').value,
    vaga: document.getElementById('vaga').value
  };

  console.log("Reserva cadastrada:", reserva);
  alert("Cadastro realizado com sucesso!");
  salvarReserva(reserva);
  document.getElementById('formReserva').reset();
});
