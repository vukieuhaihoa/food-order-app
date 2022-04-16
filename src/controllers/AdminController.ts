import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICreatVendorRequest } from '@src/dto';
import { Vendor } from '@src/models/Vendor.model';
import { ResponseFormat } from '@src/Response.util';

export const CreateVendor = async (
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    const {
      name,
      ownerName,
      foodType,
      pincode,
      address,
      phone,
      email,
      password,
    } = <ICreatVendorRequest>req.body;

    const vendor = await Vendor.create({
      name,
      ownerName,
      foodType,
      pincode,
      address,
      phone,
      email,
      password,
      serviceAvailable: false,
      coverImage: [],
      rating: 0,
    });

    return res
      .status(StatusCodes.OK)
      .json(ResponseFormat(StatusCodes.OK, 'create vendor success', vendor));
  } catch (error) {
    console.log({ error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(ResponseFormat(StatusCodes.INTERNAL_SERVER_ERROR, '', null));
  }
};

export const GetVendors = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  return true;
};

export const GetVendorById = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  return true;
};

export const UpdateVendorById = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  return true;
};

export const DeleteVendorById = async (
  _req: Request,
  _res: Response,
  _next: NextFunction
) => {
  return true;
};
