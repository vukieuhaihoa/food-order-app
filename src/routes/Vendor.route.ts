import express, { Request, Response, NextFunction } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response, _next: NextFunction) => {
  res.json('Hello from vendor');
});

export { router as VendorRoute };
