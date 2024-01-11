
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class AppointmentInfo {
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

    @Column()
    bookingslot: number
 
}
