import { createConnection } from 'typeorm';
import { AppointmentInfo } from '../database/appointmentsschema';
import { SurgeryInfo } from '../database/surgeryschema';
import { UserInfo } from '../database/userschema';
import { HospitalInfo } from '../database/hospitalschema';
import { BedsInfo } from '../database/bedschema';
import { IcubedInfo } from '../database/icubedsschema';

const connections = () => {
  createConnection({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'medappoint',
    entities: [AppointmentInfo, SurgeryInfo, IcubedInfo, BedsInfo, HospitalInfo, UserInfo],
    synchronize: true,
    logging: false,
  })
    .then((connection) => {
      console.log('DB connected');
    })
    .catch((error) => {
      console.error('Error connecting to the database:', error);
    });
};

export default connections;
