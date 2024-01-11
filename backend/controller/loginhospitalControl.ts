import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { HospitalInfo } from '../../database/hospitalschema';
import bcrypt from 'bcrypt';


 const getLoginHospital = async (req: Request, res: Response) => {
    res.render("login_hospital", { message: req.flash('msg') });
};
 const postLoginHospital = async (req: Request, res: Response) => {
    try {
        const hospRepository = getRepository(HospitalInfo);
        const chk = await hospRepository.findOneBy({ email: req.body.email });
    
        if (chk) {
          const ismatch = await bcrypt.compare(req.body.password, chk.password);
          if (ismatch) {
            req.session.isAuth = true;
            req.session.loginhid = chk.id;
            res.redirect("hospitaldetails");
          } else {
            req.flash('msg', 'Wrong Password');
            res.redirect("login_hospital");
          }
        } else {
          req.flash('msg', 'Wrong Username');
          res.redirect("login_hospital");
        }
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };
  export {getLoginHospital,postLoginHospital}