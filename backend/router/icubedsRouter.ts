import express from 'express';
import { getIcuBeds,postIcuBeds } from '../controller/icubedsControl';
const router = express.Router();

router.get('/', getIcuBeds);
router.post('/',postIcuBeds);

export default router;