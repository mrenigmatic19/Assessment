import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class UserInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
    })
    username: string

    @Column()
    email: string

    @Column()
    contact: number

    @Column()
    dob: string

    @Column()
    pin: string

    @Column()
    gender: string

    @Column()
    password: string

    @Column()
    address: string    
}
