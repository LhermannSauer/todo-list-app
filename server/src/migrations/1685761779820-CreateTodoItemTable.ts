import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTodoItemTable1685761779820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createDatabase('todolistapp_dev', true);
    await queryRunner.createTable(
      new Table({
        name: 'todo_item',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'text',
          },
          {
            name: 'priority',
            type: 'enum',
            enum: ['Low', 'Medium', 'High', 'Critical'],
            default: "'Low'",
          },
          {
            name: 'dateDue',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'dateCreated',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'isResolved',
            type: 'boolean',
            default: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('todo_item');
  }
}
