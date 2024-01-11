
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class SurgeryInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100
    })
    specialist: string

    @Column()
    yoe: number


    @Column()
    cost: number

    @Column()
    doctor: string

    @Column()
    hospitalid: number
 
}
