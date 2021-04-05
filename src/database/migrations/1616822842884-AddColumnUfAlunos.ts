import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnUfAlunos1616822842884 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "alunos",
      new TableColumn({
        name: "uf",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("alunos", "uf");
  }
}
