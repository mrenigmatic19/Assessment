import express from 'express';
import { getDevelopers } from '../controller/developerRouter';
const router = express.Router();

router.get('/', getDevelopers);

export default router;