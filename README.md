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

A rota recebe `nome email senha cpf cep uf endereco nome_responsavel id_escola` dentro do corpo da requisição.

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

### POST `/alunos/autenticacao`

A rota recebe `email, senha ` dentro do corpo da requisição, compara essas informações com os dados do banco de dados. Se o email e a senha estiverem corretos é retornado:

```jsx
{
  "id_aluno": "e2760b10-bf72-475a-baeb-e6077ceaed0d",
  "email_aluno": "vitor@solidareduca.com.br",
  "nome_aluno": "Vitor"
}
```

### GET `/alunos`

Retorna todos os alunos cadastrados em conjunto com a escola que está matriculado.

Retorno:

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
### GET `/alunos/:id_escola`
A rota recebe o `id_escola` pelo `request.params` e retorna todos os alunos de uma determinada escola.

Exemplo de como utilizar: `http://localhost:3333/alunos/127479e0-20d5-45a4-9e93-846ac56b9375`

Retorno:

```jsx
[
  {
    "id": "2684e934-f421-47ce-ad72-10b55efde2e3",
    "nome": "Jaqueline",
    "email": "jaqueline@solidareduca.com.br",
    "cpf": "11122233340",
    "cep": "11222333",
    "uf": "SP",
    "endereco": "Rua Teste",
    "nome_responsavel": "Romário",
    "created_at": "2021-03-29T01:16:56.327Z",
    "updated_at": "2021-03-29T01:16:56.327Z",
    "id_escola": "e3e53440-b488-462f-8a15-4baf0e129436",
    "escola": {
      "id": "127479e0-20d5-45a4-9e93-846ac56b9375",
      "id_inep": "35099120",
      "nome": "MONTEIRO LOBATO EMEI",
      "parceira": false,
      "pontos": 2,
      "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
      "uf": "SP",
      "municipio": "São Vicente",
      "localizacao": "Urbana",
      "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
      "endereco": "RUA RIO LARGO, SN RUA. JARDIM NOSSO LAR. 11370-650 São Vicente - SP.",
      "telefone": "(13) 34681572",
      "categoria_administrativa": "Pública",
      "dependencia_administrativa": "Municipal",
      "categoria_escola_privada": "Não Informado",
      "conveniada_poder_publico": "Não",
      "regulamentacao_conselho_educacao": "Sim",
      "porte": "Entre 51 e 200 matrículas de escolarização",
      "modalidade": "Educação Infantil",
      "outras_ofertas_educacionais": "",
      "latitude": "-23.951815",
      "longitude": "-46.3876286",
      "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35099120",
      "created_at": "2021-03-29T01:03:43.270Z",
      "updated_at": "2021-03-29T01:16:56.238Z"
    }
  },
  {
    "id": "77e25a87-2158-4faf-b3e6-02868a59c9af",
    "nome": "Julio",
    "email": "julio@solidareduca.com.br",
    "cpf": "11122233345",
    "cep": "11222333",
    "uf": "SP",
    "endereco": "Rua Teste",
    "nome_responsavel": "Romário",
    "created_at": "2021-03-29T01:12:21.754Z",
    "updated_at": "2021-03-29T01:12:21.754Z",
    "id_escola": "e3e53440-b488-462f-8a15-4baf0e129436",
    "escola": {
      "id": "127479e0-20d5-45a4-9e93-846ac56b9375",
      "id_inep": "35099120",
      "nome": "MONTEIRO LOBATO EMEI",
      "parceira": false,
      "pontos": 2,
      "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
      "uf": "SP",
      "municipio": "São Vicente",
      "localizacao": "Urbana",
      "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
      "endereco": "RUA RIO LARGO, SN RUA. JARDIM NOSSO LAR. 11370-650 São Vicente - SP.",
      "telefone": "(13) 34681572",
      "categoria_administrativa": "Pública",
      "dependencia_administrativa": "Municipal",
      "categoria_escola_privada": "Não Informado",
      "conveniada_poder_publico": "Não",
      "regulamentacao_conselho_educacao": "Sim",
      "porte": "Entre 51 e 200 matrículas de escolarização",
      "modalidade": "Educação Infantil",
      "outras_ofertas_educacionais": "",
      "latitude": "-23.951815",
      "longitude": "-46.3876286",
      "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35099120",
      "created_at": "2021-03-29T01:03:43.270Z",
      "updated_at": "2021-03-29T01:16:56.238Z"
    }
  }
]
```

