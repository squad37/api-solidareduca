import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnDeletedPedido1617415837009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "pedidos",
      new TableColumn({
        name: "deleted",
        type: "boolean",
        default: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("pedidos", "deleted");
  }
}
