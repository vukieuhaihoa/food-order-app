import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICreatVendorRequest } from '@src/dto';
import { Vendor } from '@src/models/Vendor.model';
import { ResponseFormat } from '@src/utility/Response.util';
import { IResponseFormat } from '@src/dto/Response.dto';

export const CreateVendor = async (
  req: Request,
  res: Response,
  next: NextFunction
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

    const resData: IResponseFormat = {
      data: vendor,
      message: 'Create vendor success',
      statusCode: StatusCodes.OK,
    };
    ResponseFormat(res, resData);
  } catch (error) {
    next(error);
  }
};

export const GetVendors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const listVendors = await Vendor.find();
    const resData: IResponseFormat = {
      data: listVendors,
      message: 'Create vendor success',
      statusCode: StatusCodes.OK,
    };
    ResponseFormat(res, resData);
  } catch (error) {
    next(error);
  }
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
