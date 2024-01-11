import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { IcubedInfo } from '../../database/icubedsschema';



const getIcuBeds = async (req: Request, res: Response) => {
    try {
        const icubedRepository = getRepository(IcubedInfo);
        const data = await icubedRepository.find({
          where: { hospitalid: req.session.loginhid },
        });
    
        res.render("icubeds", { message: req.flash('msg'), data });
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };

const postIcuBeds = async (req: Request, res: Response) => {
    try {
        const icubedRepository = getRepository(IcubedInfo);
        const newICUBedReg = icubedRepository.create({
          hospitalid: req.session.loginhid,
          cost: req.body.cost,
          beds: req.body.beds,
        });
    
        await icubedRepository.save(newICUBedReg);
        req.flash('msg', 'Successfully Registered');
        res.redirect("icubeds");
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };

  export {postIcuBeds,getIcuBeds};