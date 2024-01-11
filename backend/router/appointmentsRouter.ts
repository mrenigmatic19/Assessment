import express from 'express';
import { getAppointment, postAppointment } from '../controller/appointmentsControl';

const router = express.Router();

router.get('/', getAppointment);
router.post('/', postAppointment);

export default router;