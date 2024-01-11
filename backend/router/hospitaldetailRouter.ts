import express from 'express';
import { getHospitalDetails } from '../controller/hospitalControl';
const router = express.Router();

router.get('/',getHospitalDetails);

export default router;