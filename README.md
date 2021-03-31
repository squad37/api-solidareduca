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
### GET `/alunos/escolas`
A rota recebe o `id_escola` pelo corpo da requisição e retorna todos os alunos de uma determinada escola.

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
### GET `/pedidos/alunos`
A rota recebe o `email` do aluno dentro do corpo da requisição e retorna todos os pedidos de um determinado aluno.

```jsx
[
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
        "pontos": 3,
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
        "pontos": 3,
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
    "material": {
      "id": "847178f1-901d-46f6-a19c-cc5128a0d3f7",
      "nome": "Mochila",
      "created_at": "2021-03-29T01:03:43.270Z",
      "updated_at": "2021-03-29T01:03:43.270Z"
    },
    "doador": null
  }
]
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
