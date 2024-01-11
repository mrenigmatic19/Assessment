import express from 'express';
import { getSignupUser , postSignupUser } from '../controller/signupuserControl';
const router = express.Router();

router.get('/',  getSignupUser);
router.post('/',postSignupUser);

export default router;