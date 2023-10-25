import express, { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { PaymentRequestPayload, PaymentRequestValidator } from '../schemas/PaymentValidator';
import { PayloadValidatorMiddleware } from '../services/middleware/PayloadValidator';
import { handlePayment } from '../services/payments';

const paymentRouter = express.Router();

paymentRouter.post('/', PayloadValidatorMiddleware(PaymentRequestValidator), asyncHandler(async (req: Request, res: Response) => {
    const result = await handlePayment(req.body as PaymentRequestPayload);
    res.status(201).json(result);
}));

export {
    paymentRouter,
};