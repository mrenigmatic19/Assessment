import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { HospitalInfo } from '../../database/hospitalschema';
import bcrypt from 'bcrypt'


export const getSignupHospital = async (req: Request, res: Response) => {
    res.render("signup_hospital", { message: req.flash('msg') });
};

export const postSignupHospital = async (req: Request, res: Response) => {
    try {
        const hospitalRepository = getRepository(HospitalInfo);
        const existingHospital = await hospitalRepository.findOneBy({ email: req.body.email });
    
        if (!existingHospital) {
          const hashpwd = await bcrypt.hash(req.body.password, 12);
          const cpass = await bcrypt.compare(req.body.confirmpassword, hashpwd);
    
          if (cpass) {
            const newHospReg = hospitalRepository.create({
              hospitalname: req.body.hospitalname,
              email: req.body.email,
              contact: req.body.contact,
              org: req.body.org,
              pin: req.body.pin,
              establishedin: req.body.establishedin,
              password: hashpwd,
              description: "hlo",
              address: req.body.address,
            });
    
            await hospitalRepository.save(newHospReg);
            res.redirect("login_hospital");
          } else {
            req.flash('msg', 'Re-enter password');
            res.redirect("signup_hospital");
          }
        } else {
          req.flash('msg', 'Already Registered');
          res.redirect("signup_hospital");
        }
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };