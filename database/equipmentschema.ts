
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class EquipmentInfo {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    instrumentname: string

    @Column()
    type: string


    @Column()
    availability: string

  
    @Column()
    hospitalid: number

 
}
