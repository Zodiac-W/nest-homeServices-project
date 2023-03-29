import { MigrationInterface, QueryRunner } from 'typeorm';

export class zodiac1680019070295 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE my_table DROP COLUMN homeServices_discription`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "home_services" ADD COLUMN homeServices_discription INT NOT NULL DEFAULT 0`,
    );
  }
}
