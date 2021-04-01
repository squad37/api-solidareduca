import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnPrevisaoEntregaAndMensagemAgradecimentoPedidos1617229257494
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "pedidos",
      new TableColumn({
        name: "previsao_entrega",
        type: "date",
        isNullable: true,
      })
    );

    await queryRunner.addColumn(
      "pedidos",
      new TableColumn({
        name: "mensagem_agradecimento",
        type: "varchar",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("pedidos", "previsao_entrega");
    await queryRunner.dropColumn("pedidos", "mensagem_agradecimento");
  }
}
