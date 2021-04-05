import { MigrationInterface, QueryRunner } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Escola } from "../../entities/Escola";

export class AddEscolasBanco1617482812387 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into("escolas")
      .values([
        {
          id: uuidV4(),
          id_inep: "23000317",
          nome: "FRANCISCA ISAURA RIOS ROCHA EEIEF",
          parceira: true,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "CE",
          municipio: "Acaraú",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "RUA CAPITAO ANTONIO RAIMUNDO, 100 OUTRA BANDA. 62580-000 Acaraú - CE.",
          telefone: "(88) 996609429",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Municipal",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 51 e 200 matrículas de escolarizaçã",
          modalidade: "Ensino Fundamental",
          outras_ofertas_educacionais: "",
          latitude: "-2.8776999",
          longitude: "-40.1217793",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/23000317",
        },
        {
          id: uuidV4(),
          id_inep: "33000042",
          nome: "CE PADRE MELLO",
          parceira: true,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "RJ",
          municipio: "Bom Jesus do Itabapoana",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "AVENIDA GOVERNADOR ROBERTO SILVEIRA, 578 CENTRO. 28360-000 Bom Jesus do Itabapoana - RJ.",
          telefone: "(22) 38317972",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 201 e 500 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "Atendimento Educacional Especializado",
          latitude: "-21.135486",
          longitude: "-41.6718977",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/33000042",
        },
        {
          id: uuidV4(),
          id_inep: "33000360",
          nome: "IE EBER TEIXEIRA DE FIGUEIREDO",
          parceira: true,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "RJ",
          municipio: "Bom Jesus do Itabapoana",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco:
            "RUA PRESIDENTE COSTA E SILVA, 247 BELVEDERE. 28360-000 Bom Jesus do Itabapoana - RJ.",
          telefone: "(22) 38330193",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 501 e 1000 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio, Educação Profissional",
          outras_ofertas_educacionais:
            "Atendimento Educacional Especializado, Atividade Complementar",
          latitude: "-21.1337244",
          longitude: "-41.6731167",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/33000360",
        },
        {
          id: uuidV4(),
          id_inep: "31000086",
          nome: "EE PROFESSOR JOSE MESQUITA DE CARVALHO",
          parceira: true,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "MG",
          municipio: "Belo Horizonte",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco: "RUA IRAI, 154 VILA PARIS. 30380-640 Belo Horizonte - MG.",
          telefone: "(31) 25524877",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 501 e 1000 matrículas de escolarização",
          modalidade:
            "Ensino Fundamental, Ensino Médio, Educação de Jovens Adultos",
          outras_ofertas_educacionais: "Atendimento Educacional Especializado",
          latitude: "-19.9481769",
          longitude: "-43.94989",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/31000086",
        },
        {
          id: uuidV4(),
          id_inep: "31000132",
          nome: "EE GUIMARAES ROSA",
          parceira: true,
          pontos: 0,
          restricao_atendimento:
            "ESCOLA EM FUNCIONAMENTO E SEM RESTRIÇÃO DE ATENDIMENTO",
          uf: "MG",
          municipio: "Belo Horizonte",
          localizacao: "Urbana",
          localizacao_diferenciada:
            "A escola não está em área de localização diferenciada",
          endereco: "RUA AVELAR, 10 PINDORAMA. 30865-530 Belo Horizonte - MG.",
          telefone: "(31) 34732077",
          categoria_administrativa: "Pública",
          dependencia_administrativa: "Estadual",
          categoria_escola_privada: "Não Informado",
          conveniada_poder_publico: "Não",
          regulamentacao_conselho_educacao: "Sim",
          porte: "Entre 501 e 1000 matrículas de escolarização",
          modalidade: "Ensino Fundamental, Ensino Médio",
          outras_ofertas_educacionais: "",
          latitude: "-19.91209",
          longitude: "-44.02208",
          consultar_ideb:
            "http://idebescola.inep.gov.br/ideb/escola/dadosEscola/31000132",
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Escola)
      .where({ id_inep: "23000317" })
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Escola)
      .where({ id_inep: "33000042" })
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Escola)
      .where({ id_inep: "33000360" })
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Escola)
      .where({ id_inep: "31000086" })
      .execute();

    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from(Escola)
      .where({ id_inep: "31000132" })
      .execute();
  }
}
