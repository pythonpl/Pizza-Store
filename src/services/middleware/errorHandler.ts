import { Request, Response, NextFunction } from 'express';
import APIError from '../../utils/APIError';

export function errorHandler(
  err: APIError,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err.statusCode !== undefined) {
    res.status(err.statusCode).json({
      message: err.message,
    });
  } else {
    res.status(500).json({
      message: 'UNKNOWN_ERROR',
    });
  }
}