### GET `/escolas`

Retorna todas as escolas por ordem alfabética.

```jsx
[
  {
    "id": "d45f2eda-4b5b-42fe-a73e-9ccfc00be5ae",
    "id_inep": "35012324",
    "nome": "ARMANDO VICTORIO BEI",
    "parceira": false,
    "pontos": 0,
    "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
    "uf": "SP",
    "municipio": "São Vicente",
    "localizacao": "Urbana",
    "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
    "endereco": "CARIJOS, 1020 RUA. PARQUE SAO VICENTE. 11360-100 São Vicente - SP.",
    "telefone": "(13) 34649493",
    "categoria_administrativa": "Pública",
    "dependencia_administrativa": "Estadual",
    "categoria_escola_privada": "Não Informado",
    "conveniada_poder_publico": "Não",
    "regulamentacao_conselho_educacao": "Sim",
    "porte": "Mais de 1000 matrículas de escolarização",
    "modalidade": "Ensino Fundamental, Ensino Médio",
    "outras_ofertas_educacionais": "",
    "latitude": "-23.9497288",
    "longitude": "-46.3978776",
    "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012324",
    "created_at": "2021-03-30T23:31:12.825Z",
    "updated_at": "2021-03-30T23:31:12.825Z"
  },
  {
    "id": "155a58ff-32f5-4fa7-b6e0-5c11b1e801c1",
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
    "created_at": "2021-03-30T23:31:12.825Z",
    "updated_at": "2021-03-31T02:07:59.495Z"
  }
]
```
### GET `/escolas/ranking`

Retorna o ranking de todas as escolas cadastradas. Caso tenha escolas com pontuações iguais, será exibido por ordem alfabética.

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
### POST `/pedidos`

A rota recebe `id_aluno id_material quantidade` dentro do corpo da requisição. É criado um objeto com as seguintes informações:
```jsx
{
    "id_aluno": "ebcdaa24-ac92-4e5c-b7d9-d0a9b47dad5a",
	"id_material": "60b67706-4718-4f7a-8f61-bfca19dbfe07",
	"quantidade": "3"
}
```
Este objeto é iserido no banco de dados na tabela Pedidos.

### GET `/pedidos`

A rota retorna todos os pedidos cadastrados.

