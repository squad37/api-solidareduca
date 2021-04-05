<h1 align="center">API Solidareduca</h1>

<h3 align="center">
    API Referente ao Projeto Solidareduca do Programa de Formação FCamara.
</h3>

<h4 align="center">
🚀 Concluído 🚀
</h4>

<p align="center">
  <a href="#-Sobre-o-Projeto">Sobre o Projeto</a> •
  <a href="#-Funcionalidades">Funcionalidades</a> •
  <a href="#-Como-executar-o-projeto">Como executar o projeto</a> •
  <a href="#-Tecnologias">Tecnologias</a> •
  <a href="#-Autores">Autores</a>
</p>


## 📙 Sobre o Projeto


Solidareduca é um projeto que tem como objetivo possibilitar a conexão entre alunos que precisam de materiais e doadores que queiram doar algum material escolar. 

---

## 💻 Funcionalidades

- [x] Cadastro de Alunos e Doadores
- [x] Listagem de todos os alunos cadastrados
- [x] Listagem de todos os doadores cadastrados
- [x] Listagem de todos os materiais cadastrados
- [x] Autenticação do aluno
- [x] Autenticação do doador
- [x] Listagem de alunos por escola

- [x] Listagem de todas as escolas cadastradas
- [x] Ranking de escolas cadastradas
    - [x] A escola tem a possibilidade de ser parceira do site e receber doações para um determinado aluno na própria escola. A cada doação recebida, a escola ganha 10 pontos no ranking.
- [x] Ranking de doadores cadastrados
  - [x] A cada doação realizada, o doador ganha 1 ponto no ranking.

- [x] Cadastro de Pedidos
  - [x] O Aluno pode escolher o material que necessita, escolher a quantidade e realizar o pedido.
- [x] Listagem de todos os pedidos
- [x] Listagem de todos os pedidos de um determinado aluno
  - [x] O aluno consegue visualizar e gerenciar os seus próprios pedidos.
  - [x] O aluno consegue cancelar um pedido.
  - [x] O aluno consegue confirmar o recebimento do material.
- [x] Listagem de todos os pedidos que estão na situação: Aguardando Doador
  - [x] O doador tem a possibilidade de selecionar um aluno, verificar o que ele precisa e escolher o que irá doar.
- [x] Listagem de todos os pedidos que um doador se prontificou a participar
  - [x] O doador consegue visualizar os materiais que se prontificou a doar.
  - [x] Caso o doador escolha um pedido incorretamente, ele consegue cancelar o seu interesse no pedido.
  
---

## 🔸 Como executar o projeto

- É necessário ter instalado o [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) e o [Postgresql](https://www.postgresql.org/). Em relação ao [Postgresql](https://www.postgresql.org/), foi utilizado no projeto a versão: 12.3.

- É necessário criar um banco de dados chamado solidareduca: `create database solidareduca;`. No projeto utilizamos o [Beekeeper-Studio](https://www.beekeeperstudio.io/) para realizar esta criação e gerenciar o banco de dados.

- É necessário ter instalado também um gerenciador de pacotes, podendo ser o [Yarn](https://yarnpkg.com/), ou [Npm](https://www.npmjs.com/). Nos passos abaixo, será utilizado o `yarn`.

Após ter realizado os passos anteriores, realizar os comandos abaixo:

- Clone o repositorio do projeto, utilizando o terminal/cmd: `git clone https://github.com/squad37/api-solidareduca.git`

- Acesse a pasta do projeto, abra o projeto em um editor de código e acesse o arquivo: `ormconfig-example.json`

- Dentro do arquivo `ormconfig-example.json` preencher as propriedades: `port username password`, referente ao banco de dados criado anteriormente.

- Renomeie o arquivo `ormconfig-example.json` para `ormconfig.json`

- Instale as dependências do projeto utilizando o terminal/cmd: `yarn`

- Execute as migrations utilizando o terminal/cmd: `yarn typeorm migration:run`

- Execute a aplicação utilizando o terminal/cmd: `yarn dev`

- A aplicação sera aberta na porta:3333

- Para acessar a documentação da API, acesse a url: `localhost:3333/api-docs`

---

## 🛠 Tecnologias

Essa aplicacão foi desenvolvida com as seguintes ferramentas:

- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io)
- [Postgresql](https://www.postgresql.org/)
- [BeekeeperStudio](https://www.beekeeperstudio.io/)
- [Swagger](https://swagger.io/)
- [Insomnia](https://insomnia.rest/)

---

## 📙 Autores

- [Guilherme Bento](https://www.linkedin.com/in/guilherme-bento-7a1400128/)
- [Jean Higa](https://www.linkedin.com/in/jean-higa-8374311a6/)
- [Daniel Barbosa](https://www.linkedin.com/in/daniel-barbosa-da-silva-b1ab8b170/)
- [Breno Moura](https://www.linkedin.com/in/breno-moura-43b09b21/)
- [Taís Rampani](https://www.linkedin.com/in/tais-rampani/)
- [Laísa Mendes](https://www.linkedin.com/in/laisa-mendes-6669b620a)

---

<p align="center"> 🔸Desenvolvido durante o Programa de Formação FCamara🔸 <p>