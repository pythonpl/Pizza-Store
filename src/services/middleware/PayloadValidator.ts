import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const PayloadValidatorMiddleware = (validator: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
        try {
            req.body = validator.parse(req.body);
            return next();
        } catch (error) {
            return res.status(400).json({
                error,
            });
        }
    };

export {
    PayloadValidatorMiddleware,
};