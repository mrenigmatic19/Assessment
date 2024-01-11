import { Request, Response } from 'express';

export const getMain = async (req: Request, res: Response) => {
res.render("index");
};