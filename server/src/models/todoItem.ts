import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum Priority {
  Low,
  Medium,
  High,
  Critical,
}

@Entity()
export class TodoItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.Low,
  })
  priority: Priority;

  @Column({ nullable: true })
  dateDue?: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @Column({ default: false })
  isResolved: boolean;
}
