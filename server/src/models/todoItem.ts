import {
  IsBoolean,
  IsDate,
  IsDefined,
  IsInt,
  IsOptional,
  Length,
  Max,
  Min,
} from 'class-validator';
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

  @Length(3, 255)
  @Column()
  title: string;

  @Length(3, 5000)
  @Column()
  description: string;

  @IsInt()
  @Min(0)
  @Max(3)
  @Column({
    type: 'enum',
    enum: Priority,
    default: Priority.Low,
  })
  priority: Priority;

  @IsOptional()
  @IsDate()
  @Column({ nullable: true })
  dateDue?: Date;

  @CreateDateColumn()
  dateCreated: Date;

  @IsBoolean()
  @Column({ default: false })
  isResolved: boolean;
}
