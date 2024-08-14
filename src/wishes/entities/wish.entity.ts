import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string
}
