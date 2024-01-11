import express from 'express';
import { getLoginUser,postLoginUser } from '../controller/loginuserControl';
const router = express.Router();

router.get('/', getLoginUser);
router.post('/', postLoginUser);

export default router;