import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnDoadorAnonimoAndQuantidadePedidos1616972403948
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "pedidos",
      new TableColumn({
        name: "doador_anonimo",
        type: "boolean",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "pedidos",
      new TableColumn({
        name: "quantidade",
        type: "varchar",
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("pedidos", "doador_anonimo");
    await queryRunner.dropColumn("pedidos", "quantidade");
  }
}
