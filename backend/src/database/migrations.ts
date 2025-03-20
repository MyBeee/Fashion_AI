import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1710923456789 implements MigrationInterface {
    name = 'InitMigration1710923456789'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" SERIAL PRIMARY KEY,
                "name" VARCHAR(255) NOT NULL,
                "email" VARCHAR(255) NOT NULL UNIQUE,
                "password" VARCHAR(255) NOT NULL,
                "createdAt" TIMESTAMP DEFAULT now(),
                "updatedAt" TIMESTAMP DEFAULT now()
            )
        `);

        await queryRunner.query(`
            CREATE TABLE "auth_tokens" (
                "id" SERIAL PRIMARY KEY,
                "userId" INTEGER NOT NULL,
                "token" VARCHAR(255) NOT NULL UNIQUE,
                "createdAt" TIMESTAMP DEFAULT now(),
                CONSTRAINT "FK_user_auth" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "auth_tokens"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
