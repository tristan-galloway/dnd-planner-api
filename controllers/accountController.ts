import { Request, Response, NextFunction } from 'express';

export const renderAccount = (req: Request, res: Response) => {
  res.render('account', { user: req.user });
};
