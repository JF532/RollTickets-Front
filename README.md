# 🎟️ RollTickets Frontend

RollTickets é um sistema completo de gerenciamento de ingressos de cinema. Esta parte do projeto representa o **frontend**, desenvolvido em **React** com integração ao backend em Spring Boot.

---

## 🎓 Sobre o Projeto

Este projeto foi desenvolvido como parte da disciplina de **Programação Orientada a Objetos (POO)** da faculdade. Ele simula um sistema real de venda de ingressos, sessões de filmes, controle de assentos e pagamento online, utilizando uma interface web moderna.

---

## 🚀 Tecnologias Utilizadas

- React
- React Router
- Axios
- JavaScript (ES6+)
- HTML5 & CSS3
- TailwindCSS 
- Integração com TMDB API e backend Spring Boot

---

## 📁 Estrutura do Projeto

```
RollTickets-Front/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js
```

---

## ⚙️ Configuração

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn

### Instalar dependências

```bash
npm install
# ou
yarn install
```

### Arquivo .env

Crie um arquivo `.env` na raiz com a URL do backend:

```
VITE_API_URL=http://localhost:8080
VITE_TMDB_API_KEY=SUA_CHAVE_TMDB
```

---

## ▶️ Executando o Projeto

```bash
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em:  
📍 `http://localhost:5173`

---

## 🌐 Funcionalidades Principais

- Listagem de filmes (em cartaz e em breve)
- Compra de ingressos com escolha de assentos
- Cadastro de cliente
- Integração com backend e gateway de pagamento
- Estilização responsiva

---

## 📦 Comandos Úteis

- Rodar em desenvolvimento: `npm run dev`
- Build de produção: `npm run build`
- Preview local da build: `npm run preview`

---

## 🧪 Testes

> O projeto atualmente não possui testes automatizados, mas está estruturado para fácil integração futura com ferramentas como Jest ou React Testing Library.

---

## 📌 Observações

- Este repositório representa **apenas o frontend**. A API REST (backend Spring Boot) está em outro repositório: [`RollTickets-API`](https://github.com/JF532/RollTickets-API)
- A integração com a [TMDB API](https://www.themoviedb.org/) é utilizada para exibir dados de filmes reais.
- O frontend também se comunica com o backend para efetuar compras, listar sessões, assentos e gerenciar clientes.

---

## 👨‍👩‍👧‍👦 Autores

- João Filipe Peixoto de Carvalho – [@JF532](https://github.com/JF532)
- Fernanda Alves Tamarindo – [@FerTamarindo](https://github.com/FerTamarindo)
- Felipe Taveira – [@Feliipee013](https://github.com/Feliipee013)

---

🎬 Projeto desenvolvido para fins educacionais na disciplina de Programação Orientada a Objetos.
