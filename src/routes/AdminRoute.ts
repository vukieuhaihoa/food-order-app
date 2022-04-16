import express, { Request, Response, NextFunction } from 'express';
import {
  CreateVendor,
  DeleteVendorById,
  GetVendorById,
  GetVendors,
  UpdateVendorById,
} from '@src/controllers';

const router = express.Router();

router.post('/vendor', CreateVendor);
router.get('/vendors', GetVendors);
router.get('/vendor/:id', GetVendorById);
router.put('/vendor/:id', UpdateVendorById);
router.delete('/vendor/:id', DeleteVendorById);

router.get('/', (req: Request, res: Response, _next: NextFunction) => {
  res.json('Hello from admin');
});

export { router as AdminRoute };
