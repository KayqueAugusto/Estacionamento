
const listaVagas = document.getElementById('listaVagas');

function carregarVagas() {
  const totalVagas = 20;
  const reservas = obterReservas();

  let html = "<h3>Vagas Cadastradas</h3>";

  if (reservas.length === 0) {
    html += "<p>Nenhuma vaga cadastrada.</p>";
  } else {
    html += "<table border='1' cellpadding='10'><tr><th>Placa</th><th>Proprietário</th><th>Apto</th><th>Bloco</th><th>Modelo</th><th>Cor</th><th>Vaga</th><th>Ações</th></tr>";

    reservas.forEach((reserva, index) => {
      html += `<tr>
        <td>${reserva.placa}</td>
        <td>${reserva.proprietario}</td>
        <td>${reserva.apartamento}</td>
        <td>${reserva.bloco}</td>
        <td>${reserva.modelo}</td>
        <td>${reserva.cor}</td>
        <td>${reserva.vaga}</td>
        <td><button onclick="removerReserva(${index}); carregarVagas();">Remover</button></td>
      </tr>`;
    });

    html += "</table>";
  }

  const vagasOcupadas = reservas.map(r => parseInt(r.vaga));
  let htmlDisponiveis = "<h3>Vagas Disponiveis</h3><ul>";
  for (let i = 1; i <= totalVagas; i++) {
    if (!vagasOcupadas.includes(i)) {
      htmlDisponiveis += `<li>Vaga ${i}</li>`;
    }
  }
  htmlDisponiveis += "</ul>";

  listaVagas.innerHTML = html + htmlDisponiveis;
}

carregarVagas();
