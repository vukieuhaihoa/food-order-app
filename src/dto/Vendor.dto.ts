import { IVendorModel } from '@src/models/Vendor.model';

export interface ICreatVendorRequest {
  name: IVendorModel['name'];
  ownerName: IVendorModel['ownerName'];
  foodType: IVendorModel['foodType'];
  pincode: IVendorModel['pincode'];
  address: IVendorModel['address'];
  phone: IVendorModel['phone'];
  email: IVendorModel['email'];
  password: IVendorModel['password'];
}

export interface IUpdateVendorRequest {
  name: string;
}