```jsx
{
    "id": "241d4821-5463-436e-bbfb-e9b316e601ff",
    "id_aluno": "77e25a87-2158-4faf-b3e6-02868a59c9af",
    "id_material": "cc024715-b66c-4dbd-9ff2-054e40cc7064",
    "id_doador": null,
    "doador_anonimo": null,
    "local_entrega": null,
    "endereco_entrega": null,
    "situacao": "pendente",
    "quantidade": "1",
    "created_at": "2021-03-29T01:13:46.041Z",
    "updated_at": "2021-03-29T01:13:46.041Z",
    "aluno": {
      "id": "77e25a87-2158-4faf-b3e6-02868a59c9af",
      "nome": "Julio",
      "email": "julio@solidareduca.com.br",
      "cpf": "11122233345",
      "cep": "11222333",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-03-29T01:12:21.754Z",
      "updated_at": "2021-03-29T01:12:21.754Z",
      "id_escola": "e3e53440-b488-462f-8a15-4baf0e129436",
      "escola": {
        "id": "e3e53440-b488-462f-8a15-4baf0e129436",
        "id_inep": "35099120",
        "nome": "MONTEIRO LOBATO EMEI",
        "parceira": false,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "RUA RIO LARGO, SN RUA. JARDIM NOSSO LAR. 11370-650 São Vicente - SP.",
        "telefone": "(13) 34681572",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Municipal",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Entre 51 e 200 matrículas de escolarização",
        "modalidade": "Educação Infantil",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.951815",
        "longitude": "-46.3876286",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35099120",
        "created_at": "2021-03-29T01:03:43.270Z",
        "updated_at": "2021-03-29T01:15:21.399Z"
      }
    },
    "material": {
      "id": "cc024715-b66c-4dbd-9ff2-054e40cc7064",
      "nome": "Lápis de Cor",
      "created_at": "2021-03-29T01:03:43.270Z",
      "updated_at": "2021-03-29T01:03:43.270Z"
    },
    "doador": null
},
{
    "id": "395c6992-bb46-4c20-aa72-58dc19644028",
    "id_aluno": "77e25a87-2158-4faf-b3e6-02868a59c9af",
    "id_material": "847178f1-901d-46f6-a19c-cc5128a0d3f7",
    "id_doador": null,
    "doador_anonimo": null,
    "local_entrega": null,
    "endereco_entrega": null,
    "situacao": "pendente",
    "quantidade": "1",
    "created_at": "2021-03-29T01:13:25.539Z",
    "updated_at": "2021-03-29T01:13:25.539Z",
    "aluno": {
      "id": "77e25a87-2158-4faf-b3e6-02868a59c9af",
      "nome": "Julio",
      "email": "julio@solidareduca.com.br",
      "cpf": "11122233345",
      "cep": "11222333",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-03-29T01:12:21.754Z",
      "updated_at": "2021-03-29T01:12:21.754Z",
      "id_escola": "e3e53440-b488-462f-8a15-4baf0e129436",
      "escola": {
        "id": "e3e53440-b488-462f-8a15-4baf0e129436",
        "id_inep": "35099120",
        "nome": "MONTEIRO LOBATO EMEI",
        "parceira": false,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "RUA RIO LARGO, SN RUA. JARDIM NOSSO LAR. 11370-650 São Vicente - SP.",
        "telefone": "(13) 34681572",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Municipal",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Entre 51 e 200 matrículas de escolarização",
        "modalidade": "Educação Infantil",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.951815",
        "longitude": "-46.3876286",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35099120",
        "created_at": "2021-03-29T01:03:43.270Z",
        "updated_at": "2021-03-29T01:15:21.399Z"
      }
    },
    "material": {
      "id": "847178f1-901d-46f6-a19c-cc5128a0d3f7",
      "nome": "Mochila",
      "created_at": "2021-03-29T01:03:43.270Z",
      "updated_at": "2021-03-29T01:03:43.270Z"
    },
    "doador": null
}
```
### GET `/pedidos/:id_aluno`
A rota recebe o `id_aluno` pelo `request.params` e retorna todos os pedidos de um determinado aluno, independente da situação do pedido(aguardando doador, doador encontrado, pedido recebido), por ordem de criação.

Exemplo de como utilizar: `http://localhost:3333/pedidos/60b76f8e-91bd-4cde-b8ef-2b909089c952`

