import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePedidos1616824957084 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "pedidos",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "id_aluno",
            type: "uuid",
          },
          {
            name: "id_material",
            type: "uuid",
          },
          {
            name: "id_doador",
            type: "uuid",
            isNullable: true,
          },
          {
            name: "local_entrega",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "endereco_entrega",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "situacao",
            type: "varchar",
            default: "'aguardando-doador'",
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
        foreignKeys: [
          {
            name: "FKAluno",
            referencedTableName: "alunos",
            referencedColumnNames: ["id"],
            columnNames: ["id_aluno"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKMaterial",
            referencedTableName: "materiais",
            referencedColumnNames: ["id"],
            columnNames: ["id_material"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
          {
            name: "FKDoador",
            referencedTableName: "doadores",
            referencedColumnNames: ["id"],
            columnNames: ["id_doador"],
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("pedidos");
  }
}
