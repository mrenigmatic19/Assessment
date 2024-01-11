import express from 'express';
import { getSurgeries,postSurgeries } from '../controller/surgeriesControl';
const router = express.Router();

router.get('/', getSurgeries);
router.post('/', postSurgeries );

export default router;