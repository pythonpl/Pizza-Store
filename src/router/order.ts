import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { PizzaOrderRequestPayload, PizzaOrderValidator } from '../schemas/OrderValidator';
import { PayloadValidatorMiddleware } from '../services/middleware/PayloadValidator';
import { handleGetOrderStatus, handleNewOrderPlaced } from '../services/order';

const ordersRouter = express.Router();

ordersRouter.post('/', PayloadValidatorMiddleware(PizzaOrderValidator), asyncHandler(async (req: Request, res: Response) => {
    const result = await handleNewOrderPlaced(req.body as PizzaOrderRequestPayload);
    res.status(201).json(result);
}));

ordersRouter.get('/status', asyncHandler(async (req: Request, res: Response) => {
    const result = await handleGetOrderStatus(req.query.id as string);
    res.json(result);
}));

export {
    ordersRouter,
};