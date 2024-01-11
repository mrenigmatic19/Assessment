import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { SurgeryInfo } from '../../database/surgeryschema';



export const getSurgeries = async (req: Request, res: Response) => {
    try {
    const surgeryRepository = getRepository(SurgeryInfo);
    const data = await surgeryRepository.find({
      where: { hospitalid: req.session.loginhid },
    });

    res.render("surgeries", { message: req.flash('msg'), data });
  } catch (error) {
    console.log(error);
    res.render("error", { error: "An error occurred" });
  }
};

export const postSurgeries = async (req: Request, res: Response) => {
try {
    const surgeryRepository = getRepository(SurgeryInfo);
    const newSurgeryReg = surgeryRepository.create({
      hospitalid: req.session.loginhid,
      doctor: req.body.doctor,
      specialist: req.body.specialist,
      cost: req.body.cost,
      yoe: req.body.yoe,
    });

    await surgeryRepository.save(newSurgeryReg);
    req.flash('msg', 'Successfully Registered');
    res.redirect("surgeries");
  } catch (error) {
    console.log(error);
    res.render("error", { error: "An error occurred" });
  }
};