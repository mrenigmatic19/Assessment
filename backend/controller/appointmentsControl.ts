import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { AppointmentInfo } from '../../database/appointmentsschema';



export const getAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentRepository = getRepository(AppointmentInfo);
        const data = await appointmentRepository.find({ where: { hospitalid: req.session.loginhid } });
    
        res.render('appointments', { message: req.flash('msg'), data });
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    };

export const postAppointment = async (req: Request, res: Response) => {
    try {
        const appointmentRepository = getRepository(AppointmentInfo);
        const newAppointment = appointmentRepository.create({
          hospitalid: req.session.loginhid,
          doctor: req.body.doctor,
          specialist: req.body.specialist,
          cost: req.body.cost,
          yoe: req.body.yoe,
          bookingslot: req.body.bookingslot,
        });
    
        await appointmentRepository.save(newAppointment);
    
        req.flash('msg', 'Successfully Registered');
        res.redirect('/appointments');
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    };