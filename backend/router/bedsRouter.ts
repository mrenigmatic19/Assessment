import express from 'express';
import { getBeds,postBeds } from '../controller/bedsControl';
const router = express.Router();

router.get('/',  getBeds);
router.post('/',  postBeds);

export default router;