Retorno:
```jsx
[
  {
    "id": "c40a0334-0ee8-4982-a620-4cd1cc3d28f0",
    "id_aluno": "0f617671-e275-4602-97a3-a2108036e897",
    "id_material": "73f0b6f4-9135-4ee2-9bab-c13f844cb36c",
    "id_doador": null,
    "doador_anonimo": null,
    "local_entrega": null,
    "endereco_entrega": null,
    "situacao": "aguardando-doador",
    "quantidade": "2",
    "previsao_entrega": null,
    "mensagem_agradecimento": null,
    "created_at": "2021-04-01T01:15:43.585Z",
    "updated_at": "2021-04-01T01:15:43.585Z",
    "aluno": {
      "id": "0f617671-e275-4602-97a3-a2108036e897",
      "nome": "Oseias1",
      "email": "oseias1@solidareduca.com.br",
      "cpf": "111222333431111111",
      "cep": "11222331",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-04-01T01:15:14.348Z",
      "updated_at": "2021-04-01T01:15:14.348Z",
      "id_escola": "127479e0-20d5-45a4-9e93-846ac56b9375",
      "escola": {
        "id": "127479e0-20d5-45a4-9e93-846ac56b9375",
        "id_inep": "35012212",
        "nome": "MARTIM AFONSO",
        "parceira": true,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "JOSE BONIFACIO, 102 RUA. CENTRO. 11310-080 São Vicente - SP.",
        "telefone": "(13) 34681625",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Entre 501 e 1000 matrículas de escolarização",
        "modalidade": "Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9692813",
        "longitude": "-46.383432",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012212",
        "created_at": "2021-04-01T01:05:01.085Z",
        "updated_at": "2021-04-01T01:15:14.344Z"
      }
    },
    "material": {
      "id": "73f0b6f4-9135-4ee2-9bab-c13f844cb36c",
      "nome": "Caderno 20 Matérias",
      "created_at": "2021-04-01T01:05:01.085Z",
      "updated_at": "2021-04-01T01:05:01.085Z"
    },
    "doador": null
  },
  {
    "id": "e9c5c3df-1b99-4be8-8c74-6d752a8f671b",
    "id_aluno": "0f617671-e275-4602-97a3-a2108036e897",
    "id_material": "26358a68-dddb-4e7d-8c06-607e337f61ee",
    "id_doador": null,
    "doador_anonimo": null,
    "local_entrega": null,
    "endereco_entrega": null,
    "situacao": "aguardando-doador",
    "quantidade": "1",
    "previsao_entrega": null,
    "mensagem_agradecimento": null,
    "created_at": "2021-04-01T01:16:10.284Z",
    "updated_at": "2021-04-01T01:16:10.284Z",
    "aluno": {
      "id": "0f617671-e275-4602-97a3-a2108036e897",
      "nome": "Oseias1",
      "email": "oseias1@solidareduca.com.br",
      "cpf": "111222333431111111",
      "cep": "11222331",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-04-01T01:15:14.348Z",
      "updated_at": "2021-04-01T01:15:14.348Z",
      "id_escola": "127479e0-20d5-45a4-9e93-846ac56b9375",
      "escola": {
        "id": "127479e0-20d5-45a4-9e93-846ac56b9375",
        "id_inep": "35012212",
        "nome": "MARTIM AFONSO",
        "parceira": true,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "JOSE BONIFACIO, 102 RUA. CENTRO. 11310-080 São Vicente - SP.",
        "telefone": "(13) 34681625",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Entre 501 e 1000 matrículas de escolarização",
        "modalidade": "Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9692813",
        "longitude": "-46.383432",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012212",
        "created_at": "2021-04-01T01:05:01.085Z",
        "updated_at": "2021-04-01T01:15:14.344Z"
      }
    },
    "material": {
      "id": "26358a68-dddb-4e7d-8c06-607e337f61ee",
      "nome": "Lápis",
      "created_at": "2021-04-01T01:05:01.085Z",
      "updated_at": "2021-04-01T01:05:01.085Z"
    },
    "doador": null
  }
]
```
### GET `/pedidos/:id_aluno/aguardando-doador`

A rota recebe o `id_aluno` pelo `request.params` e retorna os pedidos de um determinado aluno que estão na situação: aguardando-doador.

Exemplo de utilização: `http://localhost:3333/pedidos/0f617671-e275-4602-97a3-a2108036e897/aguardando-doador`

