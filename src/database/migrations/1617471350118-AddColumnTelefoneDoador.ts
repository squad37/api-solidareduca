import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnTelefoneDoador1617471350118
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "doadores",
      new TableColumn({
        name: "telefone",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("doadores", "telefone");
  }
}
