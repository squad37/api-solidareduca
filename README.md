<h1 align="center">API SolidarEduca</h1>

<p align="center">
  <a href="#-Projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Como-executar">Como executar</a>
</p>

## 📙 Projeto

**API** referente ao projeto **SolidarEduca** do **Programa de Formação FCamara**.

Este projeto tem como objetivo possibilitar que pessoas **doem materiais** para **alunos** que estejam precisando. Além da possibilidade de doação, desenvolvemos uma maneira de **bonificar** os **doadores** através de um **ranking** onde a cada item doado, o doador ganha **1 ponto**.

Desenvolvemos também um **ranking** para as **escolas**, com o objetivo delas divulgarem para os **Pais dos Alunos** o site e posteriormente eles realizarem o cadastro. A **cada aluno cadastrado**, a **escola** que aquele aluno estiver matriculado ganha **1 ponto**. Se a escola for **parceira do site**, **aceitando receber doação para um determinando aluno**, ela ganha **10 pontos no ranking**.


## 🔸 Rotas

### POST `/alunos`

A rota recebe `nome email cpf cep uf endereco nome_responsavel` dentro do corpo da requisição e o `id_escola` dentro do header.

É criado um objeto com as seguintes informações:  

```jsx
{ 
	"nome": "Lucas",
	"email": "lucas@teste.com.br",
	"cpf": "123123012",
	"cep": "11222333",
	"uf": "SP",
	"endereco": "Rua Teste",
    "nome_responsavel": "Mária"
    "id_escola": "0dad5291-1289-45e3-ad8e-1d29d9eae9e1",
}
```
Este objeto é inserido no banco de dados na tabela alunos.

### GET `/alunos`

Retorna todos os alunos cadastrados em conjunto com a escola que está matriculado.

```jsx
[
    {
        "id": "ebcdaa24-ac92-4e5c-b7d9-d0a9b47dad5a",
        "nome": "Lucas",
        "email": "lucas@lucas@teste.com.br",
        "cpf": "123123012",
        "cep": "11222333",
        "uf": "SP",
        "endereco": "Rua Teste",
        "nome_responsavel": "Mária",
        "created_at": "2021-03-28T07:12:05.581Z",
        "updated_at": "2021-03-28T07:12:05.581Z",
        "id_escola": "0dad5291-1289-45e3-ad8e-1d29d9eae9e1",
        "escola": 
        {
            "id": "0dad5291-1289-45e3-ad8e-1d29d9eae9e1",
            "id_inep": "35012087",
            "nome": "ENIO VILAS BOAS PROFESSOR",
            "parceira": false,
            "pontos": 1,
            "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
            "uf": "SP",
            "municipio": "São Vicente",
            "localizacao": "Urbana",
            "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
            "endereco": "JOSE JOAQUIM DE AZEVEDO, 1166 RUA. CIDADE NAUTICA. 11355-040 São Vicente - SP.",
            "telefone": "(13) 34641983",
            "categoria_administrativa": "Pública",
            "dependencia_administrativa": "Estadual",
            "categoria_escola_privada": "Não Informado",
            "conveniada_poder_publico": "Não",
            "regulamentacao_conselho_educacao": "Sim",
            "porte": "Entre 201 e 500 matrículas de escolarização",
            "modalidade": "Ensino Fundamental",
            "outras_ofertas_educacionais": "Atendimento Educacional Especializado",
            "latitude": "-23.94017",
            "longitude": "-46.4081876",
            "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012087",
            "created_at": "2021-03-28T07:10:23.051Z",
            "updated_at": "2021-03-28T07:12:05.572Z"
        }
    }   
]
```
### GET `/escolas`

Retorna todas as escolas cadastradas.

```jsx
[
    {
        "id": "456783b4-a82c-40d1-b7f4-e13696e3183c",
        "id_inep": "35012348",
        "nome": "LEOPOLDO JOSE DE SANT ANNA PROFESSOR",
        "parceira": false,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "RUA PROFESSOR JOSE GONCALVES PAIM, 60 RUA. PARQUE BITARU. 11310-340 São Vicente - SP.",
        "telefone": "(13) 34683316",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Mais de 1000 matrículas de escolarização",
        "modalidade": "Ensino Fundamental, Ensino Médio, Educação de Jovens Adultos",
        "outras_ofertas_educacionais": "Atendimento Educacional Especializado",
        "latitude": "-23.965866",
        "longitude": "-46.3938516",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012348",
        "created_at": "2021-03-28T07:10:23.051Z",
        "updated_at": "2021-03-28T07:23:16.976Z"
    },
    {
        "id": "52eaed64-87c8-4e6a-b00f-0aabfd9170d0",
        "id_inep": "35012300",
        "nome": "MARGARIDA PINHO RODRIGUES",
        "parceira": false,
        "pontos": 1,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "RUA DOUTOR POLYDORO DE OLIVEIRA BITTENCOURT, 300 RUA. VILA MARGARIDA. 11330-570 São Vicente - SP.",
        "telefone": "(13) 34632335",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Mais de 1000 matrículas de escolarização",
        "modalidade": "Ensino Fundamental, Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9666223",
        "longitude": "-46.4012189",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012300",
        "created_at": "2021-03-28T07:10:23.051Z",
        "updated_at": "2021-03-28T07:20:32.270Z"
    }
]
```
## 💻 Tecnologias

Essa aplicacão foi desenvolvida com as seguintes tecnologias:

- [Express](https://expressjs.com/pt-br/)
- [Typescript](https://www.typescriptlang.org/)
- [TypeORM](https://typeorm.io)
- [Postgresql](https://www.postgresql.org/)
<br/><br/>

## 🔸 Como executar

- Clone o repositório
- Instalar o `yarn` através do gerenciador de pacotes `npm`: `nmp install --global yarn`
- Instale as dependências com `yarn`
- É necessário ter o Postgresql instalado e um banco de dados criado com o nome: `solidareduca`
- Verificar no arquivo `ormconfig.json` as propriedades: `host port username password` e se necessário alterar colocando as informações referente a conexão com o banco de dados.
- Execute as migrations com `yarn typeorm migration:run`
- Inicie o servidor com `yarn dev`

---

<p align="center"> 🔸Desenvolvido durante o Programa de Formação FCamara🔸 <p>