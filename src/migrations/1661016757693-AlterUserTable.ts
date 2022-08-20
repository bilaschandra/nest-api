import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterUserTable1661016757693 implements MigrationInterface {
    name = 'AlterUserTable1661016757693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`address\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`address\``);
    }

}
