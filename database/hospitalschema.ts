 import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class HospitalInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    hospitalname: string

    @Column()
    email: string

    @Column()
    contact: number

    @Column()
    establishedin: string

    @Column()
    org: string

    @Column()
    pin: string

    @Column("text")
    description: string

    @Column()
    password: string

    @Column()
    address: string    
}
