import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Wish {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ nullable: true })
  link?: string

  @Column({ nullable: true, length: 1000 })
  description?: string

  @Column({ nullable: true })
  price?: number
}
