
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class IcubedInfo {
    @PrimaryGeneratedColumn()
    id: number


    @Column()
    beds: number


    @Column()
    cost: number

  
    @Column()
    hospitalid: number

 
}
