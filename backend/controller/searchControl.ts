import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { UserInfo } from '../../database/userschema';
import { HospitalInfo } from '../../database/hospitalschema';
import { BedsInfo } from '../../database/bedschema';
import { AppointmentInfo } from '../../database/appointmentsschema';
import { IcubedInfo } from '../../database/icubedsschema';
import { SurgeryInfo } from '../../database/surgeryschema';
import { EquipmentInfo } from '../../database/equipmentschema';
import {getDistance} from '../getdistance';

export const getSearch = async (req: Request, res: Response) => {
    const array = req.session.detail;
    const val = req.session.value;
    res.render("searching", { message: req.flash('msg'), array, val });
};
export const postSearch = async (req: Request, res: Response) => {
    try {
        const val = req.body.value;
        if (val) {
            const string = req.body.search;
            console.log(string);
            if (string) {
                const array = string.split(' ');
                let a: (AppointmentInfo | EquipmentInfo | IcubedInfo | BedsInfo | SurgeryInfo)[] = [];

                for (let i = 0; i < array.length; i++) {
                    if (val === '4') {
                        const table = await getRepository(AppointmentInfo).find({ where: { specialist: array[i] } });
                        table.forEach((x) => {
                            a.push(x);
                        });
                    } else if (val === '1') {
                        const table = await getRepository(EquipmentInfo).find({
                            where: [{ instrumentname: array[i] }, { type: array[i] }],
                        });
                        table.forEach((x) => {
                            a.push(x);
                        });
                    } else if (val === '0') {
                        const table = await getRepository(IcubedInfo).find();
                        table.forEach((x) => {
                            a.push(x);
                        });
                    } else if (val === '2') {
                        const table = await getRepository(BedsInfo).find({ where: { disease: array[i] } });
                        table.forEach((x) => {
                            a.push(x);
                        });
                    } else {
                        const table = await getRepository(SurgeryInfo).find({ where: { specialist: array[i] } });
                        table.forEach((x) => {
                            a.push(x);
                        });
                    }
                }
                req.flash('msg', 'Searching Successful');
                req.session.detail = a;
                req.session.value = val;
                res.redirect("searching");
            } else {
                req.flash('msg', 'Empty Search');
                res.redirect("searching");
            }
        } else {
            req.flash('msg', 'Select respective field');
            res.redirect("searching");
        }
    } catch (error) {
        console.error(error);
        req.flash('msg', 'Search Something');
        res.redirect("searching");
    }
    
    
};