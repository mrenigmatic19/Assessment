import express from 'express';
import { getHome } from '../controller/homeControl';
const router = express.Router();

router.get('/', getHome);

export default router;