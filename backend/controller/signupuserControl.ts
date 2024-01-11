import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserInfo } from '../../database/userschema';
import bcrypt from 'bcrypt';



export const getSignupUser = async (req: Request, res: Response) => {
    res.render("signup_user", { message: req.flash('msg') });
};

export const postSignupUser = async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(UserInfo);
        const existingUser = await userRepository.findOneBy({ email: req.body.email });
    
        if (!existingUser) {
          const hashpwd = await bcrypt.hash(req.body.password, 12);
          const cpass = await bcrypt.compare(req.body.confirmpassword, hashpwd);
    
          if (cpass) {
            const newUserReg = userRepository.create({
              username: req.body.username,
              email: req.body.email,
              contact: req.body.contact,
              dob: req.body.dob,
              pin: req.body.pin,
              gender: req.body.gender,
              password: hashpwd,
              address: req.body.address,
            });
    
            await userRepository.save(newUserReg);
            res.redirect("login_user");
          } else {
            req.flash('msg', 'Re-enter Password');
            res.redirect("signup_user");
          }
        } else {
          req.flash('msg', 'Already Registered');
          res.redirect("signup_user");
        }
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };