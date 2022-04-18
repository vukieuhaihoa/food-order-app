import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ResponseFormat } from '@src/utility/Response.util';
import { IResponseFormat } from '@src/dto/Response.dto';

export enum MongoErrorCodes {
  DUP_KEY = 11000,
}

const handleMongoError = (err: any, res: Response) => {
  if (err.code === MongoErrorCodes.DUP_KEY) {
    const field = Object.keys(err.keyValue);
    const value = Object.values(err.keyValue);
    const resData: IResponseFormat = {
      data: null,
      message: `Object ${field} with value ${value} is duplicated`,
      statusCode: StatusCodes.CONFLICT,
    };
    return ResponseFormat(res, resData);
  }

  const resData: IResponseFormat = {
    data: null,
    message: 'Error at server',
    statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
  };
  return ResponseFormat(res, resData);
};

export const HandleError: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  try {
    console.log(err);
    if (err.name === 'MongoServerError') {
      return handleMongoError(err, res);
    }
    const resData: IResponseFormat = {
      data: null,
      message: 'Error at server',
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    };
    return ResponseFormat(res, resData);
  } catch (error) {
    const resData: IResponseFormat = {
      data: null,
      message: 'Error at server',
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
    };
    return ResponseFormat(res, resData);
  }
};
