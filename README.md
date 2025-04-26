# 🚗 Sistema de Controle de Estacionamento

Este projeto consiste em uma aplicação web simples para controle de reservas de vagas de estacionamento em um condomínio. Desenvolvido como parte de um desafio acadêmico, o sistema foi construído utilizando apenas **HTML**, **CSS** e **JavaScript**, sem o uso de frameworks.

## 🎯 Funcionalidades

- **Cadastro de Reservas**:  
  Formulário para registrar reservas de vagas, incluindo:
  - Placa do veículo
  - Nome do proprietário
  - Número e bloco do apartamento
  - Modelo e cor do veículo
  - Número da vaga

- **Listagem de Vagas**:
  - Exibe todas as reservas cadastradas.
  - Mostra as vagas disponíveis.
  - Permite remover reservas.

- **Armazenamento Local**:
  - Utilização do `localStorage` para simular o armazenamento dos dados.

## 📂 Estrutura do Projeto

O projeto segue uma estrutura baseada no padrão **MVC (Model-View-Controller)**:

```
/css
  └── estilo.css          # Estilos da aplicação

/controller
  ├── cadastro.js         # Lógica de cadastro de reservas
  └── listar.js           # Lógica de listagem e remoção de reservas

/model
  └── reservaModel.js     # Manipulação do localStorage (obter, salvar, remover reservas)

/views
  ├── index.html          # Página inicial
  ├── cadastro.html       # Tela de cadastro de reservas
  └── listar.html         # Tela de listagem de vagas
```

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Abra o arquivo `index.html` no seu navegador.

> 💡 Como é uma aplicação 100% front-end, não é necessário servidor para execução.

## 📸 Demonstração

- **Página Inicial**: Navegação entre as telas.
- **Cadastro**: Preencha o formulário e clique em "Salvar". Os dados serão exibidos no console e salvos no `localStorage`.
- **Listagem**: Veja as vagas cadastradas e as disponíveis. É possível remover reservas.

## ✅ Critérios Atendidos

- [x] Telas de cadastro e listagem criadas.
- [x] Uso exclusivo de HTML, CSS e JavaScript puro.
- [x] Métodos de listar, salvar e remover implementados.
- [x] Estrutura seguindo o padrão MVC.
- [x] Armazenamento simulado com `localStorage`.

## 🛠 Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- `localStorage` (simulação de banco de dados)

## 📄 Autor

Desenvolvido por Kayque Milhome  
Desafio acadêmico - Sistema de Controle de Estacionamento.
