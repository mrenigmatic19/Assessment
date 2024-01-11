import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { EquipmentInfo } from '../../database/equipmentschema';



const getEquipments = async (req: Request, res: Response) => {
    try {
        const equipmentRepository = getRepository(EquipmentInfo);
        const data = await equipmentRepository.find({
          where: { hospitalid: req.session.loginhid },
        });
    
        res.render("equipments", { message: req.flash('msg'), data });
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };

const postEquipments = async (req: Request, res: Response) => {
    try {
        const equipmentRepository = getRepository(EquipmentInfo);
        const newEquipmentReg = equipmentRepository.create({
          hospitalid: req.session.loginhid,
          instrumentname: req.body.instrumentname,
          type: req.body.type,
          availability: req.body.availability,
        });
    
        await equipmentRepository.save(newEquipmentReg);
        req.flash('msg', 'Successfully Registered');
        res.redirect("equipments");
      } catch (error) {
        console.log(error);
        res.render("error", { error: "An error occurred" });
      }
    };
export {getEquipments,postEquipments}