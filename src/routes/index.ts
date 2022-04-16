import { Express } from 'express';
import { AdminRoute } from './AdminRoute';
import { VendorRoute } from './VendorRoute';

const settingRoutes = (app: Express) => {
  app.use('/admin', AdminRoute);
  app.use('/vendor', VendorRoute);
};

export default settingRoutes;
