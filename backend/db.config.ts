import { DataSource } from "typeorm"
import { AppointmentInfo } from "../database/appointmentsschema"
import { SurgeryInfo } from "../database/surgeryschema"
import { UserInfo } from "../database/userschema"
import { HospitalInfo } from "../database/hospitalschema"
import { BedsInfo } from "../database/bedschema"
import { IcubedInfo } from "../database/icubedsschema"

const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost", 
    port: 3306,
    username: "root",
    password: "root",
    database: "medappoint",
    entities: [AppointmentInfo,SurgeryInfo,IcubedInfo,BedsInfo,HospitalInfo,UserInfo],
    synchronize: true,
    logging: false,
})

export const entityManager = AppDataSource.manager;

const connections = ()=>{
     AppDataSource.initialize().then(()=>{
          console.log('DB connected');
     }).catch((e:any)=>{
          console.log('error'+e)
     })
}

export default connections