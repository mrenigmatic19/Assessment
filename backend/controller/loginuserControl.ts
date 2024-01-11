import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserInfo } from '../../database/userschema';
import bcrypt from 'bcrypt'



export const getLoginUser = async (req: Request, res: Response) => {
    res.render("login_user", { message: req.flash('msg') });
};

export const postLoginUser = async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(UserInfo);
        const chk = await userRepository.findOneBy({ email: req.body.email });
    
        if (chk) {
          const ismatch = await bcrypt.compare(req.body.password, chk.password);
          if (ismatch) {
            req.session.loginuid = chk.id;
            req.session.isAuth = true;
            res.redirect("home");
          } else {
            req.flash('msg', 'Wrong Password');
            res.redirect("login_user");
          }
        } else {
          req.flash('msg', 'Wrong Username');
          res.redirect("login_user");
        }
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };