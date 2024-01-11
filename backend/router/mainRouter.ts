import express from 'express';
import { getMain } from '../controller/mainControl';
const router = express.Router();

router.get('/', getMain);

export default router;