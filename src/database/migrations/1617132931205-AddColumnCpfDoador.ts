import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnCpfDoador1617132931205 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "doadores",
            new TableColumn({
              name: "cpf",
              type: "varchar",
              isNullable: true,
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("doadores","cpf")
    }

}
