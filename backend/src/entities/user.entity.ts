import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // <-- @Entity 데코레이터 확인!
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}
