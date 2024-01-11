import { createConnection } from 'typeorm';
import { AppointmentInfo } from '../database/appointmentsschema';
import { SurgeryInfo } from '../database/surgeryschema';
import { UserInfo } from '../database/userschema';
import { HospitalInfo } from '../database/hospitalschema';
import { BedsInfo } from '../database/bedschema';
import { IcubedInfo } from '../database/icubedsschema';

// Host: sql12.freesqldatabase.com
// Database name: sql12676326
// Database user: sql12676326
// Database password: YVREK4y1Wq
// Port number: 3306


const connections = () => {
  createConnection({
    type: 'mysql',
    host: 'sql12.freesqldatabase.com',
    port: 3306,
    username: 'sql12676326',
    password: 'YVREK4y1Wq',
    database: 'sql12676326',
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
