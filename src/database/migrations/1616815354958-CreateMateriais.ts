import {
  MigrationInterface,
  QueryRunner,
  Table,
  UsingJoinColumnIsNotAllowedError,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

export class CreateMateriais1616815354958 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "materiais",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "nome",
            type: "varchar",
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
      .into("materiais")
      .values([
        {
          id: uuidV4(),
          nome: "Caderno Única Matéria",
        },
        {
          id: uuidV4(),
          nome: "Caderno 10 Matérias",
        },
        {
          id: uuidV4(),
          nome: "Caderno 20 Matérias",
        },
        {
          id: uuidV4(),
          nome: "Mochila",
        },
        {
          id: uuidV4(),
          nome: "Estojo",
        },
        {
          id: uuidV4(),
          nome: "Lápis",
        },
        {
          id: uuidV4(),
          nome: "Lápis de Cor",
        },
        {
          id: uuidV4(),
          nome: "Caneta Esferográfica(Azul, Vermelha, Preta ou Verde)",
        },
        {
          id: uuidV4(),
          nome: "Lápis de Cera",
        },
        {
          id: uuidV4(),
          nome: "Marcador",
        },
        {
          id: uuidV4(),
          nome: "Afia/Apontador",
        },
        {
          id: uuidV4(),
          nome: "Borracha",
        },
        {
          id: uuidV4(),
          nome: "Régua",
        },
        {
          id: uuidV4(),
          nome: "Tesoura",
        },
        {
          id: uuidV4(),
          nome: "Corretivo/Errorex",
        },
        {
          id: uuidV4(),
          nome: "Calculadora",
        },
        {
          id: uuidV4(),
          nome: "Compasso",
        },
        {
          id: uuidV4(),
          nome: "Transferidor(Régua)",
        },
        {
          id: uuidV4(),
          nome: "Esquadro(Régua)",
        },
      ])
      .execute();
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("materiais");
  }
}
