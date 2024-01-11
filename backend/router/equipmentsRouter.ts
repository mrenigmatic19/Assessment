import express from 'express';
import { getEquipments,postEquipments } from '../controller/eqipmentsControl';
const router = express.Router();

router.get('/',getEquipments);
router.post('/', postEquipments);

export default router;