Retorno:
```jsx
[
  {
    "id": "c40a0334-0ee8-4982-a620-4cd1cc3d28f0",
    "id_aluno": "0f617671-e275-4602-97a3-a2108036e897",
    "id_material": "73f0b6f4-9135-4ee2-9bab-c13f844cb36c",
    "id_doador": null,
    "doador_anonimo": null,
    "local_entrega": null,
    "endereco_entrega": null,
    "situacao": "aguardando-doador",
    "quantidade": "2",
    "previsao_entrega": null,
    "mensagem_agradecimento": null,
    "created_at": "2021-04-01T01:15:43.585Z",
    "updated_at": "2021-04-01T01:15:43.585Z",
    "aluno": {
      "id": "0f617671-e275-4602-97a3-a2108036e897",
      "nome": "Oseias1",
      "email": "oseias1@solidareduca.com.br",
      "cpf": "111222333431111111",
      "cep": "11222331",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-04-01T01:15:14.348Z",
      "updated_at": "2021-04-01T01:15:14.348Z",
      "id_escola": "127479e0-20d5-45a4-9e93-846ac56b9375",
      "escola": {
        "id": "127479e0-20d5-45a4-9e93-846ac56b9375",
        "id_inep": "35012212",
        "nome": "MARTIM AFONSO",
        "parceira": true,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "JOSE BONIFACIO, 102 RUA. CENTRO. 11310-080 São Vicente - SP.",
        "telefone": "(13) 34681625",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Entre 501 e 1000 matrículas de escolarização",
        "modalidade": "Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9692813",
        "longitude": "-46.383432",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012212",
        "created_at": "2021-04-01T01:05:01.085Z",
        "updated_at": "2021-04-01T01:15:14.344Z"
      }
    },
    "material": {
      "id": "73f0b6f4-9135-4ee2-9bab-c13f844cb36c",
      "nome": "Caderno 20 Matérias",
      "created_at": "2021-04-01T01:05:01.085Z",
      "updated_at": "2021-04-01T01:05:01.085Z"
    },
    "doador": null
  },
  {
    "id": "e9c5c3df-1b99-4be8-8c74-6d752a8f671b",
    "id_aluno": "0f617671-e275-4602-97a3-a2108036e897",
    "id_material": "26358a68-dddb-4e7d-8c06-607e337f61ee",
    "id_doador": null,
    "doador_anonimo": null,
    "local_entrega": null,
    "endereco_entrega": null,
    "situacao": "aguardando-doador",
    "quantidade": "1",
    "previsao_entrega": null,
    "mensagem_agradecimento": null,
    "created_at": "2021-04-01T01:16:10.284Z",
    "updated_at": "2021-04-01T01:16:10.284Z",
    "aluno": {
      "id": "0f617671-e275-4602-97a3-a2108036e897",
      "nome": "Oseias1",
      "email": "oseias1@solidareduca.com.br",
      "cpf": "111222333431111111",
      "cep": "11222331",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-04-01T01:15:14.348Z",
      "updated_at": "2021-04-01T01:15:14.348Z",
      "id_escola": "127479e0-20d5-45a4-9e93-846ac56b9375",
      "escola": {
        "id": "127479e0-20d5-45a4-9e93-846ac56b9375",
        "id_inep": "35012212",
        "nome": "MARTIM AFONSO",
        "parceira": true,
        "pontos": 2,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "JOSE BONIFACIO, 102 RUA. CENTRO. 11310-080 São Vicente - SP.",
        "telefone": "(13) 34681625",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Entre 501 e 1000 matrículas de escolarização",
        "modalidade": "Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9692813",
        "longitude": "-46.383432",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012212",
        "created_at": "2021-04-01T01:05:01.085Z",
        "updated_at": "2021-04-01T01:15:14.344Z"
      }
    },
    "material": {
      "id": "26358a68-dddb-4e7d-8c06-607e337f61ee",
      "nome": "Lápis",
      "created_at": "2021-04-01T01:05:01.085Z",
      "updated_at": "2021-04-01T01:05:01.085Z"
    },
    "doador": null
  }
]
```
### PUT `/pedidos/:id_pedido/doador-encontrado`

A rota recebe `id_pedido`pelo `request.params`, `id_doador doador_anonimo local_entrega endereco_entrega previsao_entrega` pelo corpo da requisição. Altera a situação do pedido, de `aguardando doador` para `doador encontrado`

Exemplo de como utilizar: `http://localhost:3333/pedidos/d8f31764-7615-48a1-8931-5772536235fb/doador-encontrado`


Exemplo de como fica o pedido:

