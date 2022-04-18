import { Express } from 'express';
import { AdminRoute } from './Admin.route';
import { VendorRoute } from './Vendor.route';

const settingRoutes = (app: Express) => {
  app.use('/admin', AdminRoute);
  app.use('/vendor', VendorRoute);
};

export default settingRoutes;
