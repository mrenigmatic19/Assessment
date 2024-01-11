import express from 'express';
import { getLoginHospital,postLoginHospital } from '../controller/loginhospitalControl';
const router = express.Router();

router.get('/', getLoginHospital);
router.post('/',postLoginHospital);

export default router;