```jsx
{
    "id": "d8f31764-7615-48a1-8931-5772536235fb",
    "id_aluno": "fe1cc814-479f-4251-bc95-6580dd85c340",
    "id_material": "3bdbac6a-47aa-40a1-9ff6-d79412ae881a",
    "id_doador": "3e5616c0-5fe0-4ff5-8b97-26e2f8708fb4",
    "doador_anonimo": false,
    "local_entrega": "Residência do Aluno",
    "endereco_entrega": "Rua Teste",
    "situacao": "doador encontrado",
    "quantidade": "19",
    "previsao_entrega": "2021-05-01T03:00:00.000Z",
    "mensagem_agradecimento": null,
    "created_at": "2021-04-01T23:48:52.425Z",
    "updated_at": "2021-04-01T23:51:26.249Z",
    "aluno": {
      "id": "fe1cc814-479f-4251-bc95-6580dd85c340",
      "nome": "Vitor",
      "email": "vitor@solidareduca.com.br",
      "cpf": "111222333431111111111",
      "cep": "11222331",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-04-01T23:27:19.270Z",
      "updated_at": "2021-04-01T23:27:19.270Z",
      "id_escola": "c0c7605d-2f74-496d-8ad3-63119997e146",
      "escola": {
        "id": "c0c7605d-2f74-496d-8ad3-63119997e146",
        "id_inep": "35012324",
        "nome": "ARMANDO VICTORIO BEI",
        "parceira": true,
        "pontos": 1,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "CARIJOS, 1020 RUA. PARQUE SAO VICENTE. 11360-100 São Vicente - SP.",
        "telefone": "(13) 34649493",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Mais de 1000 matrículas de escolarização",
        "modalidade": "Ensino Fundamental, Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9497288",
        "longitude": "-46.3978776",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012324",
        "created_at": "2021-04-01T23:26:11.904Z",
        "updated_at": "2021-04-01T23:27:19.263Z"
      }
    },
    "material": {
      "id": "3bdbac6a-47aa-40a1-9ff6-d79412ae881a",
      "nome": "Caderno Única Matéria",
      "created_at": "2021-04-01T23:26:11.904Z",
      "updated_at": "2021-04-01T23:26:11.904Z"
    },
    "doador": {
      "id": "3e5616c0-5fe0-4ff5-8b97-26e2f8708fb4",
      "nome": "Gilson",
      "email": "teste@email.com",
      "cpf": "11133344455",
      "pontos": 0,
      "cep": "11222333",
      "uf": "sp",
      "endereco": "a",
      "created_at": "2021-04-01T23:28:44.276Z",
      "updated_at": "2021-04-01T23:28:44.276Z"
    }
```
### PUT `pedidos/:id_pedido/doacao-concluida`

A rota recebe o `id_pedido` pelo `request_params` e `mensagem_agradecimento` pelo corpo da requisição, e altera a situação do pedido para: Doacão concluída. O doador recebe 1 ponto e caso a Escola tenha recebido a doação, ela recebe 10 pontos.

Exemplo de como utilizar: `http://localhost:3333/pedidos/1fb7eaf6-69c1-421b-87c0-ab39976b4be7/doacao-concluida`.

Exemplo de como fica um determinado pedido após a utilização desta rota:

```jsx
 {
    "id": "1fb7eaf6-69c1-421b-87c0-ab39976b4be7",
    "id_aluno": "fe1cc814-479f-4251-bc95-6580dd85c340",
    "id_material": "3bdbac6a-47aa-40a1-9ff6-d79412ae881a",
    "id_doador": "3e5616c0-5fe0-4ff5-8b97-26e2f8708fb4",
    "doador_anonimo": false,
    "local_entrega": "Escola",
    "endereco_entrega": "Rua Teste",
    "situacao": "Doação concluída",
    "quantidade": "15",
    "previsao_entrega": "2021-05-01T03:00:00.000Z",
    "mensagem_agradecimento": "Obrigado pela doação",
    "created_at": "2021-04-02T03:36:41.134Z",
    "updated_at": "2021-04-02T03:38:00.780Z",
    "aluno": {
      "id": "fe1cc814-479f-4251-bc95-6580dd85c340",
      "nome": "Vitor",
      "email": "vitor@solidareduca.com.br",
      "cpf": "111222333431111111111",
      "cep": "11222331",
      "uf": "SP",
      "endereco": "Rua Teste",
      "nome_responsavel": "Romário",
      "created_at": "2021-04-01T23:27:19.270Z",
      "updated_at": "2021-04-01T23:27:19.270Z",
      "id_escola": "c0c7605d-2f74-496d-8ad3-63119997e146",
      "escola": {
        "id": "c0c7605d-2f74-496d-8ad3-63119997e146",
        "id_inep": "35012324",
        "nome": "ARMANDO VICTORIO BEI",
        "parceira": true,
        "pontos": 11,
        "restricao_atendimento": "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
        "uf": "SP",
        "municipio": "São Vicente",
        "localizacao": "Urbana",
        "localizacao_diferenciada": "A escola não está em área de localização diferenciada",
        "endereco": "CARIJOS, 1020 RUA. PARQUE SAO VICENTE. 11360-100 São Vicente - SP.",
        "telefone": "(13) 34649493",
        "categoria_administrativa": "Pública",
        "dependencia_administrativa": "Estadual",
        "categoria_escola_privada": "Não Informado",
        "conveniada_poder_publico": "Não",
        "regulamentacao_conselho_educacao": "Sim",
        "porte": "Mais de 1000 matrículas de escolarização",
        "modalidade": "Ensino Fundamental, Ensino Médio",
        "outras_ofertas_educacionais": "",
        "latitude": "-23.9497288",
        "longitude": "-46.3978776",
        "consultar_ideb": "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012324",
        "created_at": "2021-04-01T23:26:11.904Z",
        "updated_at": "2021-04-02T03:38:00.803Z"
      }
    },
    "material": {
      "id": "3bdbac6a-47aa-40a1-9ff6-d79412ae881a",
      "nome": "Caderno Única Matéria",
      "created_at": "2021-04-01T23:26:11.904Z",
      "updated_at": "2021-04-01T23:26:11.904Z"
    },
    "doador": {
      "id": "3e5616c0-5fe0-4ff5-8b97-26e2f8708fb4",
      "nome": "Gilson",
      "email": "teste@email.com",
      "cpf": "11133344455",
      "pontos": 2,
      "cep": "11222333",
      "uf": "sp",
      "endereco": "a",
      "created_at": "2021-04-01T23:28:44.276Z",
      "updated_at": "2021-04-02T03:38:00.796Z"
    }
  }
```
### POST `/doadores`

