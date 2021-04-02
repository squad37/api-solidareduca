import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnSenhaAluno1617379761061 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "alunos",
      new TableColumn({
        name: "senha",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("alunos", "senha");
  }
}
