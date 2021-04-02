import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnSenhaDoador1617388305364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "doadores",
      new TableColumn({
        name: "senha",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("doadores", "senha");
  }
}
