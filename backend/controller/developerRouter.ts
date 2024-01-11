import { Request, Response } from 'express';

export const getDevelopers = async (req: Request, res: Response) => {
res.render("developers");
};