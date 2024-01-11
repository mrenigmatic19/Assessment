import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { BedsInfo } from '../../database/bedschema';



export const getBeds = async (req: Request, res: Response) => {
    try {
        const bedRepository = getRepository(BedsInfo);
        const data = await bedRepository.find({
          where: { hospitalid: req.session.loginhid },
        });
    
        res.render("beds", { message: req.flash('msg'), data });
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };

export const postBeds = async (req: Request, res: Response) => {
    try {
        const bedRepository = getRepository(BedsInfo);
        const newBedReg = bedRepository.create({
          hospitalid: req.session.loginhid,
          publicward: req.body.publicward,
          privateward: req.body.privateward,
          wards: req.body.ward,
          disease: req.body.disease,
          cost: req.body.cost,
        });
    
        await bedRepository.save(newBedReg);
        req.flash('msg', 'Successfully Registered');
        res.redirect("beds");
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };