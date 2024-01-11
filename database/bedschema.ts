
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class BedsInfo {
    @PrimaryGeneratedColumn()
    id: number
       

    @Column()
    publicward: number


    @Column()
    privateward: number

    @Column()
    disease: string

    
    @Column()
    cost: number

    @Column()
    hospitalid: number

    @Column()
    wards: number
 
}
