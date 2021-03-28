import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDoadores1616821696720 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "doadores",
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
            name: "pontos",
            type: "integer",
          },
          {
            name: "cep",
            type: "varchar",
          },
          {
            name: "uf",
            type: "varchar",
          },
          {
            name: "endereco",
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("doadores");
  }
}
