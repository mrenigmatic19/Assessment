import express,{Request,Response} from 'express';
const router = express.Router();

router.get('/', async (req:Request,res:Response)=>{
    res.redirect('/')
});
router.post('/', async (req:Request,res:Response)=>{
    res.redirect('/')
});

export default router