import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnTelefoneAluno1617471193849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "alunos",
      new TableColumn({
        name: "telefone",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("alunos", "telefone");
  }
}
