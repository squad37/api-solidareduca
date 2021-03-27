import { MigrationInterface, QueryRunner, Table } from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class CreateEscolas1616801926830 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "escolas",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_inep",
            type: "varchar",
          },
          {
            name: "nome",
            type: "varchar",
          },
          {
            name: "parceira",
            type: "boolean",
          },
          {
            name: "pontos",
            type: "integer",
          },
          {
            name: "restricao_atendimento",
            type: "varchar",
          },
          {
            name: "uf",
            type: "varchar",
          },
          {
            name: "municipio",
            type: "varchar",
          },
          {
            name: "localizacao",
            type: "varchar",
          },
          {
            name: "localizacao_diferenciada",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "telefone",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "categoria_administrativa",
            type: "varchar",
          },
          {
            name: "dependencia_administrativa",
            type: "varchar",
          },
          {
            name: "categoria_escola_privada",
            type: "varchar",
          },
          {
            name: "conveniada_poder_publico",
            type: "varchar",
          },
          {
            name: "regulamentacao_conselho_educacao",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "porte",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "modalidade",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "outras_ofertas_educacionais",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "latitude",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "longitude",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "consultar_ideb",
            type: "varchar",
            isNullable: true,
          },

          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("escolas")
      .values([
        {
          id: uuidV4(),
          id_inep: "35012087",
          nome: "ENIO VILAS BOAS PROFESSOR",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "JOSE JOAQUIM DE AZEVEDO, 1166 RUA. CIDADE NAUTICA. 11355-040 São Vicente - SP.",
          telefone: "(13) 34641983",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Ensino Fundamental",
          outras_ofertas_educacionais: "Atendimento Educacional Especializado",
          latitude: "-23.94017",
          longitude: "-46.4081876",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012087",
        },
        {
          id: uuidV4(),
          id_inep: "35012129",
          nome: "MARIA THEREZA DA CUNHA PEDROSO PROFESSORA",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "VITORIA DE SANTO ANTAO, SN RUA. CATIAPOA. 11370-480 São Vicente - SP.",
          telefone: "(13) 34682163",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 501 e 1000 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9529603",
          longitude: "-46.3858967",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012129",
        },
        {
          id: uuidV4(),
          id_inep: "35012130",
          nome: "JOSE NIGRO PROFESSOR",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "TRAVESSA DO PARQUE, SN TRAVESSA. CATIAPOA. 11365-330 São Vicente - SP.",
          telefone: "(13) 34682499",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9574484",
          longitude: "-46.3931389",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012130",
        },
        {
          id: uuidV4(),
          id_inep: "35012142",
          nome: "ZULMIRA DE ALMEIDA LAMBERT PROFESSORA",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "CAMPOS, SN RUA. JARDIM INDEPENDENCIA. 11380-560 São Vicente - SP.",
          telefone: "(13) 35612827",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9629923",
          longitude: "-46.3695292",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012142",
        },
        {
          id: uuidV4(),
          id_inep: "35012212",
          nome: "MARTIM AFONSO",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "JOSE BONIFACIO, 102 RUA. CENTRO. 11310-080 São Vicente - SP.",
          telefone: "(13) 34681625",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 501 e 1000 matrículas de escolarização",
          modalidade: "Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9692813",
          longitude: "-46.383432",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012212",
        },
        {
          id: uuidV4(),
          id_inep: "35012245",
          nome: "YOLANDA CONTE PROFESSORA",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "JOSE ADRIANO MARREY JUNIOR, 503 RUA. ESPLANADA DOS BARREIROS. 11340-310 São Vicente - SP.",
          telefone: "(13) 34612557",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 501 e 1000 matrículas de escolarização",
          modalidade: "Ensino Médio",
          outras_ofertas_educacionais: "Atividade Complementar",
          latitude: "-23.9563832",
          longitude: "-46.4128049",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012245",
        },
        {
          id: uuidV4(),
          id_inep: "35012300",
          nome: "MARGARIDA PINHO RODRIGUES",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "RUA DOUTOR POLYDORO DE OLIVEIRA BITTENCOURT, 300 RUA. VILA MARGARIDA. 11330-570 São Vicente - SP.",
          telefone: "(13) 34632335",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Mais de 1000 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9666223",
          longitude: "-46.4012189",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012300",
        },
        {
          id: uuidV4(),
          id_inep: "35012324",
          nome: "ARMANDO VICTORIO BEI",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "CARIJOS, 1020 RUA. PARQUE SAO VICENTE. 11360-100 São Vicente - SP.",
          telefone: "(13) 34649493",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Mais de 1000 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9497288",
          longitude: "-46.3978776",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012324",
        },
        {
          id: uuidV4(),
          id_inep: "35012348",
          nome: "LEOPOLDO JOSE DE SANT ANNA PROFESSOR",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "RUA PROFESSOR JOSE GONCALVES PAIM, 60 RUA. PARQUE BITARU. 11310-340 São Vicente - SP.",
          telefone: "(13) 34683316",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Mais de 1000 matrículas de escolarização",
          modalidade:
            "Ensino Fundamental, Ensino Médio, Educação de Jovens Adultos",
          outras_ofertas_educacionais: "Atendimento Educacional Especializado",
          latitude: "-23.965866",
          longitude: "-46.3938516",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35012348",
        },
        {
          id: uuidV4(),
          id_inep: "35006124",
          nome: "ESCOLA DE EDUCACAO INFANTIL SAPINHO SAPECA",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "CUIABA, 196 VILA NOSSA SENHORA DE FATIMA. 11355-250 São Vicente - SP.",
          telefone: "",
          categoria_administrativa: "Privada",
          dependencia_administrativa: "Privada",
          categoria_escola_privada: "Particular",
          conveniada_poder_publico: "Sim",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Até 50 matrículas de escolarização",
          modalidade: "Educação Infantil",
          outras_ofertas_educacionais: "",
          latitude: "-23.95497687",
          longitude: "-46.40395354",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35006124",
        },
        {
          id: uuidV4(),
          id_inep: "35005406",
          nome: "COLEGIO NASCIMENTO EDUCACAO",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "COSTA REGO, 50 VILA SAO JORGE. 11380-140 São Vicente - SP.",
          telefone: "(13) 35615642",
          categoria_administrativa: "Privada",
          dependencia_administrativa: "Privada",
          categoria_escola_privada: "Particular",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9546209",
          longitude: "-46.3739948",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35005406",
        },
        {
          id: uuidV4(),
          id_inep: "35159293",
          nome: "LIDER COLEGIO",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "TAMBAU, 123 133. VILA NOSSA SENHORA DE FATIMA. 11355-030 São Vicente - SP.",
          telefone: "(13) 34648157",
          categoria_administrativa: "Privada",
          dependencia_administrativa: "Privada",
          categoria_escola_privada: "Particular",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Educação Infantil, Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-23.9543072",
          longitude: "-46.4065133",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35159293",
        },
        {
          id: uuidV4(),
          id_inep: "35084633",
          nome: "JOSE BORGES FERNANDES PROF EMEI",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "AVENIDA SENADOR SALGADO FILHO, SN AVENIDA. JOQUEI CLUBE. 11360-200 São Vicente - SP.",
          telefone: "(13) 34625330",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Municipal",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Educação Infantil",
          outras_ofertas_educacionais: "Atendimento Educacional Especializado",
          latitude: "-23.9426134",
          longitude: "-46.3965132",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35084633",
        },
        {
          id: uuidV4(),
          id_inep: "35085112",
          nome: "SUELLEM DA SILVA BATISTA CRECHE MUNICIPAL",
          parceira: false,
          pontos: 0,
          restricao_atendimento: "ESCOLA PARALISADA",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada: "",
          endereco:
            "AV SENADOR SALGADO FILHO, 224 PARQUE SAO VICENTE. 11360-200 São Vicente - SP.",
          telefone: "(13) 34630354",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Municipal",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "",
          porte: "",
          modalidade: "",
          outras_ofertas_educacionais: "",
          latitude: "-23.94993",
          longitude: "-46.39762",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35085112",
        },
        {
          id: uuidV4(),
          id_inep: "35099120",
          nome: "MONTEIRO LOBATO EMEI",
          parceira: false,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "SP",
          municipio: "São Vicente",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "RUA RIO LARGO, SN RUA. JARDIM NOSSO LAR. 11370-650 São Vicente - SP.",
          telefone: "(13) 34681572",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Municipal",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 51 e 200 matrículas de escolarização",
          modalidade: "Educação Infantil",
          outras_ofertas_educacionais: "",
          latitude: "-23.951815",
          longitude: "-46.3876286",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/35099120",
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("escolas");
  }
}
