import { Request, Response } from 'express';

export const getHospitalDetails = async (req: Request, res: Response) => {
res.render("hospitaldetails");
};