A rota recebe `nome email cpf cep uf endereco`  do corpo da requisição.

É criado um objeto com as seguintes informações:  

```jsx
{ 
	"nome": "João",
	"email": "joão@e-mail.com.br",
	"cpf": "11235896522",
	"cep": "18400000",
	"uf": "SP",
	"endereco": "Alameda",
    
}
```
Este objeto é inserido no banco de dados na tabela doadores.

### POST `/doadores/autenticacao`

A rota recebe `email, senha ` dentro do corpo da requisição, compara essas informações com os dados do banco de dados. Se o email e a senha estiverem corretos é retornado:

```jsx
{
  "id_doador": "a34783b1-7d8c-4b47-a72d-c3bcd6e776f8",
  "email_doador": "teste@email.com",
  "nome_doador": "Gilson"
}
```

### GET `/doadores`

Retorna todos os doadores cadastrados.

```jsx
[
    {
        "id": "ebcdaa24-ac92-4e5c-b7d9-d0a9b47dad5a",
        "nome": "João",
        "email": "joão@email.com.br",
        "cpf": ""11235896522"",
        "cep": "18400000",
        "uf": "SP",
        "endereco": "Alameda"
                      
    }   
]
```

### GET `/materiais`

Retorna todos os materiais cadastrados.

Exemplo de retorno:

```jsx
[
  {
    "id": "262876cd-c6a8-4163-b082-4bcec2212202",
    "nome": "Caderno Única Matéria",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "fb146722-2407-433a-9b76-e269fb1364cc",
    "nome": "Caderno 10 Matérias",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "c7f3535c-632e-423c-920d-86a006ac023b",
    "nome": "Caderno 20 Matérias",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "7708b19a-3372-49e2-99de-0a4df7928b4f",
    "nome": "Mochila",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "62af6e96-a249-4349-82c8-b15fe7154923",
    "nome": "Estojo",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "63f545c2-25b5-4e3c-b258-cf5872833320",
    "nome": "Lápis",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "ee1d75e8-cd08-4f7c-99af-8bc1cb0c2f5c",
    "nome": "Lápis de Cor",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  },
  {
    "id": "12a48f83-cb54-4d52-b19e-5a24bbf3f1b6",
    "nome": "Caneta Esferográfica(Azul, Vermelha, Preta ou Verde)",
    "created_at": "2021-04-02T16:15:41.512Z",
    "updated_at": "2021-04-02T16:15:41.512Z"
  }
]
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
