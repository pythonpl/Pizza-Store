import express, { Request, Response } from 'express';
import { DOUGH_DEFINITIONS, SAUCE_DEFINITIONS, TOPPING_DEFINITIONS } from '../db/database/definitions';

const optionsRouter = express.Router();

optionsRouter.get('/', (_req: Request, res: Response) => res.json({
        dough: DOUGH_DEFINITIONS,
        sauce: SAUCE_DEFINITIONS,
        toppings: TOPPING_DEFINITIONS
    })
);

export {
    optionsRouter
};