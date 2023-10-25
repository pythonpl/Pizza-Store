import express from 'express';
import { optionsRouter } from './options';
import { ordersRouter } from './order';
import { paymentRouter } from './payment';

const appRouter = express.Router();

appRouter.use('/options', optionsRouter);
appRouter.use('/order', ordersRouter);
appRouter.use('/payment', paymentRouter);

export {
    appRouter
};