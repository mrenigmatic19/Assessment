import express from 'express';
import { getSignupHospital,postSignupHospital } from '../controller/signuphospitalControl';
const router = express.Router();

router.get('/', getSignupHospital);
router.post('/', postSignupHospital);

export default router;