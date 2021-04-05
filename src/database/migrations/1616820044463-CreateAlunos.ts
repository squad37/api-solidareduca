import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAlunos1616820044463 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "alunos",
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
            name: "email",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "endereco",
            type: "varchar",
          },
          {
            name: "nome_responsavel",
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
          {
            name: "id_escola",
            type: "uuid",
          },
        ],
        foreignKeys: [
          {
            name: "FKEscola",
            referencedTableName: "escolas",
            referencedColumnNames: ["id"],
            columnNames: ["id_escola"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("alunos");
  }
}
