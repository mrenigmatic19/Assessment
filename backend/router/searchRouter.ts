import express from 'express';
import { getSearch,postSearch } from '../controller/searchControl';
const router = express.Router();

router.get('/', getSearch);
router.post('/', postSearch);

export default router;